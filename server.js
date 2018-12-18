const express = require("express");
const app = express();
const dogs = require("./model/model.js");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs", {
    dogs
  });
});

app.listen(8080, () => console.log("on port 8080"));
