import { IUser } from "@/app/types";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { connectToDatabase } from "./database/database";
import UserModel from "./database/models/User.model";

const { TOKEN_SECRET } = process.env
const isProduction = process.env.NODE_ENV === 'production'

if (!TOKEN_SECRET)
    throw new Error("Invalid env var: TOKEN_SECRET");

export const generateAuthToken = (_id: string): string => {
    return jwt.sign({ _id }, TOKEN_SECRET, { expiresIn: '7d' })
}

export const setAuthCookies = (value: string): void => {
    cookies().set({
        name: 'auth-token',
        value: value,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'strict' : 'lax',
        maxAge: value ? 7 * 24 * 60 * 60 : 0
    })
}

export const isUserAuthorised = async () => {
    const token = cookies().get('auth-token')?.value
    let user: IUser | null = null

    if (token) {
        const data = jwt.verify(token, TOKEN_SECRET)

        if (typeof data !== 'string') {
            try {
                connectToDatabase().catch((err: any) => { throw new Error(err) })
                user = await UserModel.findById(data._id)
                return user
            } catch (error) {
                return null
            }
        }

        return user
    }

    return user
}