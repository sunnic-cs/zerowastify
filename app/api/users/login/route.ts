import { connectToDatabase } from "@/lib/database/database";

import UserModel from "@/lib/database/models/User.model";

import { NextApiRequest, NextApiResponse } from "next";

import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

connectToDatabase();

dotenv.config();



