import { connectToDatabase  } from "@/lib/database/database";

import  UserModel  from '@/lib/database/models/User.model';

import { NextRequest, NextResponse } from "next/server";

connectToDatabase();

// GET
export async function GET(req: NextRequest, res:NextResponse) {
    try {
        const result = await UserModel.find({})
        .sort({points: -1})
        .limit(5);

        if(!result) {
            return NextResponse.json({
                success : "false",
                message : "No data found"
            }, {
                status : 404
            })
        }
        
        return NextResponse.json(
            {
                success : "true",
                message : "Data found",
                payload : result
            }, {
                status : 200
            }
        )
    } catch (err : any) {
        return NextResponse.json(
            {
              error : err.message
            },
            {
              status:500
            }
          )
    }
}