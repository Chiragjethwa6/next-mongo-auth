import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";  
import User from "@/models/userModel";

connect();

export async function GET(req: NextRequest) {
    try {
        const user = await getDataFromToken(req);

        if (!user) {
            return NextResponse.json({ message: "Authentication failed" }, { status: 401 });
        }

        const dbUser = await User.findOne({ _id: user.id }, { password: 0 });
        console.log(dbUser);
        return NextResponse.json({
            message : "User found",
            data : dbUser
        });

    } catch (error : any) {
        return NextResponse.json({ error: error.message }, { status: 401 });
    }
}