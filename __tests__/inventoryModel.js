const inventory = require("../models/inventoryModel.js");
const db = require("../../data/dbConfig.js");
const {
  locData,
  allData,
  deleted,
  updatedItem,
  newItem,
  getByIdItem,
  createdItem
} = require("../dummyData/invModelData.js");

describe("the inventory model", () => {
  beforeEach(() => {
    return db.migrate.rollback().then(() => {
      return db.migrate.latest().then(() => {
        return db.seed.run();
      });
    });
  });
  describe("the getInventoryByLocation method", () => {
    it("returns the correct object", async () => {
      const items = await inventory.getInventoryByLocation(1);
      expect(items).toEqual(locData);
    });
    it("returns an empty array if there are no entries", async () => {
      await inventory.remove(1);
      await inventory.remove(2);
      await inventory.remove(3);
      await inventory.remove(4);
      const items = await inventory.getInventoryByLocation("all");
      expect(items).toEqual([]);
    });
    it('returns all inventory when endpoint is "all"', async () => {
      const items = await inventory.getInventoryByLocation("all");
      expect(items).toEqual(allData);
    });
  });
  describe("the remove function", () => {
    it("returns the number of records deleted", async () => {
      const item = await inventory.remove(2);
      expect(item).toBe(1);
    });
    it("deletes the record from the db", async () => {
      await inventory.remove(4);
      const items = await inventory.getInventoryByLocation(1);
      expect(items).toEqual(deleted);
    });
  });
  describe("the updateInventory function", () => {
    it("updates an object in the db", async () => {
      const item = await inventory.updateInventory(1, updatedItem);
      expect(item[0]).toEqual(updatedItem);
    });
  });
  describe("getItemById function", () => {
    it("returns the correct object", async () => {
      const item = await inventory.getItemById(3);
      expect(item).toEqual(getByIdItem);
    });
  });
  describe("the newItem function", () => {
    it("returns the new item created", async () => {
      const item = await inventory.newItem(newItem);
      expect(item[0]).toEqual(createdItem);
    });
  });
});
