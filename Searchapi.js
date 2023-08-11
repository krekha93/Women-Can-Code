const express = require("express");
require("./Config");
const model = require("./Schema");

const app = express();

app.get("/search/:key", async (req, res) => {
  let data = await model.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
    ],
  });

  res.send(data);
});

app.listen(5007);
