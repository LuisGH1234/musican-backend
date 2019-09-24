import { poolConn as db } from "../config/database.config";

const select = {
    get: "select id, nombre, reproducciones, autor, dificultad, valor, urlStorage",
};

export class Song {
    constructor(obj = {}) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.reproducciones = obj.reproducciones;
        this.autor = obj.autor;
        this.dificultad = obj.dificultad;
        this.valor = obj.valor;
        this.urlStorage = obj.urlStorage;
    }

    static from(obj) {
        return new Song(obj);
    }

    static async getAll() {
        const sql = `${select.get} from cancion`;
        return (await db.query(sql))[0];
    }

    static async getOne(id) {
        const sql = `${select.get} from cancion where id = ?`;
        const song = (await db.query(sql, [id]))[0][0];
        return song;
    }
}
