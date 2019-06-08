const MovieService = require("../service/movieService");

const getAllMovies = async path => {
  try {
    const movieService = new MovieService();
    let pathUrl = path + "/movies";
    return await movieService.getAllMovies(pathUrl);
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
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
  try {
    let requestBody = req.query.movieId.map(async current => {
      let parsed = JSON.parse(current) || {};
      if (parsed[path]) {
        let resp = await requestById(parsed[path], path);
        if (resp !== undefined) {
          return resp;
        }
      }
    });
    return Promise.all(requestBody);
  } catch (Error) {
    console.log("error in handler movie", Error);
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
  handlerMovie
};
