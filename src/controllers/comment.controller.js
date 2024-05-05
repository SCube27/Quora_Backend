const { StatusCodes } = require('http-status-codes');

const { NotImplementedError } = require('../errors/index');

function postCommentonAnswer(req, res, next) {
    try {
        throw new NotImplementedError('postCommentonAnswer');
    } catch (error) {
        next(error);
    }
}

function postCommentonComment(req, res, next) {
    try {
        throw new NotImplementedError('postCommentonComment');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postCommentonAnswer,
    postCommentonComment
}