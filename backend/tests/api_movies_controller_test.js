/* global it:false, describe:false */

const {handler, idWrapper } = require("../controllers/api-movies-controller.js");
const requestFixture = require("./fixtures/request_fixture.js");

const expect = require("chai").expect;

describe("api movies Controller()", () => {
  it("#Handler() - sync test should return pending promise.", async () => {
    const result = handler();
    expect(result).to.exist;
  }).timeout(6000);
  
  it("#Handler() - ", async () => {
    const result = await handler();
    console.log('handler >>>', result)
    expect(result).to.exist;
    expect(result).to.deep.equal(requestFixture._allFilmMovies());
  }).timeout(6000);

  it("#idWrapper() - should return a empty array when no path is set.", async () => {
    const result = await idWrapper();
    expect(result).to.exist;
  }).timeout(6000);
  it("#idWrapper() should return array of movie details.", async () => {
    let requestQueryFixtureWithId = {
      req: {
        query: {
          movieId: 'fw0080684'
        }
      }
    };
    const result = await idWrapper(requestQueryFixtureWithId.req);
    expect(result).to.exist;
    expect(result).to.deep.equal([]);
  }).timeout(6000);
  it("#idWrapper() should return empty array when movieId wrong.", async () => {
    let requestQueryFixture = {
      req: {
        query: {
          movieId: "test"
        }
      }
    };
    const result = await idWrapper(requestQueryFixture.req );
    expect(result).to.exist;
    expect(result).to.deep.equal([]);
  }).timeout(6000);
});

