const mongoose = require('mongoose');

const { ConflictError, BadRequestError, NotFoundError } = require('../errors');
const { Question } = require('../models/index');

class QuestionRepository {
    async postQuestion(questionData) {
        try {
            // checking if the question created is by a valid user_id
            const user_id = questionData.user_id.toString();
            if(!mongoose.Types.ObjectId.isValid(user_id)) {
                throw new BadRequestError('user_id');
            }

            // finding if the question with the title already exists
            const { title } = questionData; 
            let question = await Question.findOne({ title });
            if(question) {
                throw new ConflictError("Question", "Title", title);
            }
    
            const newQuestion = await Question.create({
                title: questionData.title,
                body: questionData.body,
                topics: questionData.topics,
                user_id: questionData.user_id,
                createdAt: (questionData.createdAt) ? questionData.createdAt : null, 
            });
            return newQuestion;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async searchQuestions(text, tags) {
        try {
            const query = []; // Stores all sorts of queries to search for questions

            let activeQueries = false; // Keeping flag to check for either text or tags
    
            // If text is present then push it into the query
            if(text) {
                query.push({ title: { $regex: text } });
                query.push({ body: { $regex: text } });
                activeQueries = true; // Make the flag true
            }
    
            // If tags are present then push them into query
            if(tags) {
                query.push({
                    topics: {
                        $in: tags,
                    },
                });
                activeQueries = true; // Make the flag true
            }
    
            const findQuestions = await Question.find(
                (activeQueries) ? { $or: query } : {}
            );
    
            if(!findQuestions) {
                throw new NotFoundError("Text & Tags", query);
            }
            return findQuestions;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = QuestionRepository;