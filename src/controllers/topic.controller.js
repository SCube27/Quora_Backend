const { StatusCodes } = require('http-status-codes');

const { TopicRepository } = require('../repositories/index');
const { TopicService } = require('../services/index');
const { NotImplementedError } = require('../errors/index');

const topicService = new TopicService(new TopicRepository());

async function postTopic(req, res, next) {
    try {
        const newTopic = await topicService.createTopic(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Created a new Topic',
            error: {},
            data: newTopic,
        });
    } catch (error) {
        next(error);
    }
}

async function getTopics(req, res, next) {
    try {
        const allTopics = await topicService.getAllTopics();

        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Fetched all Topics',
            error: {},
            data: allTopics,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    postTopic,
    getTopics
}