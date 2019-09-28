import express from "express";
import { UserController } from "./user.controller";
import { verify } from "../../middleware";

const router = express.Router();
router.use(verify);

router.get("/me", UserController.getMe);
router.get("/leaderboard", UserController.getLeadeboard);
router.get("/", UserController.getAll);
router.get("/:id", UserController.getOne);


export default router;
