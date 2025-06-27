import { NextResponse } from "next/server";

export const POST = async (req)=> {
    try {
        return NextResponse.json({
            message: "Login successful",
            user: {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com"
            }
        }); 

    } catch (error) {
        console.error("Error occurred during login:", error);
        return NextResponse.json({
            error: "An error occurred during login. Please try again later."
        }, { status: 500  });
    }
}