const { StatusCodes } = require('http-status-codes');

const { NotImplementedError } = require('../errors/index');

function postLike(req, res, next) {
    try {
        throw new NotImplementedError('postLike');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postLike,
};