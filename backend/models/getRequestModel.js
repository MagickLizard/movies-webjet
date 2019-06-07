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

const getMovieIdWrapper = async request => {
    let requestById = request.map(async movie => {
  
    if (movie.cinemaWorld) {

      let cinemaworldArray = await getMovieById(
        movie.cinemaWorld,
        "cinemaworld"
      );

      console.log("cinemaworldArray>>>", cinemaworldArray);
      return Promise.all(cinemaworldArray)
  // Promise.all([cinemaworldArray])
  // .then(item => {
  //   console.log(">item moviewrapper>>", item);
  //   // return item;
  // })
  // .catch(error => {
  //   console.log("error in handler movie -inside>", error);
  //   // return error;
  // });
      // return Promise.all([cinemaworldArray]);
      // return cinemaworldArray;
      // arrayOfMovieData.push({ cinemaworldMovieId: cinemaworldArray });
    }
    //  else if (movie.filmWorld) {

    //   const filmworldArray = await getMovieById(movie.cinemaWorld, "filmworld");
    //   // let filmPormiseAll = Promise.all([filmworldArray]);
    //   resolve(cinemaworldArray)
    //   console.log('filmworldArray>>>', filmworldArray);
    //         // return filmworldArray;
    //   // arrayOfMovieData.push({ filmworldMovieId: filmworldArray });
    // } else {
    //   console.log("in else block getMovieIdWrapper>>>");
    // }

    // console.log("arrayOfMovieData>>>", arrayOfMovieData);

    // return Promise.all([arrayOfMovieData]);
  });
console.log('>requestById>>', requestById)
      return requestById;
};

module.exports = { getAllMovies, getMovieById, getMovieIdWrapper };
