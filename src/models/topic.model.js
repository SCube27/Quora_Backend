const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    topic: { 
        type: String,
        required: true,
        unique: true
    }
});

const Topic = mongoose.model(`topic`, topicSchema);

module.exports = Topic;