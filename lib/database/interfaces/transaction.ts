import { ObjectId } from "mongoose";

export interface TransactionDocument {
    id : ObjectId;
    user : ObjectId;
    type : "point" | "cash" 
    // I decided to make it into single document type 
    // since the collection wont be expecting too many data, just simplifying things:) 
    dateTime : Date;
    value: number;
}