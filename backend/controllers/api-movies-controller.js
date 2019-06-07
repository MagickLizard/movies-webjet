const MovieService = require("../service/movieService");
const {
  getAllMovies,
  getMovieById,
  getMovieIdWrapper
} = require("../models/getRequestModel");
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
  let allMovies = await handler(req, res);
  try {
    let idReq = await getMovieIdWrapper(allMovies);
    console.log("idreq>>>", idReq);
    let values = idReq.cinemaworldMovieId.map(k => {
      k.then(item => {
        console.log(">getMovieIdWrapper>>", value);
        return item;
      }).catch(error => {
        console.log("error in handler movie -inside>", error);
        return error;
      });
    });
    // let values = idReq.map(k => {
    //   console.log("test", k.cinemaworldMovieId);
    // });
    // console.log(">values>>", values);

    // .then(value => {
    //   console.log(">getMovieIdWrapper>>", value);
    //   return value;
    // })
    // .catch(error => {
    //   console.log("error in handler movie -inside>", error);
    //   return error;
    // });
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
};

module.exports = { handler, handlerMovie };
