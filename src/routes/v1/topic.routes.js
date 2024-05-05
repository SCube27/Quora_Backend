const express = require('express');
const { topic } = require('../../controllers');

const topicRouter = express.Router();

// going to controllers
topicRouter.post('/', topic.postTopic);
topicRouter.get('/', topic.getTopics);

module.exports = topicRouter;