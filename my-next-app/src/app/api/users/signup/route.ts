import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(req: NextRequest){
    try{
        const reqBody = await req.json();
        const {username, email, password} = reqBody;
        console.log(reqBody);
        
        // check user exists
        const ifUserExists = await User.findOne({email});
        if (ifUserExists){
            return NextResponse.json(
                {error: "User already exists"},
                {status: 400}
            )
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // create a user

        const user = await new User({
            username, 
            email,
            password: hashedPassword
        })

        const savedUser = await user.save();
        console.log(savedUser);

        await sendEmail({
            email, emailType: "VERIFY", userId: savedUser._id
        });

        return NextResponse.json({
            message: "User created successfully.",
            success: true,
            savedUser
        })


    } catch(error : any){
        return NextResponse.json(
            {error: error.mesage},
            {status: 500}
        )
    }
}