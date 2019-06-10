const express = require("express");
const app = express();
const port = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api")(app);
app.listen(port, err => {
  if (err) {
    console.log("error", err);
  }
  console.log("Listening on port " + port);
});
