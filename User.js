const express = require("express");
const app = express();
const users = "UserData.json";
const fs = require("fs");

app.get("/userdata", (req, res) => {
  fs.readFile(users, (err, data) => {
    if (err) throw err;
    const user_data = JSON.parse(data);
    console.log(user_data);
    res.send(user_data);
  });
});

app.listen(9007);
