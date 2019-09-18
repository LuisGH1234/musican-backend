import { UnauthorizedError } from "../common";
export const verify = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization || authorization.length === 0)
            return res.status(401).send(new UnauthorizedError("Unauthorized"));
        console.log(authorization);
        const token = authorization.split(" ");
        req.user = jwt.verify(token[1], "secretkey");
        next();
    } catch (error) {
        res.status(401).send(new UnauthorizedError("Unauthorized", error.message));
    }
};
