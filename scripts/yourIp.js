const fs = require("fs");
const http = require("http");
// Require dotenv module to get the environment variables
require('dotenv').config();


// Get the router IP
const hostname = process.env.IP;
const port = process.env.PORT;

// Get the router IP

const yourIp = function() {
  // Create a GET request to the API
  http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
    // Get the response data
    resp.on("data", function (ip) {
      console.log("My public IP address is: " + ip + `:${port}`);

      // Create ip.txt file and print the ip output
      fs.writeFile("ip.txt", ip, (err) => {
        if (err) throw err;
      });
    });
  });
}

// This line of code exports the 'myIp' module, which is assigned the value of the 'yourIp' variable
module.exports.myIp = yourIp;