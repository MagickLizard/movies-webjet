const MovieService = require("../service/movieService");

const getAllMovies = async path => {
  try {
    const movieService = new MovieService();
    let pathUrl = path + "/movies";
    return await movieService.getMoviesRequest(pathUrl);
  } catch (Error) {
    return [];
  }
};
const requestById = async (req, path) => {
  try {
    let parsed = JSON.parse(req) || [];
    const idResponse = parsed[path].map(async i => await getMovieById(i.ID, path));
    if (idResponse !== undefined) {
      return Promise.all(idResponse);
    }
  } catch (Error) {
    return '';
  }
};

const handlerMovie = async (req, path) => {
  let arrayOfPromises = [];
  try {
    if(req && req.query.movieId) {
    for(let current of req.query.movieId) {
        let resp = await requestById(current, path);
        if (resp !== undefined) {
          return resp;
        }
      }
    }
  } catch (Error) {
    return '';
  }
};

const getMovieById = async (movieId, path) => {
  try {
    const movieService = new MovieService();
    let pathUrl = path + "/movie/" + movieId;
    let movieIdResult = await movieService.getOneMovieRequest(pathUrl);
    if (movieIdResult.success && movieIdResult.body !== undefined) {
      return movieIdResult.body;
    }
  } catch (Error) {
    return [];
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  handlerMovie,
  requestById,
  getMovieById
};
