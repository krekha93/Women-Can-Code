const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "Crud");

const filepath = `${dirpath}/sample1.txt`;

// fs.writeFileSync(filepath, "this is my sample file");

// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filepath, " and first file", (err) => {
//   if (!err) console.log("file is updated");
// });

// fs.rename(filepath, `${dirpath}/newsample.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

// fs.unlinkSync(`${dirpath}/newsample.txt`);
