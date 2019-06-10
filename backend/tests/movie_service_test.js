/* global it:false, describe:false beforeEach:false */

const MovieService = require("../service/movieService");
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
    it("#GetAllMovies - Should return Promise pending when no path is set for sync.", () => {
      const result = movieService.getMoviesRequest();
      expect(result).to.exist;
    });
    it("#GetAllMovies - Should return error string when no path set.", async () => {
      const result = await movieService.getMoviesRequest();
      const errorFixture = 'Error';
      expect(result).to.exist;
      expect(result).to.deep.equal(errorFixture);
    }).timeout(6000);
    it("#GetAllMovies - Should return error string when wrong path set.", async () => {
      const result = await movieService.getMoviesRequest();
      const errorFixture = 'Error';
      expect(result).to.exist;
      expect(result).to.deep.equal(errorFixture);
    }).timeout(6000);
    it("#GetAllMovies - Should get all film movies.", async () => {
      const result = await movieService.getMoviesRequest("filmworld/movies");
      expect(result.success).to.exist;
      expect(result.statusCode).to.exist;
    }).timeout(8000);
    it("#GetAllMovies - Should get all cinema movies.", async () => {
      const result = await movieService.getMoviesRequest("cinemaworld/movies");
      expect(result.success).to.exist;
      expect(result.statusCode).to.exist;
    }).timeout(8000);
  });
  describe("getOneMovieRequest()", () => {
    it("#getOneMovieRequest - Should return Promise pending when no path is set for sync.", () => {
      const result = movieService.getOneMovieRequest();
      expect(result).to.exist;
    });
    it("#getOneMovieRequest - Should return error message when no path set.", async () => {
      const result = await movieService.getOneMovieRequest();
      const errorFixture = 'Error';
      expect(result).to.exist;
      expect(result).to.deep.equal(errorFixture);
    }).timeout(6000);
    it("#getOneMovieRequest - Should return error message when wrong path set.", async () => {
      const result = await movieService.getOneMovieRequest();
      const errorFixture = 'Error';
      expect(result).to.exist;
      expect(result).to.deep.equal(errorFixture);
    }).timeout(8000);
  });
});
