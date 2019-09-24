import { config } from "../database.config";
import fs from "fs";
import { join } from "path";
import mysql from "mysql2/promise";
import { Config, Env } from "../config";

export async function seedSongs() {
    // if (Config.env == Env.PRODUCTION) return;
    try {
        const file = fs.readFileSync(join(__dirname, "../../../sql/seed/canciones.seed.sql"));
        const connection = await mysql.createConnection({ ...config, multipleStatements: true });
        await connection.beginTransaction();
        const songs = (await connection.query("select * from cancion"))[0];
        if (songs.length > 0) {
            console.log("seedSongs:", "not saved");
            return await connection.rollback();
        }
        await connection.query(file.toString("utf8"));
        await connection.commit();
        console.log("seedSongs:", "saved");
    } catch (error) {
        console.error("seedSongs:", error);
        return await connection.rollback();
    }
}
