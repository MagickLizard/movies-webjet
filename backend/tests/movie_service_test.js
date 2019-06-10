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
  describe("getAllMovies()", () => {
    it("#GetAllMovies() - Should return Promise pending when no path is set for sync", () => {
      const result = movieService.getAllMovies();
      expect(result).to.exist;
    });
    it("#GetAllMovies() - Should throw rejected promise with a error", async () => {
      const result = await movieService.getAllMovies();
      console.log('result error throw>>>', result);
      // const errorFixture =  { success: false, statusCode: 500, body: '', error: 'Error' };
      const errorFixture = 'Error';
      expect(result).to.deep.equal(errorFixture);
    }).timeout(6000);
  });
  describe("getOneMovie()", () => {
    it("#getOneMovie() - Should return Promise pending when no path is set for sync", () => {
      const result = movieService.getOneMovie();
      expect(result).to.exist;
    });
    it("#getOneMovie() - Should throw rejected promise with a error", async () => {
      const result = await movieService.getOneMovie();
      // const errorFixture =  { success: false, statusCode: 500, body: '', error: 'Error' };
      const errorFixture = 'Error';
      expect(result).to.deep.equal(errorFixture);
    }).timeout(8000);
  });
});
