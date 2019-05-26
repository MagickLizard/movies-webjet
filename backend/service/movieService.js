const request = require("request");
var rp = require('request-promise');

class MovieService {
  constructor() {
    
  }

  getOneMovie() {
    const path = "cinemaworld/{movieId}";
    this.getMoviesRequest(path);
  }
  getAllMovies() {
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
          console.log("err", err);
          reject(err);
        } else {
          output.statusCode = response.statusCode;
          output.body = body;
          console.log("output body, ", output);
          return output;
          resolve(output);
        }
      });
    });
  }
}
module.exports = MovieService;