require("dotenv").config({ path: "/.env" });
// console.log(process.env)
import "@babel/polyfill";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoute from "./modules/user";
import authRoute from "./modules/auth";

const app = express();
const apiDoc = "https://documenter.getpostman.com/view/5216695/SVmwvxbU?version=latest";

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => res.send("still alive"));
app.get("/documentation", (req, res) => {
    res.writeHead(301, { Location: apiDoc });
    res.end();
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use((e, req, res, next) => {
    return res.status(500).json({
        route: req.originalUrl,
        error: { stack: e.message },
    });
});

app.listen(app.get("port"), err => {
    if (err) console.log(err);
    console.log(`Server on port: ${app.get("port")}`);
});
