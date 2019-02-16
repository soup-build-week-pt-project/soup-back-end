const db = require("../data/dbConfig.js");
const users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { requireAdmin, generateToken } = require("../auth/authenticate");

module.exports = server => {
  server.post("/users/register", register);
  server.post("/users/login", login);
  server.get("/users/:loc", requireAdmin, getUsersByLoc);
};

//requires an object with all required user keys. stores password in a hash, returns an object containing username, name, loc, role, and a token.
function register(req, res) {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password, 16);
  creds.password = hash;
  users
    .newUser(creds)
    .then(users => {
      const user = users[0];
      const token = generateToken(user);
      console.log(user);
      res.status(201).json({
        username: user.username,
        name: user.name,
        location: user.loc_id,
        role: user.role_id,
        token: token
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
}

//requires a username and password. returns user data and a token.
function login(req, res) {
  const credentials = req.body;
  db("users")
    .where({ username: credentials.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        const token = generateToken(user);
      console.log(user);
      res.status(200).json({
        username: user.username,
        name: user.name,
        location: user.loc_id,
        role: user.role_id,
        token: token
      });
      } else {
        res.status(401).json({ message: "access denied" });
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

//requires a location id. "all" can be used in place of an id to get all users. returns an array of user objects. REQUIRES A TOKEN.
function getUsersByLoc(req, res) {
  const { loc } = req.params;
  users
    .getUsersByLocation(loc)
    .then(users => {
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "Invalid location" });
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
}
