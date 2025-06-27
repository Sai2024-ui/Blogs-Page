import { SignJWT , jwtVerify} from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const algorithm = "HS256";

export async function createJWT(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: algorithm })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(secret);
}

export async function verifyJWT(token) {
    try {
        const { payload } = await jwtVerify(token, secret, {algorithms: [algorithm]});
        return payload;
    } catch (error) {   
        console.error("JWT verification failed:", error);
        return null;
    }
}