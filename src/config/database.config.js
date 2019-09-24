import mysql from "mysql";
import { Config, Env } from "./config";
import fs from "fs";
import { join } from "path";
import { promisify } from "util";
// NODE_ENV: production
const env = Config.env

const ssl = {
    ca: fs.readFileSync(join(__dirname + "../../../certs/server-ca.pem")),
    key: fs.readFileSync(join(__dirname + "../../../certs/client-key.pem")),
    cert: fs.readFileSync(join(__dirname + "../../../certs/client-cert.pem")),
};

const poolConn = mysql.createPool({
    connectionLimit: Config.connectionLimit,
    host: Config.host,
    user: Config.user,
    password: Config.password,
    database: Config.database,
    charset: "utf8mb4",
    ssl: env == "development" ? ssl : undefined,
    socketPath: env == "production" ? "/cloudsql/musican:us-central1:musican-bd" : undefined,
});

const testQuery = "SELECT 1 + 1 AS solution";
poolConn.query(testQuery, (err, results, fields) => {
    console.log("\x1b[36m%s\x1b[0m", env);
    if (err) return console.log(err);
    console.log("The solution is: ", results[0].solution);
    poolConn.query = promisify(poolConn.query);
});

export default poolConn;
