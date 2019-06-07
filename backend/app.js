const express = require("express");
const app = express();
const port = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require("./routes/routes")(app);

app.get("", (req, res, status) => {
  res.status(status).send(req);
  res.send("PORT 3005", res);
});

app.listen(port, err => {
  if (err) {
    console.log("in app", err);
  }
  console.log("Listening on port " + port);
});
