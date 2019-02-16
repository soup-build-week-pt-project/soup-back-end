const locations = require("./locationModel.js");
const db = require("../../data/dbConfig.js");
const { locationData } = require("./dummyData");

describe("the location model", () => {
  beforeEach(() => {
    return db.migrate.rollback().then(() => {
      return db.migrate.latest().then(() => {
        return db.seed.run();
      });
    });
  });
  describe("the getLocations function", () => {
    it("returns all locations in db", async () => {
      const locs = await locations.getLocations();
      expect(locs).toEqual(locationData);
    });
  });
});
