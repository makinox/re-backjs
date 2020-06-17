const express = require('express');
const app = express();

const { config } = require('./config/index');
const mooviesApi = require('./routes/moovies');

app.use(express.json());

mooviesApi(app);

app.listen(config.port, () => console.log(`Ready on: http://localhost:${config.port}`));
