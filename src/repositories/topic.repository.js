const { Topic } = require('../models/index');
const { ConflictError } = require('../errors');

class TopicRepository {
    async createTopic(topicData) {
        try {
            const { topic } = topicData;

            // checking if the topic already exists
            let findTopic = await Topic.findOne({ topic });
            if(findTopic) {
                throw new ConflictError("Topic", "Topic Name", topic);
            }

            const newTopic = await Topic.create({
                topic: topicData.topic
            });
            return newTopic;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllTopics() {
        try {
            const allTopics = await Topic.find({});
            return allTopics;
        } catch (error) {
            console.log(error);
            throw error;
        }        
    }
}

module.exports = TopicRepository;