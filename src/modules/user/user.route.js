import express from "express";
import { UserController } from "./user.controller";
import { verify } from "../../middleware";

const router = express.Router();
router.use(verify);

router.get("/", UserController.getAll);

export default router;
