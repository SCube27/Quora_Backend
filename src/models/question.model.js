const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    topics: [
        {
            type: String,
            ref: "topic"
        }
    ],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    createdAt : {
        type: mongoose.Schema.Types.Date
    }
});

const Question = mongoose.model(`question`, questionSchema);

module.exports = Question;