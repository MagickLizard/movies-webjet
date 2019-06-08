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

const getMovieById = async (movieId, path) => {
  try {
    if (path === "cinemaworld" || path === "filmworld") {
      const movieService = new MovieService();
      let pathUrl = path + "/movie/" + movieId;
      let movieIdResult = await movieService.getOneMovie(pathUrl);
      if (movieIdResult.success) {
        return movieIdResult;
      }
    }
  } catch (Error) {
    console.log("Error>>>", Error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById
};
