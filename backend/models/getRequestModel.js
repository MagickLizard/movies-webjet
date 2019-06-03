const MovieService = require("../service/movieService");

const getAllMovies = async path => {
  console.log("path in model", path);
  try {
    const movieService = new MovieService();
    let pathUrl = path + "/movies";
    return await movieService.getAllMovies(pathUrl);
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};

const getMovieById = async (moviesData, pathUrl) => {
  const movieRequestWrapper = moviesData.body.Movies.map(async movie => {
    const movieService = new MovieService();
    let path = pathUrl + "/movie/" + movie.ID;
    try {
      return await movieService.getOneMovie(path);
    } catch (Error) {
      console.log("Error>>>", Error);
      return Error;
    }
  });
  return movieRequestWrapper;
};

const getMovieIdWrapper = async request => {
  let arrayOfMovieData = [];
  let promisedResponse = request.map(movie => {
    if (movie.cinemaWorld) {
      let cinemaworldArray = getMovieById(movie.cinemaWorld, "cinemaworld");
      arrayOfMovieData.push({ cinemaworldMovieId: cinemaworldArray });
      return cinemaworldArray;
    } else if (movie.filmWorld) {
      let filmworldArray = getMovieById(movie.cinemaWorld, "filmworld");
      arrayOfMovieData.push({ filmworldMovieId: filmworldArray });
      return filmworldArray;
    } else {
      console.log("in else block getMovieIdWrapper>>>");
    }
    console.log("arrayOfMovieData>>>", arrayOfMovieData);

    // return Promise.all([arrayOfMovieData]);
  });
  console.log("promisedResponse", promisedResponse);
  return promisedResponse;
};

module.exports = { getAllMovies, getMovieById, getMovieIdWrapper };
