const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question"
    },
    text: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user" 
    },
    createdAt: {
        type: mongoose.Schema.Types.Date
    }
});

const Answer = mongoose.model(`answer`, answerSchema);

module.exports = Answer;