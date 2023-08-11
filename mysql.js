// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log("not connect");
//   } else {
//     console.log("connected");
//   }
// });

// connection.query("select * from users", (err, result) => {
//   if (err) {
//     console.log("error");
//   } else {
//     console.log(result);
//   }
// });

const express = require("express");
const connection = require("./mysqlconfig");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  connection.query("select *from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO users SET?", data, (error, result, fields) => {
    if (error) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.put("/:id", (req, res) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.params.id,
  ];
  connection.query(
    "UPDATE users SET name =?, password =?, user_type=? where id = ?",
    data,
    (error, result, field) => {
      if (error) {
        res.send("error");
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM users WHERE id =" + req.params.id,
    (error, result) => {
      if (error) {
        res.send("error");
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(5009);
