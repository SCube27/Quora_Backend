const mongoose = require('mongoose');

const { Question, Answer } = require('../models/index');
const { BadRequestError, ConflictError, NotFoundError } = require('../errors');

class AnswerRepository {
    async postAnswer(answerData) {
        try {
            // checking if the user posting the answer has a valid userId
            const userId = answerData.userId.toString();
            if(!mongoose.Types.ObjectId.isValid(userId)) {
                throw new BadRequestError('userId');
            }

            // Checking if a User has already answered the question (User can answer only once to a question) 
            let answer = await Answer.findOne({ userId });
            if(answer) {
                throw new ConflictError("Answer", "UserID", userId);
            }

            // Checking if the question to be answered exists
            const questionId = answerData.questionId.toString();
            const question = await Question.findById(questionId);
            if(!question) {
                throw new NotFoundError("Question", questionId);
            }

            const newAnswer = await Answer.create({
                questionId: answerData.questionId,
                text: answerData.text,
                userId: answerData.userId,
                createdAt: (answerData.createdAt) ? answerData.createdAt : null,
            });
            return newAnswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateAnswer(answerId, updateData) {
        try {
            // Checking if the answerId to be updated is valid or not 
            answerId = answerId.toString();
            if(!mongoose.Types.ObjectId.isValid(answerId)) {
                throw new BadRequestError("Answer ID");
            }

            const updatedAnswer = await Answer.findByIdAndUpdate(answerId, {
                text: updateData.text,
            }, { new: true });
    
            // If the updated answer exists
            if(!updatedAnswer) {
                throw new NotFoundError("Answer", answerId);
            }
            return updatedAnswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = AnswerRepository;