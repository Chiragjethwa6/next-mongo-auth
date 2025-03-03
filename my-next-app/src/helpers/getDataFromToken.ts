import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value || '';
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
        console.log('Decoded Token:', decodedToken);
        return decodedToken;
    } catch (err) {
        throw new Error('Invalid token');``
    }
}