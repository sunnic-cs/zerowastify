import { connectToDatabase } from "@/lib/database/database";

import UserModel from "@/lib/database/models/User.model";


import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextRequest,NextResponse } from "next/server";

connectToDatabase();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {email,password} = reqBody;

        const user = await UserModel.findOne({email});
        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400})
        }

        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword){
            return NextResponse.json({error:"Invalid password"},{status:400})
        }

        const tokendata = {
            id : user._id,
            email: user.email,
        }
        const token = jwt.sign(tokendata, process.env.TOKEN_SECRET!,{expiresIn:"1h"});
        
        const response = NextResponse.json({message:"Login successful",token, user},{status:200});

        response.cookies.set("token", token, {
            httpOnly: true,

        })
        return response;

    } catch (error: any) {
        return NextResponse.json({error:error.message},{status:500})
    }

}



