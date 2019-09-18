import db from '../config/database.config';

export class User {
    static get select() {
        return 'id, email, nombre, apellido, telefono, genero, TipoMembresia_id';
    }

    static async getAll() {
        const sql = `select ${User.select} from usuario`;
        return await db.query(sql);
    }
}
