const express = require('express');
const app = express();

const { config } = require('./config/index');
const mooviesApi = require('./routes/moovies');
const { errorHandler, logErrors } = require('./utils/middlewares/errorHandlers');

app.use(express.json());

mooviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => console.log(`Ready on: http://localhost:${config.port}`));
