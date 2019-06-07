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
  if (moviesData.body && moviesData.body.Movies) {
    const movieRequestWrapper = moviesData.body.Movies.map(async movie => {
      const movieService = new MovieService();
      let path = pathUrl + "/movie/" + movie.ID;
      try {
        let result = await movieService.getOneMovie(path);
        console.log('result.success>>>', result.success === "true");

        console.log('result>>>', result);
        return result;
        // }

        // let reFormat = { Movies: result };
        // return reFormat;
      } catch (Error) {
        console.log("Error>>>", Error);
        // return Error;
      }
    });
    console.log("movieRequestWrapper>>>", movieRequestWrapper);

    return movieRequestWrapper;
  } else {
    ["test"];
  }
};

const getMovieIdWrapper = async request => {
  let arrayOfMovieData = [];
  return request.map(async movie => {
    if (movie.cinemaWorld) {
      let cinemaworldArray = await getMovieById(
        movie.cinemaWorld,
        "cinemaworld"
      );
      console.log("cinemaworldArray>>>", cinemaworldArray);
      // arrayOfMovieData.push({ cinemaworldMovieId: cinemaworldArray });
      return cinemaworldArray;
    } else if (movie.filmWorld) {
      const filmworldArray = await getMovieById(movie.cinemaWorld, "filmworld");
      console.log('filmworldArray>>>', filmworldArray)
      // arrayOfMovieData.push({ filmworldMovieId: filmworldArray });
      return filmworldArray;
    } else {
      console.log("in else block getMovieIdWrapper>>>");
    }
    // console.log("arrayOfMovieData>>>", arrayOfMovieData);
    // return arrayOfMovieData;
    // return Promise.all([arrayOfMovieData]);
  });
  return arrayOfMovieData;
  // return Promise.all([arrayOfMovieData]);
};

module.exports = { getAllMovies, getMovieById, getMovieIdWrapper };
