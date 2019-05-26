const MovieService = require("../service/movieService");

class ApiMoviesController {
  constructor () {
    this.movieService = new MovieService();
  }
  handle(req, res) {
    if (req) { // TODO: 
     return this.movieService.getMoviesRequest(req)
    }
    else {
      return data = {
        id: 'Something wrong',
        movies: ''
      };
    }
  }

}
module.exports = ApiMoviesController;


