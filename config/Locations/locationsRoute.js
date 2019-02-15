const locations = require("../../models/locations/locationModel");
const { authenticate } = require("../../auth/authenticate");

module.exports = server => {
  server.get("/locations", authenticate, getLocations);
};

function getLocations(req, res) {
  locations
    .getLocations()
    .then(locs => {
      res.status(200).json(locs);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}