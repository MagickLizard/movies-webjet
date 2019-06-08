const { getAllMovies, getMovieById, handlerMovie } = require("../models/getRequestModel");
const handler = async (req, res) => {
  let arrayOfRequests = [];
  try {
    let requestFilmWorld = await getAllMovies("filmworld");
    let cinemaworld = await getAllMovies("cinemaworld");
    if (cinemaworld && cinemaworld.body) {
      arrayOfRequests.push({ cinemaWorld: cinemaworld.body.Movies });
    }
    if (requestFilmWorld && requestFilmWorld.body) {
      arrayOfRequests.push({
        filmWorld: requestFilmWorld.body.Movies
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
    let response = await handlerMovie(req, "filmworld");
    console.log(">idWrapper response>>", response);
    if (response !== undefined) {
      console.log(">idWrapper response1>>", response !== undefined);
      return response;
    }
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
}

const idWrapper = async (req, path) => {
  let arrayTest = [];
  let filmResponse = await idRequestChecker(req, "filmworld")
  let cinemaResponse = await idRequestChecker(req, "cinema")
  console.log('>cinemaResponse>>', cinemaResponse)
  console.log('>filmResponse>>', filmResponse)
  let resp = {cinema: cinemaResponse, film: filmResponse}
  return resp;
};


module.exports = { handler, handlerMovie, idWrapper };
