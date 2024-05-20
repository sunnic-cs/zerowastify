import BinModel from "@/lib/database/models/Bin.model";
import UserModel from "@/lib/database/models/User.model";
import { getDatafromToken } from "@/lib/server-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Extract user ID from token
    const userId = await getDatafromToken(req);
    const userDoc = await UserModel.findById(userId);

    // Check if user exists
    if (!userDoc) {
      return NextResponse.json(
        {
          success: false,
          message: "Unexpected Error: User not found",
        },
        {
          status: 500,
        }
      );
    }

    // Check if user has admin role
    if (userDoc.role !== "admin") {
      return NextResponse.json(
        {
          success: false,
          message: "This user does not have the permission",
        },
        {
          status: 401,
        }
      );
    }

    // Parse request body
    const { node_id, location, type } = await req.json();

    // Validate request body
    if (!node_id || !location || !type) {
      return NextResponse.json(
        {
          success: false,
          message: "node_id, location, and type are required",
        },
        {
          status: 400,
        }
      );
    }

    // Validate type field
    const validTypes = ['recyclable', 'organic', 'general'];
    if (!validTypes.includes(type)) {
        return NextResponse.json(
        {
            success: false,
            message: `Invalid type. Valid types are: ${validTypes.join(', ')}`,
        },
        {
            status: 400,
        }
        );
    }

    // Check for duplicate Bin ID
    const oldBin = await BinModel.findOne({ node_id: node_id });
    if (oldBin) {
      return NextResponse.json(
        {
          success: false,
          message: "Duplicate Bin Id",
        },
        {
          status: 403,
        }
      );
    }

    // Create new Bin
    const newBin = await BinModel.create({
      node_id: node_id,
      location: location,
      type: type,
      lastEmptied: new Date(),
    });

    if (!newBin) {
      return NextResponse.json(
        {
          success: false,
          message: "Error creating new Bin",
        },
        {
          status: 500,
        }
      );
    }

    // Successfully created new Bin
    return NextResponse.json(
      {
        success: true,
        message: "Success in registering the Bin",
        payload: newBin,
      },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    // Handle errors
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
}