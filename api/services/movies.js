const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    const createMovieId = this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = this.mongoDB.update(this.collection, movieId, movie);
    return updatedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = this.mongoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }

  async deleteAll() {
    const deletedMovieId = this.mongoDB.deleteAll(this.collection);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
