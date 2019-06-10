/* global it:false, describe:false */

const {handler, idWrapper } = require("../controllers/api-movies-controller.js");
const requestFixture = require("./fixtures/request_fixture.js");
const expect = require("chai").expect;

describe("api movies Controller()", () => {
  describe("handler()", () => {
    it("#Handler - sync test should return pending promise.", async () => {
      const result = handler();
      expect(result).to.exist;
    }).timeout(2000);
    it("#Handler - should return array of movies.", async () => {
      const result = await handler();
      const fixture = requestFixture._allFilmMovies();
      expect(result).to.exist;
      expect(result).to.equal(fixture);
    }).timeout(8000);
  });
  describe("idWrapper()", () => {
    it("#IdWrapper - should return a empty array when no path is set.", async () => {
      const result = await idWrapper();
      expect(result).to.exist;
    }).timeout(6000);
    it("#IdWrapper should return array of movie details.", async () => {
      const requestQueryFixtureWithId = {
        req: {
          query: {
            movieId: "fw0080684"
          }
        }
      };
      const result = await idWrapper(requestQueryFixtureWithId.req);
      expect(result).to.exist;
      expect(result).to.be.an("array");
      expect(result).to.deep.equal([]);
    }).timeout(6000);
    it("#IdWrapper - should return empty array when movieId wrong.", async () => {
      const requestQueryFixture = {
        req: {
          query: {
            movieId: "test"
          }
        }
      };
      const result = await idWrapper(requestQueryFixture.req);
      expect(result).to.exist;
      expect(result).to.be.an("array");
      expect(result).to.deep.equal([]);
    }).timeout(6000);
  });
});
