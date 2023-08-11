const express = require("express");
const path = require("path");

const app = express();
const publicpath = path.join(__dirname, "Public");

// app.use(express.static(publicpath));

//remove extension from URL
app.get("", (req, res) => {
  res.sendFile(`${publicpath}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicpath}/About.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicpath}/nopage.html`);
});
app.listen(5001);
