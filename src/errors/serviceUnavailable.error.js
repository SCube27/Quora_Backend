const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ServiceUnavailableError extends BaseError {
    constructor(serviceName, details) {
        super(`ServiceUnavailableError`, StatusCodes.SERVICE_UNAVAILABLE, `Service ${serviceName} is currently unavailable`, details);
    }
}

module.exports = ServiceUnavailableError;
