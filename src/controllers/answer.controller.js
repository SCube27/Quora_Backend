const { StatusCodes } = require('http-status-codes');

const { AnswerRepository } = require('../repositories/index');
const { AnswerService } = require('../services/index');
const { NotImplementedError } = require('../errors/index');

const answerService = new AnswerService(new AnswerRepository());

async function postAnswer(req, res, next) {
    try {
        const newAnswer = await answerService.postAnswer(req.params.questionId, req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Posted the Answer",
            error: {},
            data: newAnswer,
        });
    } catch (error) {
        next(error);
    }
}

async function updateAnswer(req, res, next) {
    try {
        const updatedAnswer = await answerService.updateAnswer(req.params.answerId, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Updated the Answer",
            error: {},
            data: updatedAnswer,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postAnswer,
    updateAnswer
}