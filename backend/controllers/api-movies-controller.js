const MovieService = require("../service/movieService");

class ApiMoviesController {
  constructor(req, res) {}

  handle(req, res) {
    let data = "";
    if (req) {
      let setMoviesResponse = setMovies(req, res);
      console.log("setMoviesResponse", setMoviesResponse);
      return setMoviesResponse;
    } else {
      return (data = {
        id: "Something wrong",
        movies: ""
      });
    }
  }
}

setMovies = async (req, res) => {
  const movieService = new MovieService();
  let moviesResponse = movieService.apiWrapper("test");
  moviesResponse.then(response => {
    console.log("response set moves", response);
  });
  return moviesResponse;
};

module.exports = ApiMoviesController;
