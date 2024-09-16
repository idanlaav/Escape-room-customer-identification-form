import { UnauthorizedError } from "../4-models/errors-model";
import { Request } from "express";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import UserModel from "../4-models/user-model";

const secret = "You can not crack my password! Idan Laav"

function getNewToken(user: UserModel): string {
    const payload = { user };
    const token = jwt.sign(payload, secret, { expiresIn: "10000d" });    
    return token;
}

function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        const header = request.headers.authorization;                       
        if(!header) {
            reject(new UnauthorizedError("No token sent"));
            return
        }
        const token = header.substring(6)
        if(!token) {
            reject(new UnauthorizedError("No token sent"));
            return
        }
        jwt.verify(token, secret, (err, payload)=> {
            if(err) {
                reject(new UnauthorizedError("Invalid or expired token"));
                return
            }
            resolve(true)
        });
        return token;
    });
}

const salt = "MakeThingsGoRight";

function hash(plainText: string): string {
    if(!plainText) return null;
    const hashText = crypto.createHmac("sha512", salt).update(plainText).digest("hex");
    return hashText;
}

export default {
    getNewToken,
    verifyToken,
    hash
}