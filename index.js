const colors = require("colors");

console.log("hello world".bgRed);

const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));

const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);
