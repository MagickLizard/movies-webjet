/* global it:false, describe:false */

const { getAllMovies, handlerMovie } = require("../../models/getRequestModel");
const expect = require("chai").expect;

describe("GetAllMovies()", () => {
  it("#GetAllMovies - should return pending", () => {
    expect(getAllMovies()).to.exist;
    expect(getAllMovies()).to.be.an('promise');
  });
  it("#GetAllMovies - Should return list of movies related to cinema.", async () => {
    const allCinemaResults = await getAllMovies("cinemaworld");
    console.log('allCinemaResults>>>', allCinemaResults)
    expect(allCinemaResults).to.be.an('object');
    expect(allCinemaResults.success).to.exist;
    expect(allCinemaResults.body).to.exist;
    expect(allCinemaResults).to.exist;
  }).timeout(6000);
  it("#GetAllMovies - Should return list of movies related to film.", async () => {
    const result = await getAllMovies("filmworld");
    expect(result).to.be.an('object');
    expect(result.success).to.exist;
    expect(result.body).to.exist;
    expect(result).to.exist;
  }).timeout(6000);
});
describe("handlerMovie()", () => {
  it("#handlerMovie - should return pending and thrown error response.", () => {
    let handleMovieResult = handlerMovie();
    console.log('handleMovieResult>>>', handleMovieResult)
    expect(handlerMovie()).to.exist;
    expect(handleMovieResult).to.be.an('promise');
  });
    it("#handlerMovie - should return pending and thrown error response.", async () => {
    let handleMovieResult = handlerMovie();
    
    console.log('handleMovieResult>>>', handleMovieResult)
    expect(handlerMovie()).to.exist;
    expect(handleMovieResult).to.deep.equal('Error');
    expect(handleMovieResult).to.be.an('string');
  });
});
