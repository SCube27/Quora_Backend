const express = require('express');
const { answer, comment } = require('../../controllers');
const commentRouter = require('./comment.routes');

const answerRouter = express.Router();

// going to controllers
answerRouter.post('/:questionId/answers', answer.postAnswer);
answerRouter.put('/:answerId', answer.updateAnswer);
answerRouter.post('/:answerId/comments', comment.postCommentonAnswer);

module.exports = answerRouter;