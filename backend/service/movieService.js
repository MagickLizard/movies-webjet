const request = require("request");
const GetRequestHelper = require("../helpers/formatRequestHelper")

class MovieService {
  constructor() {
 
  }
  async getOneMovie(path) {
    const getRequestHelper = new GetRequestHelper(); 
    let url = "http://webjetapitest.azurewebsites.net/api/" + path;
    let responseId = await this.getMoviesRequest(url);
    let res = getRequestHelper.formatRequest(responseId);
    console.log('res in service>>>', res);
    return res;
  }
   getAllMovies(path) {
    let url = "http://webjetapitest.azurewebsites.net/api/" + path; 
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
          console.log("err in REQUEST", err);
          reject(err);
        } else {
          try {
            if (body === "") {
              console.log("err", err);
              output.success = false;
              reject(err);
            } 
            else if (body && Object.keys(body)) {
              const requestBody = JSON.parse(body); ///TODO: ERROR IS BEING THROWN HERE
              output.body = requestBody;
              output.success = true;
              output.statusCode = response.statusCode;
              resolve(output);
            }
          } catch (err) {
            console.log("err", err);
            output.success = false;
            reject(err);
          }
        }
      });
    });
  }
}

module.exports = MovieService;
