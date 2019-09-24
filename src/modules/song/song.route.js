import express from "express";
import { SongController } from "./song.controller";
import { verify } from "../../middleware";

const router = express.Router();
router.use(verify);

router.get("/", SongController.getAll);
router.get("/:id", SongController.getOne);

export default router;
