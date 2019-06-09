const { getAllMovies, getMovieById, handlerMovie } = require("../models/getRequestModel");
const handler = async (req, res) => {
  let arrayOfRequests = [];
  try {
    let requestFilmWorld = await getAllMovies("filmworld");
    let cinemaworld = await getAllMovies("cinemaworld");
    if (cinemaworld && cinemaworld.body) {
      arrayOfRequests.push({ cinemaworld: cinemaworld.body.Movies });
    }
    if (requestFilmWorld && requestFilmWorld.body) {
      arrayOfRequests.push({
        filmworld: requestFilmWorld.body.Movies
      });
    }
    return arrayOfRequests;
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};

const idRequestChecker = async (req, path) => {
  try {
    let response = await handlerMovie(req, path);
    if (response !== undefined) {
      return response;
    }
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
}

const idWrapper = async (req, path) => {
  let idArray = [];
  let filmResponse = await idRequestChecker(req, "filmworld");
  let cinemaResponse = await idRequestChecker(req, "cinemaworld");
  idArray.push(cinemaResponse, filmResponse);
  console.log('idArray>>>', idArray)
  return idArray;

};


module.exports = { handler, handlerMovie, idWrapper };
