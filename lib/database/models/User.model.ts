import mongoose, { Schema, model } from "mongoose";

import { UserDocument } from "../interfaces/user";

const UserSchema = new Schema<UserDocument> (
    {
        email: {
          type: String,
          required: [true, "Email is required."],
          trim: true,
          match: [
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^_<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
            "Please provide valid email address",
          ],
          unique: true,
        },
        role: {
          type: String,
          enum: ["admin", "user"],
          required: true,
        },
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        points : {
          type : Number,
          default : 0
        },
        cash : {
          type : Number,
          default : 0
        },  
        card_id : {
          type : [String],
        },
        lastTransaction : {
          type : Date
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

// const UserModel = model<UserDocument>("User", UserSchema);
const UserModel = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;