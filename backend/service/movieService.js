const request = require("request");
var rp = require("request-promise");

class MovieService {
  constructor(path) {}

  getOneMovie() {
    //TODO:
    const movieId = "1";
    const path = "cinemaworld/{movieId}";
    this.getMoviesRequest(path);
  }
  getAllMovies() {
    //TODO:
    const path = "cinemaworld/movies";
    this.getMoviesRequest(path);
  }
  getMoviesRequest(path) {
    let options = {
      method: "GET",
      uri: "http://webjetapitest.azurewebsites.net/api/cinemaworld/movies",
      headers: {
        "x-access-token": "sjd1HfkjU83ksdsm3802k"
      }
    };
    return new Promise((resolve, reject) => {
      let output = {
        success: null,
        statusCode: null
      };
      request(options, (err, response, body) => {
        if (err) {
          output.success = false;
          console.log("err", err);
          reject(err);
        } else {
          output.success = true;
          output.statusCode = response.statusCode;
          try {
            const requestBody = JSON.parse(body);
            output.body = requestBody;
            resolve(output);
          } catch (err) {
            output.success = false;
            console.log("err", err);
            reject(err);
          }
        }
      });
    });
  }
}

module.exports = MovieService;
