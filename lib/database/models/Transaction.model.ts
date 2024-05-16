import mongoose, { Schema, model } from "mongoose";

import { TransactionDocument } from "../interfaces/transaction";

const TransactionSchema = new Schema<TransactionDocument> (
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        type : {
            type : String,
            enum : ["points", "cash"],
            required : [true, "Type must be points or cash"]
        },
        dateTime : {
            type : Date,
            default : Date.now()
        },
        value : {
            type : Number,
            required : [true, "Please enter a value"]
        }

    },
    {
        timestamps: true,
        toObject: {
          virtuals: true,
        },
        toJSON: {
          virtuals: true,
        },
      }
);

const TransactionModel = model<TransactionDocument>("Transaction", TransactionSchema);

export default TransactionModel;