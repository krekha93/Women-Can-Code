const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/profile", (req, res) => {
  const user = {
    name: "rekha",
    email: "rekha@gmail.com",
    skills: ["React", "Node", "java", "C++"],
  };
  res.render("Profile", { user });
});

app.get("/login", (req, res) => {
  res.render("Login");
});

app.listen(5002);
