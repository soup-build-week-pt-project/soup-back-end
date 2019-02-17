const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server.js");
const locData = require("../dummyData/locRouteData");

describe("get /locations", () => {
  beforeEach(() => {
    return db.migrate.rollback().then(() => {
      return db.migrate.latest().then(() => {
        return db.seed.run();
      });
    });
  });
  it("returns all locations in an array", async () => {
    const response = await request(server).get("/locations");
    expect(response.body).toEqual(locData);
  });
  it("returns a 200 on success", async () => {
    const response = await request(server).get("/locations");
    expect(response.status).toBe(200);
  });
});
