import UserModel from "@/lib/database/models/User.model";
import { getDatafromToken } from "@/lib/server-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    try {
        const userId = await getDatafromToken(req);

        // Retrieve user data
        const userData = await UserModel.findOne({ _id: userId });
        if (!userData) {
            return NextResponse.json({
                success: false,
                message: 'User not found',
            }, {
                status: 404
            });
        }

        const currentCash = userData.cash;
        const currentPoints = userData.points;
        const newCash = currentCash + currentPoints;

        const updatedUserData = await UserModel.findOneAndUpdate(
            { _id: userId },
            {
                cash: newCash,
                points: 0
            },
            {
                new: true
            }
        );

        return NextResponse.json({
            success: true,
            message: "Exchange Success",
            payload: updatedUserData,
        }, {
            status: 200
        });

    } catch (err: any) {
        console.log(err);
        return NextResponse.json({
            success: false,
            message: err.message,
        }, {
            status: 500
        });
    }
}