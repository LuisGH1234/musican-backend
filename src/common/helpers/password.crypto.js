import bcrypt from "bcrypt";

export class Password {
    static hash(planinPassword) {
        return bcrypt.hash(planinPassword, 10);
    }

    static compare(planinPassword, hashPassword) {
        return bcrypt.compare(planinPassword, hashPassword);
    }
}
