const express = require("express");
const reqfilter = require("./RouteMiddleware");
const app = express();
const route = express.Router();

route.use(reqfilter);

// app.use(reqfilter);

app.get("", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/user", (req, res) => {
  res.send("Welcome to User page");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to Contact page");
});

app.use(route);

app.listen(5003);
