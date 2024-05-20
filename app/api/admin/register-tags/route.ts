import TagModel from "@/lib/database/models/Tags.model";
import UserModel from "@/lib/database/models/User.model";
import { getDatafromToken } from "@/lib/server-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const userId = await getDatafromToken(req);
        const userDoc = await UserModel.findOne({_id : userId});
        if(!userDoc) {
            return NextResponse.json(
                {
                    success:false,
                    message : "Unexpected Error"
                }, {
                    status : 500
                }
            )
        }
        if(userDoc.role !== "admin") {
            return NextResponse.json (
                {
                    success : false,
                    message : "This user does not have the permission"
                },
                {
                    status : 401
                }
            )
        }

        const {tags_id} = await req.json();

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

        const oldTags = await TagModel.findOne({tags_id : tags_id});
        if(oldTags) {
            return NextResponse.json(
                {
                    success : false,
                    message : "Duplicate Tags Id"
                },
                {
                    status : 403
                }
            )
        }

        const newTags = await TagModel.create({
            tags_id : tags_id
        })
        if(!newTags) {
            return NextResponse.json(
                {
                    success : false,
                    message : "Error creating new tags"
                },
                {
                    status : 500
                }
            )
        }
        return NextResponse.json(
            {
                success : true,
                message : "Success in registering the Tags",
                payload : newTags
            },
            {
                status : 201
            }
        )


    } catch (err:any) {
        return NextResponse.json({
            success : false,
            message : err.message,
        },{
            status : 500
        })
    }
}

