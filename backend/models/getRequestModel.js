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
  console.log("moviesData", moviesData);
  let resp = moviesData.map(movie => {
    const cinemaWorldRequest = movie.cinemaWorld.body.Movies.map(
      async movie => {
        const movieService = new MovieService();
        let path = pathUrl + "/movie/" + movie.ID;
        try {
          return await movieService.getOneMovie(path);
        } catch (Error) {
          console.log("Error>>>", Error);
          return Error;
        }
      }
    );
    // const filmworldRequest = movie.filmWorld.body.Movies.map(async movie => {
    //   const movieService = new MovieService();
    //   path = pathUrl + "/movie/" + movie.ID;
    //   try {
    //     return await movieService.getOneMovie(path);
    //   } catch (Error) {
    //     console.log("Error>>>", Error);
    //     return Error;
    //   }
    // });
    return Promise.all([cinemaWorldRequest, filmworldRequest]);
  });
  console.log("resp", resp);
  return resp;
};

module.exports = { getAllMovies, getMovieById };
