import { poolConn as db } from "../config/database.config";

const select = {
    get: "select id, email, nombre, apellido, telefono, genero, tipoMembresiaId",
};
export class User {
    constructor(entity = {}) {
        const { tipoMembresia = {} } = entity;

        this.email = entity.email;
        this.nombre = entity.nombre;
        this.apellido = entity.apellido;
        this.telefono = entity.telefono;
        this.genero = entity.genero;
        this.tipoMembresiaId = tipoMembresia.id || 0;
        this.password = entity.password;
    }

    static from(entity) {
        return new User(entity);
    }

    static async getAll() {
        const sql = `${select.get} from usuario`;
        return (await db.query(sql))[0];
    }

    static async getOne(id) {
        const sql = `${select.get} from usuario where id = ?`;
        const user = (await db.query(sql, [id]))[0][0];

        const tipoMembresiaSql = "select * from tipoMembresia where id = ?";
        const tipoMembresia = await db.query(tipoMembresiaSql, [user.tipoMembresiaId]);

        delete user.tipoMembresiaId;
        user.tipoMembresia = tipoMembresia[0];
        return user;
    }

    static async findForLogin(email) {
        const userSql = `${select.get}, password from usuario where email = ?`;
        const user = (await db.query(userSql, [email]))[0][0];

        const tipoMembresiaSql = "select * from tipoMembresia where id = ?";
        const tipoMembresia = await db.query(tipoMembresiaSql, [user.tipoMembresiaId]);

        delete user.tipoMembresiaId;
        user.tipoMembresia = tipoMembresia[0][0];
        return user;
    }

    static async insert(user) {
        const sql = `INSERT INTO usuario SET ?`;
        await db.query(sql, User.from(user));
    }

    static getLeaderBoard() {
        return [
            {
                nombre: "Kevin Tito",
                score: 16000,
            },
            {
                nombre: "Omar Chavez",
                score: 10000,
            },
            {
                nombre: "Giancarlo Abanto",
                score: 6000,
            },
            {
                nombre: "Luis Galindo",
                score: 4000,
            },
        ];
    }
}
