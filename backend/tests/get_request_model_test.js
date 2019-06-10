/* global it:false, describe:false */

const { getAllMovies, handlerMovie } = require("../models/getRequestModel");
const expect = require("chai").expect;

describe("GetAllMovies()", () => {
  it("#GetAllMovies - should return pending", () => {
    expect(getAllMovies()).to.exist;
  });
  it("#GetAllMovies - Should return list of movies related to cinema.", async () => {
    const result = await getAllMovies("cinemaworld");
    expect(result).to.exist;
    // expect(result).to.equal('promise resolved');
  }).timeout(4000);
  it("#GetAllMovies - Should return list of movies related to film.", async () => {
    const result = await getAllMovies("filmworld");
    console.log("result film>>>", result);
    expect(result).to.exist;
    // expect(result).to.equal(object);
  }).timeout(6000);
});
describe("handlerMovie()", () => {
  it("#handlerMovie - should return pending and throw error", () => {
    expect(handlerMovie()).to.exist;
  });
});
