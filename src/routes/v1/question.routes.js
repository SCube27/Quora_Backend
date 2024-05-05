const express = require('express');
const { question } = require('../../controllers');
const answerRouter = require('./answer.routes');

const questionRouter = express.Router();

// going to controllers
questionRouter.post('/', question.postQuestion);
questionRouter.get('/search', question.searchQuestion);
questionRouter.use('/', answerRouter);

module.exports = questionRouter;