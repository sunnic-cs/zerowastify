import TagModel from "@/lib/database/models/Tags.model";
import UserModel from "@/lib/database/models/User.model";
import { getDatafromToken } from "@/lib/server-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req:NextRequest) {
    try {
        const userId = await getDatafromToken(req);
        const User = await UserModel.find({_id : userId});
        if(!User) {
            return NextResponse.json(
                {
                    success : false,
                    message : "User must be logged in",
                }, {
                    status : 401
                }
            )
        }
        const { tags_id } = await req.json();
        if(!tags_id) {
            return NextResponse.json(
                {
                    success : false,
                    message : "tags_id must be included",
                },{
                    status : 400
                }
            )
        }
        const tagExisted = await TagModel.findOne(
            {
                tags_id : tags_id
            }
        );

        if(!tagExisted) {
            return NextResponse.json(
                {
                    success : false,
                    message : "tags_id doesnt exist",
                },
                {
                    status : 400
                }
            )
        }

        const tagsCheck = await UserModel.findOne(
            {
                card_id: { $in: [tags_id]}
            }
        );
        if(tagsCheck) {
            return NextResponse.json(
                {
                    success : false,
                    message : "tags_id is already registered, Not Allowed!!"
                },
                {
                    status : 400
                }
            )
        }
        const updateTagStatus = await TagModel.findOneAndUpdate({_id : tagExisted._id}, {status : true}, {new : true});
        if(!updateTagStatus) {
            console.log("here");
            return NextResponse.json(
                {
                    success : false,
                    message : "Cannot find tag, update failed",
                },
                {
                    status : 500
                }
            )
        }

        const updateUser = await UserModel.findOneAndUpdate({_id : userId}, {$push : { card_id : tags_id }}, {new : true});
        if(!updateUser) {
            console.log("abcde");
            return NextResponse.json(
                {
                    success : false,
                    message : "Cannot find User, update failed",
                },
                {
                    status : 500
                }
            )
        }
        
        return NextResponse.json({
            success : true,
            message : "user data updated",
            payload : updateUser
        },{
            status : 200
        })

    } catch (err:any) {
        return NextResponse.json({
            success : false,
            message : err.message,
        },{
            status : 500
        })
    }
}

