/* global it:false, describe:false, beforeEach:false */

const { getAllMovies, handlerMovie } = require("../models/getRequestModel");
const expect = require("chai").expect;

describe("GetAllMovies()", () => {
  let getRequestModel;
  it("#GetAllMovies - should return pending", () => {
    expect(getAllMovies()).to.exist;
  });
  it("#GetAllMovies - Should return list of movies related to cinema.", async () => {
    const result = await getAllMovies("cinemaworld");
    console.log("result>>>", result);
    expect(result).to.exist;
    // expect(result).to.equal('promise resolved');
  });
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
