class AnswerService {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }

    async postAnswer(questionId, answerData) {
        try {
            const newAnswer = {};
            newAnswer.questionId = questionId;
            newAnswer.text = answerData.text;
            newAnswer.userId = answerData.userId;
            newAnswer.createdAt = (answerData.createdAt) ? answerData.createdAt : null;
            return await this.answerRepository.postAnswer(newAnswer); 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateAnswer(answerId, updateData) {
        try {
            const updatedAnswer = await this.answerRepository.updateAnswer(answerId, updateData);
            return updatedAnswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = AnswerService;