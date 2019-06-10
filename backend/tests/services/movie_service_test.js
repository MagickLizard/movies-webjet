/* global it:false, describe:false beforeEach:false */

const MovieService = require("../../service/movieService");
const expect = require("chai").expect;

describe("MovieService class", () => {
  let movieService;
  beforeEach(() => {
    movieService = new MovieService();
  });
  it("Class should be defined", () => {
    let movieService = new MovieService();
    expect(movieService).to.exist;
  });
  describe("getOneMovieRequest()", () => {
    it("#GetMoviesRequest - Should return Promise pending when no path is set for sync.", () => {
      const result = movieService.getMoviesRequest();
      expect(result).to.exist;
      expect(result).to.be.an('promise');
    });
    it("#GetMoviesRequest - Should return error string when no path set.", async () => {
      let result = await movieService.getMoviesRequest();
      let errorFixture = 'Error';
      expect(result).to.exist;
      
      expect(result).to.deep.equal(errorFixture);
    }).timeout(6000);
    it("#GetMoviesRequest - Should return error string when wrong path set.", async () => {
      const getMoviesRequest = await movieService.getMoviesRequest();
      const errorFixture = 'Error';
      expect(getMoviesRequest).to.exist;
      expect(getMoviesRequest).to.deep.equal(errorFixture);
    }).timeout(6000);
    it("#GetMoviesRequest - Should get all film movies.", async () => {
      const moviesFilmResult = await movieService.getMoviesRequest("filmworld/movies");      
      expect(moviesFilmResult.success).to.exist;
      expect(moviesFilmResult.statusCode).to.exist;
    }).timeout(8000);
    it("#GetMoviesRequest - Should get all cinema movies.", async () => {
      const moviesCinemaResult = await movieService.getMoviesRequest("cinemaworld/movies");
      expect(moviesCinemaResult.success).to.exist;
      expect(moviesCinemaResult.statusCode).to.exist;
    }).timeout(8000);
  });
  describe("getOneMovieRequest()", () => {
    it("#GetOneMovieRequest - Should return Promise pending when no path is set for sync.", () => {
      const result = movieService.getOneMovieRequest();
      expect(result).to.exist;
      expect(result).to.be.an('promise');
    });
    it("#GetOneMovieRequest - Should return error message when no path set.", async () => {
      const result = await movieService.getOneMovieRequest();
      const errorFixture = 'Error';
      expect(result).to.exist;
      expect(result).to.be.an('string');
      expect(result).to.deep.equal(errorFixture);
    }).timeout(9000);
    it("#GetOneMovieRequest - Should return error message when wrong path set.", async () => {
      const result = await movieService.getOneMovieRequest();
      const errorFixture = 'Error';
      expect(result).to.exist;
      expect(result).to.deep.equal(errorFixture);
    }).timeout(8000);
  });
});
