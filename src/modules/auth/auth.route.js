import express from "express";
import { UnauthorizedError } from "../../common";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post("/login", AuthController.login);

router.get("/us", (req, res) => {
    const { authorization } = req.headers;
    if (!authorization || authorization.length === 0)
        res.status(204).send(new UnauthorizedError("Unauthorized"));

    const token = req.headers.authorization.split(" ");
    res.send(jwt.verify(token[1], "secretkey"));
});

export default router;
