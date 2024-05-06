const { StatusCodes } = require('http-status-codes');

const { QuestionRepository } = require('../repositories/index');
const { QuestionService } = require('../services/index')
const { NotImplementedError } = require('../errors/index');

const questionService = new QuestionService(new QuestionRepository());

async function postQuestion(req, res, next) {
    try {
        const newQuestion = await questionService.postQuestion(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Question Posted!",
            error: {},
            data: newQuestion,
        });
    } catch (error) {
        next(error);
    }
}

async function searchQuestions(req, res, next) {
    try {
        const { text, tags } = req.query;
        const allQuestions = await questionService.searchQuestions(text, tags);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Questions retrieved according to the query",
            error: {},
            questions: allQuestions,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postQuestion, 
    searchQuestions
}