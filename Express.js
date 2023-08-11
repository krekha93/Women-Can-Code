const express = require("express");
const app = express();
app.get("", (req, res) => {
  console.log(req.query.name);
  const Name = req.query.name;
  // res.send("My name is" + Name);
  // res.send({ Name });
  res.send(`<h1> Welcome to Home page </h1>
  <a href="/about" > Go to About Page </a>`);
});

app.get("/about", (req, res) => {
  // res.send("Welcome to About page");
  res.send(`
  <input type="text" placeholder= "username" value="${req.query.name}" /> 
  <button> Click Me </button><br>
  <a href="/" > Go to Home Page </a>
  `); //query param
});

app.get("/service", (req, res) => {
  // res.send("Welcome to Service page");
  res.send([
    {
      name: "Rekha",
      email: "test@gmail.com",
    },
    {
      name: "Kumari",
      email: "test@gmail.com",
    },
  ]);
});

app.listen(5000);
