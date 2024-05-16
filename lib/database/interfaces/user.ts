import { ObjectId } from "mongoose";


export interface UserDocument{
    id: ObjectId;
    name: string;
    role: "admin" | "user"
    firstName: string;
    lastName: string
    email: string
    username : string;
    password : string;
    points : number;
    cash : number;
    createdAt : Date;
    updatedAt : Date;
}