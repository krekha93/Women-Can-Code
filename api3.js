const express = require("express");
require("./Config");
const mongodb = require("mongodb");
const model = require("./Schema");

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new model(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await model.find();
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await model.updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params.id);
  let data = await model.deleteOne(req.params);
  res.send(data);
});

app.listen(5006);
