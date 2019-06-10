const MovieService = require("../service/movieService");

const getAllMovies = async path => {
  try {
    const movieService = new MovieService();
    let pathUrl = path + "/movies";
    return await movieService.getAllMovies(pathUrl);
  } catch (Error) {
    console.log("error>>>", Error);
    return [];
    // return Error;
  }
};
const requestById = async (req, path) => {
  try {
    const idResponse = req.map(async i => await getMovieById(i.ID, path));
    if (idResponse !== undefined) {
      return Promise.all(idResponse);
    }
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
};

const handlerMovie = async (req, path) => {
  let arrayOfPromises = [];
  try {
    if(req && req.query.movieId) {
    for(let current of req.query.movieId) {
      let parsed = JSON.parse(current) || {};
        let resp = await requestById(parsed[path], path);
        if (resp !== undefined) {
          console.log('>resp>>', resp)
          return resp;
        }
      }
    }
  } catch (Error) {
    console.log("error in handler movie", Error);
    return '';
  }
};

const getMovieById = async (movieId, path) => {
  try {
    const movieService = new MovieService();
    let pathUrl = path + "/movie/" + movieId;
    let movieIdResult = await movieService.getOneMovie(pathUrl);
    if (movieIdResult.success && movieIdResult.body !== undefined) {
      return movieIdResult.body;
    }
  } catch (Error) {
    console.log("Error in GET MOVIE BY ID>>>", Error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  handlerMovie,
  requestById,
  getMovieById
};
