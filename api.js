const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express(); //create object

app.use(cors());
app.get("/hello/:name?", function (req, res) {
  const msg = req.query.name; //query pram
  const pathParam = req.params.name; //path param

  console.log("msg is ", msg, " name is ", pathParam);
  res.send({ msg, pathParam });
});

app.listen("8083", function () {
  console.log("listening at 8083");
});

app.get("/covidlivetracker/data", (req, res) => {
  fs.readFile("./covidlivetracker.json", (err, data) => {
    res.send(JSON.parse(data));
  });
});

app.listen("8084", function () {});
