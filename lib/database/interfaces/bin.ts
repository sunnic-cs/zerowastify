import { ObjectId } from "mongoose";

export interface BinDocument {
    id : ObjectId;
    node_id : string;
    location : string; 
    type : string; 
    lastEmptied : Date; 
}