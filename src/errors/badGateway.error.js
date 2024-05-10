const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class BadGatewayError extends BaseError {
    constructor(details) {
        super("BadGateway", StatusCodes.BAD_GATEWAY, "Invalid Response Recieved on the Gateway", details);
    }
}

module.exports = BadGatewayError;
