import jwt from "jsonwebtoken";
import { TokenResponse } from "../../common";

export class AuthController {
    static login(req, res) {
        const token = jwt.sign(
            { exp: Math.floor(Date.now() / 1000) + 60 * 60, user: "bar" },
            "secretkey",
        );
        res.send(new TokenResponse(token));
    }
}
