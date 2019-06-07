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

const getMovieById = async (moviesData, pathUrl) => {
  if (moviesData && moviesData.body && moviesData.body.Movies) {
    return moviesData.body.Movies.map(async movie => {
      const movieService = new MovieService();
      let path = pathUrl + "/movie/" + movie.ID;
      try {
        let movieIdResult = await movieService.getOneMovie(path);
        if (movieIdResult.success) {
          const reFormat = { Movies: movieIdResult };
          return reFormat;
        }
      } catch (Error) {
        console.log("getMovieById() - Error>>>", Error);
      }
    });
  }
};

const getMovieIdCinemaWrapper = async request => {
  let requestById = request.map(async movie => {
    if (movie.cinemaWorld) {
      let cinemaworldArray = await getMovieById(
        movie.cinemaWorld,
        "cinemaworld"
      );
      console.log("cinemaworldArray>>>", cinemaworldArray);
      return Promise.all(cinemaworldArray);
    }
  });

  return requestById;
};

const getMovieIdFilmWrapper = async request => {
  let requestById = request.map(async movie => {
    if (movie.cinemaWorld) {
      let filmworldArray = await getMovieById(movie.filmWorld, "filmworld");
      console.log("filmworldArray>>>", filmworldArray);
      return Promise.all(filmworldArray);
    }
  });
  return requestById;
};


module.exports = {
  getAllMovies,
  getMovieById,
  getMovieIdFilmWrapper,
  getMovieIdCinemaWrapper
};
