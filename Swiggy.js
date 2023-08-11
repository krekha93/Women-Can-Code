const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.get("/swiggy/data", (req, res) => {
  fs.readFile("./swiggy.json", (err, data) => {
    res.send(JSON.parse(data));
  });
});

app.listen("8089");
