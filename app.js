const path = require("path");
const express = require("express");
const http = require("http");
const app = express();
require("dotenv").config();
const fs = require("fs");
// Import and create a variable for yourIp module
const yourIP = require("./scripts/yourIp.js");

// app.use(express.static(path.join(__dirname, './www/index.html')));

const port = process.env.PORT;
const host = process.env.IP;

// app.listen(port, () => (console.log(  `Server running on http://${host}:${port}`)));

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("www/index.html", function (error, data) {
    if (!error) {
      console.log(`Server's IP and Port is' ${host}:${port}`);
      res.end(data);
    } else {
      console.log(error);
    }
  });
});

server.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    const ip = yourIP.myIp();

    // Read the ip.txt file and compare the new ip from the written one
    fs.readFile("ip.txt", "utf8", (err, data) => {
      if (err) throw err;

      if (data != ip) {
        if (data === undefined) {
          data = ip; // Set the data to the new ip if it's undefined
        }
        fs.writeFile("ip.txt", data, (err) => {
          if (err) throw err;
          console.log(
            "The new ip has been written in ip.txt file and has been saved!"
          );
        });
      } else {
        console.log("No new ip found. File not updated.");
      }
    });
  }
});
