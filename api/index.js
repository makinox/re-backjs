const express = require('express');
const app = express();

const { config } = require('./config/index');
const authApi = require('./routes/auth');
const mooviesApi = require('./routes/moovies');
const userMoviesApi = require('./routes/userMovies');
const { errorHandler, logErrors, wrapErrors } = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

app.use(express.json());

authApi(app);
mooviesApi(app);
userMoviesApi(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => console.log(`Ready on: http://localhost:${config.port}`));
