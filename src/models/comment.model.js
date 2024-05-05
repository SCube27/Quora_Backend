const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    parentName: {
        type: String,
        enum: ['answer', 'comment'],
        required: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "parentName"
    },
    text: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    createdAt: {
        type: mongoose.Schema.Types.Date
    }
});

const Comment = mongoose.model(`comment`, commentSchema);

module.exports = Comment;

// parentId, text, userId, createdAt