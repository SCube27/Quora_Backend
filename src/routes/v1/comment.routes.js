const express = require('express');
const { comment } = require('../../controllers');

const commentRouter = express.Router();

// going to controllers
commentRouter.post('/:commentId/comments', comment.postCommentonComment);

module.exports = commentRouter;