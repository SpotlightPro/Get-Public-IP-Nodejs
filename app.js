import express from "express";
import fs from "fs";
import http from "http";
import yourIp from "./scripts/yourIp.js"; // Custom module. Returns the public IP address of this machine.

const app = express();

const hostname = "192.168.1.5"; // Change  to your local network's IP if necessary.
const port = 3010; // Change  to a different port number if desired, but be aware that other devices on the same network may already use this port

yourIp(); //  Calling custom function to get the public IP and store it in a global variable.


