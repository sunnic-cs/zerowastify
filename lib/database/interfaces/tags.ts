import { ObjectId } from "mongoose";

export interface TagsDocument {
    id : ObjectId;
    tags_id : string; 
    status : boolean; 
    lastRead : Date; 
}