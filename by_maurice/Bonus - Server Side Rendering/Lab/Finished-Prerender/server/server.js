const express = require("express");
const path = require("path");
const app = express();

const movies = require("./movies");
app.use("/api/movies", movies);

app.use(express.static("build"));

app.listen(process.env.PORT || 3001, function() {
  console.info("The server is listening at port " + (process.env.PORT || 3001));
});
