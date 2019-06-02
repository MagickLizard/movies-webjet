const MovieService = require("../service/movieService");

const handler = async (req, res) => {
  console.log("res>", res.body);
  try {
    const movieService = new MovieService();
    let path = "/movies";
    return await movieService.getAllMovies(path);
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};

const handlerMovie = async (req, res) => {
  handler(req, res)
    .then(request => {
      let requestResult = request.body.Movies.map(async movie => {
        const movieService = new MovieService();
        let path = "/movie/" + movie.ID;
        try {
          return await movieService.getOneMovie(path);
        } catch (Error) {
          console.log("Error>>>", Error);
          return Error;
        }
      });
      return Promise.all([requestResult]);
    })
    .catch(error => {
      console.log("error", error);
      return error;
    });
};

module.exports = { handler, handlerMovie };
