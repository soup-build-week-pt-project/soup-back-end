const bcrypt = require("bcryptjs");

const allData = [
  {
    id: 1,
    name: "Jess",
    title: "Office Manager",
    email: "jess@soup.com",
    role_id: 1,
    loc_id: 1,
    username: "jess",
    password: bcrypt.hashSync("test123", 16)
  },
  {
    id: 2,
    name: "Test Employee",
    title: "Volunteer",
    email: "test@soup.com",
    role_id: 2,
    loc_id: 3,
    username: "test",
    password: bcrypt.hashSync("test123", 16)
  },
  {
    id: 3,
    name: "Jack",
    title: "Chef",
    email: "jack@soup.com",
    role_id: 1,
    loc_id: 3,
    username: "jack",
    password: bcrypt.hashSync("test123", 16)
  }
];

const newUser = {
  id: 4,
  name: "Kendall",
  title: "Chef",
  email: "kendall@soup.com",
  role_id: 1,
  loc_id: 1,
  username: "kendall",
  password: bcrypt.hashSync("test123", 16)
};

const badUser = {
  name: "Jim",
  title: "Chef",
  email: "jess@soup.com",
  role_id: 1,
  loc_id: 1
};

const loginInfo = { username: "jess", password: "test123" };

const missingLogin = { username: "jess" };

const badLogin = { username: "jess", password: "password" };

const locData = [
  {
    id: 2,
    name: "Test Employee",
    title: "Volunteer",
    email: "test@soup.com",
    role_id: 2,
    loc_id: 3,
    username: "test"
  },
  {
    id: 3,
    name: "Jack",
    title: "Chef",
    email: "jack@soup.com",
    role_id: 1,
    loc_id: 3,
    username: "jack"
  }
];

const returnAll = [
  {
    id: 1,
    name: "Jess",
    title: "Office Manager",
    email: "jess@soup.com",
    role_id: 1,
    loc_id: 1,
    username: "jess"
  },
  {
    id: 2,
    name: "Test Employee",
    title: "Volunteer",
    email: "test@soup.com",
    role_id: 2,
    loc_id: 3,
    username: "test"
  },
  {
    id: 3,
    name: "Jack",
    title: "Chef",
    email: "jack@soup.com",
    role_id: 1,
    loc_id: 3,
    username: "jack"
  }
];

module.exports = {
  allData,
  newUser,
  badUser,
  loginInfo,
  badLogin,
  missingLogin,
  locData,
  returnAll
};
