import { connectToDatabase } from "@/lib/database/database";

import UserModel from "@/lib/database/models/User.model";

import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcryptjs";


connectToDatabase();


// POST Route
export async function POST(req: NextRequest, res: NextResponse ) {
  try {
    
    const reqBody = await req.json();
    const {email, password, firstName, lastName} = reqBody;
    if (!(email && password && firstName && lastName)) {
      return NextResponse.json(
        {
          success : false,
          message : "All input is required!",  
        },
        {
          status : 400
        }
      )
    }
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return NextResponse.json(
				{
          success : false,
					message : 'This user already exists',
				},
				{ status: 400 }
			);
    }
    // Password Encryption
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      firstName,
      lastName,
      role: "user",
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const savedUser = await newUser.save();
    return NextResponse.json(
      {
      success: true,
			message: 'User created!',
			payload: savedUser,
      },
      {
        status : 201
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        error : err.message
      },
      {
        status:500
      }
    )
  }
};
