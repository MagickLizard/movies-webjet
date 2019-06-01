const MovieService = require("../service/movieService");

const handler = async (req, res) => {
  try {
    const movieService = new MovieService();
    let moviesResponse = await movieService.getMoviesRequest("test");
    console.log("moviesResponse", moviesResponse);
    return moviesResponse;
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};

module.exports = { handler };
