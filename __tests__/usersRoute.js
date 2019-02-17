const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server.js");
const {
  allData,
  newUser,
  badUser,
  loginInfo,
  badLogin,
  missingLogin,
  locData,
  returnAll
} = require("../dummyData/userRouteData.js");

describe("the users route handlers", () => {
  beforeEach(() => {
    return db.migrate.rollback().then(() => {
      return db.migrate.latest().then(() => {
        return db.insert(allData).into("users");
      });
    });
  });
  describe("post /users/register", () => {
    it("returns a 201 on success", async () => {
      const response = await request(server)
        .post("/users/register")
        .send(newUser);
      expect(response.status).toBe(201);
    });
    it("returns a 400 on fail", async () => {
      const response = await request(server)
        .post("/users/register")
        .send(badUser);
      expect(response.status).toBe(400);
    });
    it("returns the an object with new user info", async () => {
      jest.setTimeout(30000);
      const response = await request(server)
        .post("/users/register")
        .send(newUser);
      expect(response.body.name).toBe("Kendall");
      expect(response.body.role).toBe(1);
      expect(response.body.username).toBe("kendall");
      expect(response.body.location).toBe(1);
    });
  });
  describe("post /users/login", () => {
    it("returns a 200 on success", async () => {
      const response = await request(server)
        .post("/users/login")
        .send(loginInfo);
      expect(response.status).toBe(200);
    });
    it("returns a 400 on fail", async () => {
      const response = await request(server)
        .post("/users/login")
        .send(missingLogin);
      expect(response.status).toBe(400);
    });
    it("returns a 401 if username/password are invalid", async () => {
      const response = await request(server)
        .post("/users/login")
        .send(badLogin);
      expect(response.status).toBe(401);
    });
    it("returns user data if login success", async () => {
      const response = await request(server)
        .post("/users/login")
        .send(loginInfo);
      expect(response.body.name).toBe("Jess");
      expect(response.body.role).toBe(1);
      expect(response.body.username).toBe("jess");
      expect(response.body.location).toBe(1);
    });
  });
  describe("get /users/:loc", () => {
    it("returns a 200 on success", async () => {
      response = await request(server).get("/users/3");
      expect(response.status).toBe(200);
    });
    it("returns users by location", async () => {
      response = await request(server).get("/users/3");
      expect(response.body).toEqual(locData);
    });
    it("returns all users when sent to /users/all", async () => {
      response = await request(server).get("/users/all");
      expect(response.body).toEqual(returnAll);
    });
  });
});
