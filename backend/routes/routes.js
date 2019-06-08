const express = require("express");

const cors = require("cors");
const {
  handler,
  idWrapper
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
    let responseOfHander = idWrapper(req, res);
    console.log('responseOfHander>>>', responseOfHander)
    
    responseOfHander
      .then(value => {
        console.log("value get one movie>>>", value);
        res.body = value;
        res.send(res.body);
      })
      .catch(error => {
        console.log("error", error);
        return error;
      });
  });
};
