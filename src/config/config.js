const { env } = process;

export class Config {
    static get connectionLimit() {
        return 10;
    }

    static get host() {
        return env.DB_HOST || 'localhost';
    }

    static get user() {
        return env.DB_USER || 'root';
    }

    static get password() {
        return env.DB_PASSWORD || 'root';
    }

    static get database() {
        return env.DATABASE || 'musican';
    }
}
