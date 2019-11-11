import mysql from "mysql2/promise";
import { Config, Env } from "./config";
import fs from "fs";
import { join } from "path";
import { promisify } from "util";
// NODE_ENV: production
const env = Config.env;

const ssl =
    env === Env.DEVELOPMENT
        ? {
              ca: fs.readFileSync(join(__dirname + "../../../certs/server-ca.pem")),
              key: fs.readFileSync(join(__dirname + "../../../certs/client-key.pem")),
              cert: fs.readFileSync(join(__dirname + "../../../certs/client-cert.pem")),
          }
        : undefined;

export const config = {
    // connectionLimit: Config.connectionLimit,
    host: Config.host,
    user: Config.user,
    password: Config.password,
    database: Config.database,
    charset: "utf8mb4",
    // ssl,
    // socketPath: env === Env.PRODUCTION ? "/cloudsql/musican:us-central1:musican-bd" : undefined,
};

export const poolConn = mysql.createPool(config);

// const testQuery = "SELECT 1 + 1 AS solution";
// poolConn.query(testQuery, (err, results, fields) => {
//     if (err) return console.log(err);
//     console.log("DB: The solution is: ", results[0].solution);
// });

// export const pool = poolConn;
