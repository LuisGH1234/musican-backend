export class UnauthorizedError {
    constructor(message, reason = "Unauthorized") {
        this.message = message;
        this.reason = reason;
    }
}

export class Error {
    constructor(message) {
        this.message = message;
    }
}
