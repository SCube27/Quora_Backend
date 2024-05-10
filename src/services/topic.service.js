class TopicService {
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }

    async createTopic(topicData) {
        try {
            const newTopic = await this.topicRepository.createTopic(topicData);
            return newTopic;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getAllTopics() {
        try {
            const allTopics = await this.topicRepository.getAllTopics();
            return allTopics;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = TopicService;