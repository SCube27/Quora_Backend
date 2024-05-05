const { StatusCodes } = require('http-status-codes');

const { NotImplementedError } = require('../errors/index');

function followUser(req, res, next) {
    try {
        throw new NotImplementedError('followUser');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    followUser,
}