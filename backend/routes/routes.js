const express = require("express");

const cors = require("cors");
const { handler } = require("../controllers/api-movies-controller.js");
// NOTE: Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
// const helmet = require('helmet');
module.exports = app => {
  const corsOptions = {
    origin: "http://localhost:3001"
  };
  app.get("/", cors(corsOptions), (req, res) => {
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
};
