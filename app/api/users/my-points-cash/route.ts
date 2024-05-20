import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/lib/database/models/User.model";
import { getDatafromToken } from "@/lib/server-helpers";


export async function GET(req:NextRequest) {
    try {
        const userId = await getDatafromToken(req);
        const userData = await UserModel.findOne({_id : userId}).select("points cash");
        return NextResponse.json({
            success : true,
            message : "Data found",
            payload : userData
        }, {
            status : 200
        })
    } catch(err: any) {
        return NextResponse.json({
            success : false,
            error : err.message,
        }, {
            status : 500
        })
    }
}