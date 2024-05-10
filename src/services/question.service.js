class QuestionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    async postQuestion(questionData) {
        try {
            const newQuestion = await this.questionRepository.postQuestion(questionData);
            return newQuestion;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async searchQuestions(text, tags) {
        try {
            const allQuestions = await this.questionRepository.searchQuestions(text, tags);
            return allQuestions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionService;