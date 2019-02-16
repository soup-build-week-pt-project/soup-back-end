const users = require("./userModel.js");
const db = require("../../data/dbConfig.js");
const {
  locData,
  allData,
  updatedUser,
  newUser,
  getByIdUser,
  createdUser,
  volunteers
} = require("./dummyData");

describe("the user model", () => {
  beforeEach(() => {
    return db.migrate.rollback().then(() => {
      return db.migrate.latest().then(() => {
        return db.insert(allData).into("users");
      });
    });
  });
  describe("the getUsersByLocation method", () => {
    it("returns the correct object", async () => {
      const user = await users.getUsersByLocation(1);
      expect(user).toEqual(locData);
    });
    it("returns an empty array if there are no entries", async () => {
      await users.remove(1);
      await users.remove(2);
      await users.remove(3);
      await users.remove(4);
      const user = await users.getUsersByLocation("all");
      expect(user).toEqual([]);
    });
    it('returns all users when endpoint is "all"', async () => {
      const user = await users.getUsersByLocation("all");
      expect(user).toEqual(allData);
    });
  });
  describe("the remove function", () => {
    it("returns the number of records deleted", async () => {
      const user = await users.remove(2);
      expect(user).toBe(1);
    });
  });
  describe("the updateUser function", () => {
    it("updates an object in the db", async () => {
      const user = await users.updateUser(1, updatedUser);
      expect(user[0]).toEqual(updatedUser);
    });
  });
  describe("getUserById function", () => {
    it("returns the correct object", async () => {
      const user = await users.getUserById(3);
      expect(user).toEqual(getByIdUser);
    });
  });
  describe("the newUser function", () => {
    it("returns the new user created", async () => {
      const user = await users.newUser(newUser);
      expect(user[0]).toEqual(createdUser);
    });
  });
  describe("getUserByRole function", () => {
    it("returns the correct object", async () => {
      const user = await users.getUserByRole(2);
      expect(user).toEqual(volunteers);
    });
  });
});
