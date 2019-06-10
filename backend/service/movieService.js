const request = require("request");
const GetRequestHelper = require("../helpers/formatRequestHelper");

class MovieService {
  constructor() {}
  async getOneMovie(path) {
    const getRequestHelper = new GetRequestHelper();
    const url = "http://webjetapitest.azurewebsites.net/api/" + path;
    const responseId = this.getMoviesRequest(url);
    const requestResult = getRequestHelper.checkRequest(responseId);
    console.log("requestResult in service>>>", requestResult);
    return requestResult;
  }
  async getAllMovies(path) {
    const getRequestHelper = new GetRequestHelper();
    const url = "http://webjetapitest.azurewebsites.net/api/" + path;
    const responseId = this.getMoviesRequest(url);
    const requestResult = getRequestHelper.checkRequest(responseId);
    console.log("RequestResponse in service>>>", requestResult);
    return requestResult;
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
        try {
          if (body === "") {
            output.success = false;
            output.statusCode = 500;
            output.body = "";
            output.error = "Error";
            reject(output);
          } else if (body && Object.keys(body)) {
            const requestBody = JSON.parse(body); ///TODO: ERROR IS BEING THROWN HERE
            output.body = requestBody;
            output.success = true;
            output.statusCode = response.statusCode;
            resolve(output);
          }
        } catch (err) {
          output.success = false;
          output.statusCode = 500;
          output.body = "";
          output.error = err;
          reject(err);
        }
      });
    });
  }
}

module.exports = MovieService;
