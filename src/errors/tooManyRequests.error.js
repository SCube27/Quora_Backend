const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class TooManyRequestsError extends BaseError {
    constructor() {
        super(`TooManyRequestsError`, StatusCodes.TOO_MANY_REQUESTS, `Too Many Requests Attempted at once`, {});
    }
}

module.exports = TooManyRequestsError;
