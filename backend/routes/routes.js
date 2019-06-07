const express = require("express");

const cors = require("cors");
const {
  handler,
  handlerMovie
} = require("../controllers/api-movies-controller.js");
// NOTE: Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
// const helmet = require('helmet');
module.exports = app => {
  // white listing
  const corsOptions = {
    origin: "http://localhost:3001"
  };
  app.get("/movies", cors(corsOptions), (req, res) => {
    req.get("Referrer");
    handler(req, res)
      .then(value => {
        console.log("value get", value);
        res.body = value;
        res.send(res.body);
      })
      .catch(error => {
        console.log("error", error);
        return error;
      });
  });
  app.get("/movie/", cors(corsOptions), (req, res) => {
    req.get("Referrer");
    handlerMovie(req, res)
      .then(value => {
        console.log("value get one movie", value);
        // let promisedResponse = value.map(movie => {
        //   console.log("movie ids map>>>", movie);
        //   movie.map(test => {
        //     console.log("test>>>", test);

        //     // res.body = movie;
        //     // res.send(res.body);
        //   });
        // });
        // return promisedResponse;
      })
      .catch(error => {
        console.log("error", error);
        return error;
      });
  });
};
