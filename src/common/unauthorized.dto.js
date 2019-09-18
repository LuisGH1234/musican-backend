export class UnauthorizedError {
    constructor(message, reason) {
        this.message = message;
        this.reason = reason;
    }
}
