const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");
const {
  locData,
  allData,
  deleted,
  updatedItem,
  newItem,
  getByIdItem,
  createdItem
} = require("../dummyData/invRouteData.js");

describe("the inventory routes", () => {
  beforeEach(() => {
    return db.migrate.rollback().then(() => {
      return db.migrate.latest().then(() => {
        return db.seed.run();
      });
    });
  });
  describe("get /inventory/:id", () => {
    it("returns a 200 when successful", async () => {
      const response = await request(server).get("/inventory/all");
      expect(response.status).toBe(200);
    });
    it("returns a 404 with invalid id", async () => {
      const response = await request(server).get("/inventory/9");
      expect(response.status).toBe(404);
    });
    it("returns inventory for single location", async () => {
      const response = await request(server).get("/inventory/1");
      expect(JSON.parse(response.text)).toEqual(locData);
    });
    it("returns all inventory when loc is all", async () => {
      const response = await request(server).get("/inventory/all");
      expect(JSON.parse(response.text)).toEqual(allData);
    });
  });
  describe("get /inventory/:id/:item", () => {
    it("returns a single item", async () => {
      const response = await request(server).get("/inventory/3/3");
      expect(JSON.parse(response.text)).toEqual(getByIdItem);
    });
    it("returns a status 200 on success", async () => {
      const response = await request(server).get("/inventory/3/3");
      expect(response.status).toBe(200);
    });
    it("returns a 404 when item id is not found", async () => {
      const response = await request(server).get("/inventory/3/20");
      expect(response.status).toBe(404);
    });
    it("returns a 404 when loc id is not found", async () => {
      const response = await request(server).get("/inventory/20/1");
      expect(response.status).toBe(404);
    });
  });
  describe("post /inventory/:id", () => {
    it("returns a 201 on success", async () => {
      const response = await request(server)
        .post("/inventory/3")
        .send(newItem);
      expect(response.status).toBe(201);
    });
    it("returns a 401 if loc id does not match", async () => {
      const response = await request(server)
        .post("/inventory/5")
        .send(newItem);
      expect(response.status).toBe(401);
    });
    it("returns created item in an array", async () => {
      const response = await request(server)
        .post("/inventory/3")
        .send(newItem);
      expect(JSON.parse(response.text)).toEqual(createdItem);
    });
  });
  describe("put /inventory/:item", () => {
    it("returns a 202 on success", async () => {
      const response = await request(server)
        .put("/inventory/1")
        .send(updatedItem);
      expect(response.status).toBe(202);
    });
    it("returns a 400 if not successful", async () => {
      const response = await request(server).put("/inventory/1");
      expect(response.status).toBe(400);
    });
    it("returns the updated item as a single object", async () => {
      const response = await request(server)
        .put("/inventory/1")
        .send(updatedItem);
      expect(JSON.parse(response.text)).toEqual(updatedItem);
    });
  });
  describe("delete /inventory/:item", () => {
    it("returns a 200 if successful", async () => {
      const response = await request(server).delete("/inventory/1");
      expect(response.status).toBe(200);
    });
    it("returns a 404 if item id is not found", async () => {
      const response = await request(server).delete("/inventory/30");
      expect(response.status).toBe(404);
    });
    it("returns the number of records deleted", async () => {
      const response = await request(server).delete("/inventory/1");
      expect(JSON.parse(response.text)).toBe(1);
    });
    it("removes the item from the db", async () => {
      await request(server).delete("/inventory/4");
      const response = await request(server).get("/inventory/1");
      expect(JSON.parse(response.text)).toEqual(deleted);
    });
  });
});
