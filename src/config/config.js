const { env } = process;

export class Config {
    static get connectionLimit() {
        return 10;
    }

    static get host() {
        return env.DB_HOST || "35.226.44.8";
    }

    static get user() {
        return env.DB_USER || "root";
    }

    static get password() {
        return env.DB_PASSWORD || "root";
    }

    static get database() {
        return env.DATABASE || "musican";
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
