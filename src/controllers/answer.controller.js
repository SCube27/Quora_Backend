const { StatusCodes } = require('http-status-codes');

const { NotImplementedError } = require('../errors/index');

function postAnswer(req, res, next) {
    try {
        throw new NotImplementedError('postAnswer');
    } catch (error) {
        next(error);
    }
}

function updateAnswer(req, res, next) {
    try {
        throw new NotImplementedError('updateAnswer');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postAnswer,
    updateAnswer
}