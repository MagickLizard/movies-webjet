const { getAllMovies, handlerMovie } = require("../models/getRequestModel");
const handler = async () => {
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
    return [];
  }
};

const idRequestChecker = async (req, path) => {
  try {
    let response = await handlerMovie(req, path);
    if (response !== undefined) {
      return response;
    }
  } catch (Error) {
    return "Error";
  }
};

const formatResponse = async idArray => {
  let allDataTogether = [];
if (idArray === 'Error') {
  return 'Error'
}
  for (let i of idArray) {
    if (i !== undefined) {
      for (let children of i) {
        if (children !== undefined) {
          allDataTogether.push(children);
        }
      }
    }
  }
  let uniq = new Set(allDataTogether.map(value => JSON.stringify(value)));
  let result = Array.from(uniq).map(value => JSON.parse(value));
  return result;
};
const idWrapper = async (req) => {
  let idArray = [];
  let filmResponse = await idRequestChecker(req, "filmworld");
  let cinemaResponse = await idRequestChecker(req, "cinemaworld");
  if (cinemaResponse) {
    idArray.push(cinemaResponse);
  }
  if (filmResponse) {
    filmResponse.push(filmResponse);
  }
  let result = await formatResponse(idArray);
  return result;
};

module.exports = { handler, idWrapper };
