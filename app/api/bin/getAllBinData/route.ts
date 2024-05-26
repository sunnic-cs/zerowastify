import { connectToDatabase } from "@/lib/database/database";
import BinModel from "@/lib/database/models/Bin.model";
import SensorsModel from "@/lib/database/models/Sensors.model";
import { NextRequest, NextResponse } from "next/server";

connectToDatabase();

export async function GET(req:NextRequest) {
    try {

        const allBin = await BinModel.find();

        if(allBin.length===0) {
            return NextResponse.json(
                {
                    success : true,
                    message : "No bin registered found"
                },
                {
                    status : 200
                }
            )
        }


        // example : Bin show 3 data so there are 3 bin
        // [{binA Data}, {binB Data}, {binC Data}] -> final payload should be like this

        const payload = [];

        for(const bin of allBin) {
            let latestData = await SensorsModel.findOne({node_id : bin.node_id}).sort({timestamp : -1});
            if(!latestData) {
                continue;
            }

            latestData = {
                node_id : bin.node_id,
                location : bin.location,
                type : bin.type,
                lastEmptied : bin.lastEmptied,
                temperature : latestData.temperature,
                humidity : latestData.humidity,
                gas_concentration : latestData.gas_concentration,
                distance_level : latestData.distance_level,
                timestamp : latestData.timestamp
            }
            payload.push(latestData);
        }

        return NextResponse.json(
            {
                success : true,
                message : "Latest Bin and Sensors data found",
                payload
            },
            {
                status : 200
            }
        );
    
    } catch (err:any) {
        return NextResponse.json({
            success : false,
            message : err.message,
        },{
            status : 500
        })
    }
}

