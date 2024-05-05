const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await connectDB();
    console.log(`Connected to DB`);
});