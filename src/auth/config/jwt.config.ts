import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import config from "../../config/environment";

export class JwtConfig {

    public Configure(request: Request, response: Response, next: any) {
        let token = request.header('Authorization');
        token = token?.replace("Bearer ", "").replace("bearer ", "");

        if (!token) {
            return response.status(401).json({
                ok: false,
                message: "You must declare the Authorization header"
            });
        }

        jwt.verify(token, config.secretKey, (error, _resp) => {
            if (error) {
                response.status(401).json({
                    ok: false,
                    message: "Invalid token"
                });
            } else {
                next();
            }
        });
    }
}