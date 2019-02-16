const db = require("../../data/dbConfig.js");

module.exports = {
  getUsersByLocation,
  remove,
  getUserById,
  newUser,
  getUserByRole
};

async function getUsersByLocation(id) {
  if (id == "all") {
    return db("users").select(
      "name",
      "username",
      "email",
      "loc_id",
      "role_id",
      "title",
      "id"
    );
  } else {
    return db("users")
      .select("name", "username", "email", "loc_id", "role_id", "title", "id")
      .where("loc_id", id);
  }
}

async function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}

async function getUserById(id) {
  return db("users")
    .select("name", "username", "email", "loc_id", "role_id", "title", "id")
    .where("id", id);
}

async function newUser(user) {
  const ids = await db("users").insert(user);
  return db("users")
    .select("name", "username", "email", "loc_id", "role_id", "title", "id")
    .where("id", ids[0]);
}

async function getUserByRole(id) {
  return db("users")
    .select("name", "username", "email", "loc_id", "role_id", "title", "id")
    .where("role_id", id);
}
