import { ObjectId } from "mongoose";


export interface UserDocument{
    id: ObjectId;
    role: "admin" | "user"
    firstName: string;
    lastName: string
    email: string;
    password : string;
    points : number;
    cash : number;
    card_id : string[];
    lastTransaction: Date; // Used to later calculate all the points after this datetime
    createdAt : Date;
    updatedAt : Date;
}