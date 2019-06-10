
const cors = require("cors");
const {
  handler,
  idWrapper
} = require("../controllers/api-movies-controller.js");

module.exports = api => {
  const corsOptions = {
    origin: "http://localhost:3001"
  };
  
  api.get("/movies", cors(corsOptions), (req, res) => {
    req.get("Referrer");
    handler(req, res)
      .then(value => {
        res.body = value;
        res.send(res.body);
      })
      .catch(err => {
        res.body = "A error has occurred please try again";
        res.send(res.body);
      })
  });
  api.get("/movie/", cors(corsOptions), (req, res) => {
    req.get("Referrer");
    let responseOfHander = idWrapper(req, res);
    responseOfHander
      .then(value => {
        res.body = value;
        res.send(res.body);
      })
      .catch(err => {      
        res.body = "A error has occurred please try again";
        res.send(res.body);
      })
  });
};
