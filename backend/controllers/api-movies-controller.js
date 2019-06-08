
const {
  getAllMovies,
  getMovieById,
} = require("../models/getRequestModel");
const handler = async (req, res) => {
  let arrayOfRequests = [];
  try {
    let requestFilmWorld = await getAllMovies("filmworld");
    let cinemaworld = await getAllMovies("cinemaworld");
    console.log('filmWorld>>>', requestFilmWorld)
    if(cinemaworld && cinemaworld.body) {
      arrayOfRequests.push({cinemaWorld:
        cinemaworld.body.Movies,
      });
    }
    if(requestFilmWorld && requestFilmWorld.body) {
      arrayOfRequests.push({
        filmWorld: requestFilmWorld.body.Movies,
      });
      return arrayOfRequests;
    }
    // else {
    //   return "bad data";
    // }
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};

const handlerMovie = async (req, res) => {
  try {
    let film = await getMovieById(req.query.movieId, req.query.location);
    if(film !== undefined) {
      console.log('film>>>', film)
      return film;
    }
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
};

module.exports = { handler, handlerMovie };
