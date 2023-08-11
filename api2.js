const express = require("express");
const dbConnect = require("./MongoDBconnection");
const mongodb = require("mongodb");
const app = express();

//Event and even emitter

const EventEmitter = require("events");
const event = new EventEmitter();

let count = 0;

event.on("getAPI", () => {
  count++;
  console.log("Get api called", count, "times");
});

app.use(express.json());

app.get("/", async (req, res) => {
  let db = await dbConnect();
  let data = await db.find().toArray();
  res.send(data);

  event.emit("getAPI");
});

app.post("/", async (req, res) => {
  let db = await dbConnect();
  let result = await db.insertOne(req.body);
  res.send(result);
});

app.put("/:name", async (req, res) => {
  let db = await dbConnect();
  let result = await db.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5005);
