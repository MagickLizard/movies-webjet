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
  let requestIdResult = [];
  const allMovies = await handler(req, res);
  console.log("handlerMovie() - allMovies>>>", allMovies);
  try {
    const idRequest = await getMovieIdWrapper(allMovies);
    if (idRequest) {
      const mapResult = idRequest.map( k => {
        console.log("k>>>", k);
        return k.then(item => {
          console.log(">item>>", item.length);
          const movieIds = item.map(i => {
            console.log("i>>>", i);
            if (i === undefined) {
              console.log(">movieIds UNDEFINED>>", i);
            } else {
              console.log('i>>>', i.Movies)
              return i;
              // requestIdResult.push(i)
            }
          });
          console.log(">movieIds>>", movieIds);
          return movieIds;
        }).catch(error => {
          console.log("error in handler movie -inside>", error);
          // return error;
        });
      });
      console.log("mapResult>>>1", mapResult);
      // return mapResult;
      return Promise.all(mapResult);
      // return Promise.all(requestIdResult);
    }
    // else if(idRequest && idRequest.filmWorldId) {
    //   let values = idRequest.filmWorldId.map(k => {
    //     k.then(item => {
    //       console.log(">getMovieIdWrapper>>", value);
    //       return item;
    //     }).catch(error => {
    //       console.log("error in handler movie -inside>", error);
    //       // return error;
    //     });
    //   });
    //   console.log('values>>>', values);
    // }
    // else {
    //   console.log('allMovies in error>>>', allMovies);
    //   console.log('idRequest in error>>>', idRequest);
    //   console.log("error in handler movie1", Error);
    // }
    return Promise.all(requestIdResult);
  } catch (Error) {
    console.log("error in handler movie", Error);
  }
};

module.exports = { handler, handlerMovie };
