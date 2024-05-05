const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    bio: {
        type: String,
    },
    followedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
    ]
});

const User = mongoose.model(`user`, userSchema)

module.exports = User;