import express from "express";
import fs from "fs";
import http from "http";

const app = express();

const hostname = "192.168.1.5";
const port = 3010;

// Get the router IP

function yourIp() {
  http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
    resp.on("data", function (ip) {
      console.log("My public IP address is: " + ip);

      // Create ip.txt file and print the ip output
      fs.writeFile("ip.txt", ip, (err) => {
        if (err) throw err;
        console.log("The ip.txt file has been saved!");
      });

      // Read the ip.txt file and compare the new ip from the written one
      fs.readFile("ip.txt", "utf8", (err, data) => {
        if (err) throw err;

        if (data != ip) {
          fs.writeFile("ip.txt", ip, (err) => {
            if (err) throw err;
            console.log(
              "The new ip has been written in ip.txt file and has been saved!"
            );
          });
        } else {
          // Make the IP address public on the web page
          const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("Your public IP is:\n" + ip);
          });

          server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
          });
        }
      });
    });
  });
}

export default yourIp;
