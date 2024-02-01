const express = require("express");
const http = require("http");
// const app = express();
require("dotenv").config();
const fs = require("fs");
// Import and create a variable for yourIp module
const yourIP = require("./scripts/yourIp.js");

const port = process.env.PORT;
const host = process.env.IP;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile('./www/index.html', function(error, data){
    if (!error) {
      res.end(data);
    } else{
      console.log(error)
    }
  })
});

server.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    const ip = yourIP.myIp();

    // Read the ip.txt file and compare the new ip from the written one
    fs.readFile("ip.txt", "utf8", (err, data) => {
      if (err) throw err;

      // Compare the new ip from the written one
      if (data != ip) {
        fs.writeFile("ip.txt", ip, (err) => {
          if (err) throw err;
          console.log(
            "The new ip has been written in ip.txt file and has been saved!"
            );
        });       
      }
    });
  }
});
