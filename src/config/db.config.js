const mongoose = require('mongoose');
const { MONGO_URI } = require('./server.config');

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
    } catch (error) {
        console.log('Unable to connect to DB');
        console.log(error);
    }
}

module.exports = connectDB;