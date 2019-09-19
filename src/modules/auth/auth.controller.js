import jwt from "jsonwebtoken";
import { TokenResponse, UnauthorizedError, Error } from "../../common/dto";
import { User } from "../../schemas";
import { Password } from "../../common/helpers";

export class AuthController {
    static async login(req, res, next) {
        try {
            const { email = "", password } = req.body;
            const user = await User.findForLogin(email);
            if (!user) return res.status(401).send(new UnauthorizedError("Invalid credentials"));
            // console.log(user);

            const isValid = await Password.compare(password, user.password);
            if (!isValid) return res.status(401).send(new UnauthorizedError("Invalid credentials"));
            // exp: Math.floor(Date.now() / 1000) + 60 * 60,
            delete user.password;
            const token = jwt.sign({ user }, "secretkey", { expiresIn: "1h" });
            return res.send(new TokenResponse(token));
        } catch (error) {
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            const { body: user } = req;
            console.log(user);
            if (user.password !== user.confirmPassword)
                return res.status(400).send(new Error("las contraseñas no coinciden"));

            user.password = await Password.hash(user.password);
            await User.insert(user);

            delete user.password;
            const token = jwt.sign({ user }, "secretkey", { expiresIn: "1h" });
            return res.send(new TokenResponse(token));
        } catch (error) {
            next(error);
        }
    }
}
