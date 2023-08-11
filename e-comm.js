const express = require("express");
require("./DB/config");

const User = require("./DB/User");
const Product = require("./DB/Product");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.post("/register", async (req, res) => {
  let data = new User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let data = await User.findOne(req.body).select("-password");
    if (data) {
      res.send(data);
    } else {
      res.send({ result: "No user found" });
    }
  } else {
    res.send({ result: "No user found" });
  }
});

app.post("/add-product", async (req, res) => {
  console.log(req.body);
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
});

app.get("/products", async (req, res) => {
  let product = await Product.find();
  if (product.length > 0) {
    res.send(product);
  } else {
    res.send({ result: " No product found" });
  }
});

app.delete("/product/:id", async (req, res) => {
  let data = await Product.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.get("/product/:id", async (req, res) => {
  let data = await Product.findOne({ _id: req.params.id });
  if (data) {
    res.send(data);
  } else {
    res.send({ result: " No product found" });
  }
});

app.put("/product/:id", async (req, res) => {
  let data = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(data);
});

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });

  res.send(data);
});

app.listen(5010);
