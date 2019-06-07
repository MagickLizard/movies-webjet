const request = require("request");
var rp = require("request-promise");

class MovieService {
  constructor(path) {}

  async getOneMovie(path) {
    let url = "http://webjetapitest.azurewebsites.net/api/" + path;
    console.log("url on movie>", url);
    return this.getMoviesRequest(url);
  }
  async getAllMovies(path) {
    let url = "http://webjetapitest.azurewebsites.net/api/" + path;
    console.log("url", url);
    return this.getMoviesRequest(url);
  }
  getMoviesRequest(url) {
    let options = {
      method: "GET",
      uri: url,
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
          try {
            if (body === "") {
              console.log(">empty body>>", body);
              output.success = false;
              console.log("err", err);
              reject(err);
            }
            else if (body && Object.keys(body)) {
              const requestBody = JSON.parse(body); ///TODO: ERROR IS BEING THROWN HERE
              console.log("requestBody", requestBody);
              output.body = requestBody;
              output.success = true;
              output.statusCode = response.statusCode;
              resolve(output);
            }
          } catch (err) {
            console.log(">body>>", body);

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
