const express = require('express');
// const { mooviesMock } = require('../utils/mocks/moovies');

function mooviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);
  router.get('/', (req, res, next) => {
    try {
      res.status(200).json({
        data: 'movies',
        message: 'Movies listed',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = mooviesApi;
