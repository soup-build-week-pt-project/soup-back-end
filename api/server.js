const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(helmet());
server.use(cors());
server.use(express.json());

const inventoryRoutes = require("../config/inventoryRoute.js");

inventoryRoutes(server);

module.exports = server;
