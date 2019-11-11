const { env } = process;

export class Config {
    static get connectionLimit() {
        return 10;
    }

    static get host() {
        return env.DB_HOST || "us-cdbr-iron-east-01.cleardb.net"; // "35.226.44.8";
    }

    static get user() {
        return env.DB_USER || "b071488dca2501"; // "root";
    }

    static get password() {
        return env.DB_PASSWORD || "ec20c0a1"; // "root";
    }

    static get database() {
        return env.DATABASE || "heroku_f1cf93086df67b3"; // "musican";
    }

    static get env() {
        return env.NODE_ENV || "development";
    }

    static get PORT() {
        return process.env.PORT || 3000;
    }
}

export const Env = {
    PRODUCTION: "production",
    DEVELOPMENT: "development",
};
