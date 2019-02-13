const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

server.use(helmet());
server.use(cors());
server.use(express.json());

const configureRoutes = require("../config/routes.js");

configureRoutes(server);

module.exports = server;
