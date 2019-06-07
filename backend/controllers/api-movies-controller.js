const MovieService = require("../service/movieService");
const {
  getAllMovies,
  getMovieById,
  getMovieIdFilmWrapper,
  getMovieIdCinemaWrapper,
} = require("../models/getRequestModel");
const handler = async (req, res) => {
  let arrayOfRequests = [];
  try {
    let requestFilmWorld = await getAllMovies("filmworld");
    let cinemaworld = await getAllMovies("cinemaworld");
    arrayOfRequests.push({
      cinemaWorld: cinemaworld,
      filmWorld: requestFilmWorld
    });
    return arrayOfRequests;
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};
const AllMovieIdResults = async request => {
  if (request) {
    const mapResult = request.map( k => {
      return k.then(item => {
        const movieIds = item.map(i => {
          if (i !== undefined) {
            return i;
          } 
        });
        return movieIds;
      }).catch(error => {
        console.log("error in handler movie -inside>", error);
      });
    });
    console.log("mapResult>>>1", mapResult);
    return Promise.all(mapResult);
  }
};

const handlerMovie = async (req, res) => {
  const allMovies = await handler(req, res);
  console.log("handlerMovie() - allMovies>>>", allMovies);
  try {
    let film = await getMovieIdFilmWrapper(allMovies);
    let cinema = await getMovieIdCinemaWrapper(allMovies);
    const filmResponse = await AllMovieIdResults(film);
    const cinemaResponse = await AllMovieIdResults(cinema);
    const filmResult = (filmResponse).reduce((previous, current) => current, {});
    const cinemaResult = (cinemaResponse).reduce((previous, current) => current, {});
    console.log('filmResult>>>', filmResult)
    
   finalResponse = { cinemaResult, filmResult};
   console.log('finalResponse>>>', finalResponse)
   return finalResponse;
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
};

module.exports = { handler, handlerMovie };
