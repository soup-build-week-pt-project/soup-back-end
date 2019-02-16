const db = require("../../data/dbConfig.js");

module.exports = {
  getUsersByLocation,
  remove,
  updateUser,
  getUserById,
  newUser,
  getUserByRole
};

async function getUsersByLocation(id) {
  if (id == "all") {
    return db("users");
  } else {
    return db("users").where("loc_id", id);
  }
}

async function updateUser(id, changes) {
  await db("users")
    .where("id", id)
    .update(changes);
  return db("users").where("id", id);
}

async function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}

async function getUserById(id) {
  return db("users").where("id", id);
}

async function newUser(user) {
  const ids = await db("users").insert(user);
  return db("users").where("id", ids[0]);
}

async function getUserByRole(id) {
  return db("users").where("role_id", id);
}
