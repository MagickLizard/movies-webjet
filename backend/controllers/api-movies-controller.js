const MovieService = require("../service/movieService");
const { getAllMovies, getMovieById } = require("../models/getRequestModel");
const handler = async (req, res) => {
  console.log("res>", res.body);
  let arrayOfRequests = [];
  try {
    let requestFilmWorld = await getAllMovies("filmworld");
    let cinemaworld = await getAllMovies("cinemaworld");
    arrayOfRequests.push({
      cinemaWorld: cinemaworld,
      filmWorld: requestFilmWorld
    });
    //TODO add .filter or map or wahtever to only have fields you need
    console.log("arrayOfRequests", arrayOfRequests);
    return arrayOfRequests;
  } catch (Error) {
    console.log("error>>>", Error);
    return Error;
  }
};

const handlerMovie = async (req, res) => {
  handler(req, res)
    .then(request => {
      let movieIdReqArray = getMovieById(request, "cinemaworld");
      console.log("movieIdReqArray", movieIdReqArray);
    })
    .catch(error => {
      console.log("error", error);
      return error;
    });
};

module.exports = { handler, handlerMovie };
