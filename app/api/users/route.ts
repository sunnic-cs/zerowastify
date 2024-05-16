import { NextRequest,NextResponse } from "next/server";

import jwt, { JwtPayload } from 'jsonwebtoken';
import UserModel from "@/lib/database/models/User.model";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const authorizationHeader  = req.headers.get('authorization');
        console.log(authorizationHeader);
        if (!authorizationHeader) {
            return NextResponse.json({
                message: "Not Authorized!"
            }, {
                status : 401
            })
        }
      
        const token = authorizationHeader.split(' ')[1];
        console.log(token);
        if (!token) {
        return NextResponse.json({
            message: "Not Authorized!"
        }, {
            status : 401
        })
        }
      
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
        const context = { sub : decoded};
      
        return NextResponse.next();
    } catch (err) {

    }
  }