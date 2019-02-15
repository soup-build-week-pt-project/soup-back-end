const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(helmet());
server.use(cors());
server.use(express.json());

const inventoryRoutes = require("../config/Inventory/inventoryRoute.js");
const userRoutes = require("../config/Users/usersRoute.js");
const locationRoutes = require("../config/Locations/locationsRoute.js");

inventoryRoutes(server);
userRoutes(server);
locationRoutes(server);

module.exports = server;
