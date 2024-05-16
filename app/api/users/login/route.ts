import { connectToDatabase } from "@/lib/database/database";

import UserModel from "@/lib/database/models/User.model";


import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextRequest,NextResponse } from "next/server";

connectToDatabase();

export async function POST( req:NextRequest, res:NextResponse) {
    try{
        const { email, password } = await req.json();

        const user = await UserModel.findOne({email});
        if(!user) {
            return NextResponse.json(
                {
                    success : false,
                    message : "User does not exist",
                },
                {
                    status : 400
                }
            )
        }
        const validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword) {
                return NextResponse.json({
                    success: false,
                    message : "Invalid password",
                },
                {
                    status : 400
                },
            )
        }

        const tokenData = {
            user_id: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn : '2h',
        });

        res = NextResponse.json(
            {
                success : true,
                message : "Login success",
                payload : {
                    user,
                    token
                }
            },
            {
                status : 200
            }
        )
        res.cookies.set('token', token, {httpOnly: true});
        return res;
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



