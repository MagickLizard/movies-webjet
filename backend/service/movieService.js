const request = require("request");
const FormatRequestHelper = require("../helpers/formatRequestHelper");

class MovieService {
  constructor() {}
  async getOneMovieRequest(path) {
    const getRequestHelper = new FormatRequestHelper();
    const url = "http://webjetapitest.azurewebsites.net/api/" + path;
    const responseId = this.getRequest(url);
    const requestResult = getRequestHelper.checkRequest(responseId);
    return requestResult;
  }
  async getMoviesRequest(path) {
    const getRequestHelper = new FormatRequestHelper();
    const url = "http://webjetapitest.azurewebsites.net/api/" + path;
    const responseId = this.getRequest(url);
    const requestResult = getRequestHelper.checkRequest(responseId);
    return requestResult;
  }
  getRequest(url) {
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
      let timeout = 6000;
      request(options, timeout, (err, response, body) => {
        try {
          if (body === "") {
            err.connect = true;
            output.success = false;
            output.statusCode = 500;
            output.body = "";
            output.error = "Error";
            reject(err);
          } else if (body && Object.keys(body)) {
            const requestBody = JSON.parse(body);
            output.body = requestBody;
            output.success = true;
            output.statusCode = response.statusCode;
            resolve(output);
          }
        } catch (err) {
          err.connect = true;
          output.success = false;
          output.statusCode = 500;
          output.body = "";
          output.error = "Error";
          reject(err);
        }
      });
    });
  }
}

module.exports = MovieService;
