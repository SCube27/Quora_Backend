const express = require('express');

const userRouter = require('./user.routes');
const questionRouter = require('./question.routes');
const answerRouter = require('./answer.routes');
const commentRouter = require('./comment.routes');
const likeRouter = require('./like.routes');
const topicRouter = require('./topic.routes');

const v1Router = express.Router();

// v1Router.use('/ping', (req, res) => {
//     return res.json({
//         msg: "Ping check ok"
//     });
// })

v1Router.use('/users', userRouter);
v1Router.use('/questions', questionRouter);
v1Router.use('/answers', answerRouter);
v1Router.use('/comments', commentRouter);
v1Router.use('/', likeRouter);
v1Router.use('/topics', topicRouter);

module.exports = v1Router;