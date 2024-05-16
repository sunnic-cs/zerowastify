import { ObjectId } from "mongoose";


export interface UserDocument{
    id: ObjectId;
    role: "admin" | "user"
    firstName: string;
    lastName: string
    email: string
    password : string;
    points : number;
    cash : number;
    createdAt : Date;
    updatedAt : Date;
}