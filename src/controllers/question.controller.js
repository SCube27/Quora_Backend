const { StatusCodes } = require('http-status-codes');

const { NotImplementedError } = require('../errors/index');

function postQuestion(req, res, next) {
    try {
        throw new NotImplementedError('postQuestion');
    } catch (error) {
        next(error);
    }
}

function searchQuestion(req, res, next) {
    try {
        throw new NotImplementedError('searchQuestion');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postQuestion, 
    searchQuestion
}