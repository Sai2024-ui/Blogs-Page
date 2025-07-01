import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ['/login'];

async function isAuthentic(req){
    const token = req.cookies.get('newToken')?.value;
    if(!token) return false;

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token,secret);
        return true;
    }
    catch(err){
        return false;
    }
}

export async function middleware(req){
    const {pathname} = req.nextUrl;
    
    if (PUBLIC_PATHS.includes(pathname)){
        return NextResponse.next();
    }

    const auth = await isAuthentic(req);
    if (!auth){
        return NextResponse.redirect(new URL('/login', req.url));
    }
    // console.log(auth)
    return NextResponse.next();
}

export const config = {
    matcher: [  '/',
                '/users/:path*',],
};