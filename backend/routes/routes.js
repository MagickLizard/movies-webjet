const express = require("express");

const cors = require("cors");
const {
  handler,
  idWrapper
} = require("../controllers/api-movies-controller.js");
module.exports = app => {
  // white listing
  const corsOptions = {
    origin: "http://localhost:3001"
  };
  app.get("/movies", cors(corsOptions), (req, res) => {
    req.get("Referrer");
    handler(req, res)
      .then(value => {
        res.body = value;
        res.send(res.body);
      })
      .catch(error => {
        return 'A error has occurred.'
      });
  });
  app.get("/movie/", cors(corsOptions), (req, res) => {
    req.get("Referrer");
    let responseOfHander = idWrapper(req, res);
    responseOfHander
      .then(value => {
        res.body = value;
        res.send(res.body);
      })
      .catch(error => {
        return 'A error has occurred.'
      });
  });
};
