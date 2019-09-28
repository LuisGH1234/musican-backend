// require("dotenv").config();
import "@babel/polyfill";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { Config, Env } from "./config/config";
import userRoute from "./modules/user";
import authRoute from "./modules/auth";
import songRoute from "./modules/song";
import { seedSongs } from "./config/seed/song.seed";
seedSongs();
const app = express();
const apiDoc = "https://documenter.getpostman.com/view/5216695/SVmwvxbU?version=latest";

app.set("port", Config.PORT);
app.set("format", Config.env == Env.DEVELOPMENT ? "dev" : "tiny");

app.use(express.json());
app.use(morgan(app.get("format")));
app.use(cors());

app.get("/", (req, res) => res.send("still alive"));
app.get("/documentation", (req, res) => {
    res.writeHead(301, { Location: apiDoc });
    res.end();
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/songs", songRoute);

app.use((e, req, res, next) => {
    console.log(e);
    return res.status(500).json({
        route: req.originalUrl,
        error: { stack: e.message },
    });
});

app.listen(app.get("port"), err => {
    if (err) console.log(err);
    console.log(`Server on port: ${app.get("port")} :: ${Config.env}`);
});
