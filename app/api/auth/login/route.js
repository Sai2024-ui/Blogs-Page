import { NextResponse } from "next/server";
import { createJWT } from "@/app/lib/component/auth";

export const POST = async (req)=> {
    try{
       const {email, password} = await req.json();
       if(email === "rahul@example.com" && password === "password"){
         const token = await createJWT({email});
         const res = NextResponse.json({message: "Login Successfull", email}, {status:200});
        //  console.log(token, "Token");

         res.cookies.set("newToken",token,{
            httpOnly: true,
            maxAge: 60*60,
            secure: process.env.NODE_ENV == 'production',
            path: '/',
         })

         return res
       }
    }
    catch(err){
        console.log("Error in login api", err);
        return NextResponse.json({
            error: "Error in login api",
        },{status:500})
    }
}