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
    console.log('req>>>', req)
    const idResponse = req.map(async i => await getMovieById(i.ID, path));
    if(idResponse !== undefined) {
      console.log('idResponse>>>', idResponse)
      // return idResponse;
    return Promise.all(idResponse);
    }
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
};

const handlerMovie = async (req, path) => {
  try {
    console.log('req.query.movieId>>>', req.query.movieId)
    let requestBody = (req.query.movieId).reduce((previous, current) => {return JSON.parse(current) || {} }, {})
    console.log('requestBody>>>', requestBody)
    if (requestBody.filmWorld) {
      let resp = await requestById(requestBody.filmWorld, path);
      if(resp !== undefined) {
      console.log(">resp film>>", resp);
      return resp;
      }
    } 
    if (requestBody.cinemaWorld) {
      let resp = await requestById(requestBody.cinemaWorld, path);
      if(resp !== undefined) {
      console.log(">resp cinema>>", resp);
      return resp;
      }
    }
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
    console.log("Error>>>", Error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  handlerMovie
};
