const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

server.use(helmet());
server.use(cors());
// server.options("*", cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(bodyParser.text());

const inventoryRoutes = require("../config/inventoryRoute.js");
const userRoutes = require("../config/usersRoute.js");
const locationRoutes = require("../config/locationsRoute.js");

inventoryRoutes(server);
userRoutes(server);
locationRoutes(server);

server.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is online!" });
});

module.exports = server;
