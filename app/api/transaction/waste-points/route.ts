// Retrieve all the documents of collection until the last transaction date then calculate all the points
// then update the user points

import CollectionModel from "@/lib/database/models/Collection.model";
import UserModel from "@/lib/database/models/User.model";
import { getDatafromToken } from "@/lib/server-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req:NextRequest, res:NextResponse) {
    try {
        const userId = await getDatafromToken(req);

        // Retrive user data
        const userData = await UserModel.findOne({_id : userId})
        if (!userData) {
            return NextResponse.json({
                success: false,
                message: 'User not found',
            }, {
                status: 404
            });
        }

        const lastTransactionDate = userData.lastTransaction;

        const userCardIds = userData.card_id;

        console.log("User Card IDs:", userCardIds);

        // Retrieve collection data for the user and after the last transaction date
        const collectionData = await CollectionModel.find({
            card_id: { $in : userData.card_id},
            timestamp: { $gt: lastTransactionDate }
        });

        if(collectionData === null)  {
            return NextResponse.json(
                {
                    success : false,
                    message : `No Collection Data`,
                }, {
                    status : 400
                }
            )
        }

        if(collectionData.length===0) {
            return NextResponse.json(
                {
                    success : true,
                    message : `No new Collection found since ${lastTransactionDate}`,

                }, {
                    status : 200
                }
            )
        }

        // Calculate total collected percentage
        let totalPoint = 0;
        for(const data of collectionData) 
        {
            totalPoint = totalPoint + data.waste_level
        }
        
        

        const updatedUserData = await UserModel.findOneAndUpdate({_id : userId}, {
            points : totalPoint,
            lastTransaction : new Date()
        }, {
            new: true
        })

        if(!updatedUserData) {
            
            return NextResponse.json(
                {
                    success : false,
                    message : "Error when updating points"
                },
                {
                    status : 500
                }
            )
        }

        return NextResponse.json({
            success: true,
            message : "Points Refreshed",
            payload: updatedUserData,
        }, {
            status: 200
        });

    }  catch (err : any) {
        console.log(err);
        return NextResponse.json({
            success : false,
            message : err.message,
        },{
            status : 500
        })
    }
}