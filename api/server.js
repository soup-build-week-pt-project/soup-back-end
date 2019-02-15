const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(helmet());
server.use(cors());
server.use(express.json());

const inventoryRoutes = require("../config/inventoryRoute.js");
const userRoutes = require("../config/usersRoute.js");

inventoryRoutes(server);
userRoutes(server);

module.exports = server;
