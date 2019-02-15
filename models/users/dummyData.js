const allData = [
  {
    id: 1,
    name: "Jess",
    title: "Office Manager",
    role_id: 1,
    loc_id: 1,
    username: "jess",
    password: "test123"
  },
  {
    id: 2,
    name: "Test Employee",
    title: "Volunteer",
    role_id: 2,
    loc_id: 3,
    username: "test",
    password: "test123"
  },
  {
    id: 3,
    name: "Jack",
    title: "Chef",
    role_id: 1,
    loc_id: 3,
    username: "jack",
    password: "test123"
  },
  {
    id: 4,
    name: "Mike",
    title: "Volunteer",
    role_id: 2,
    loc_id: 1,
    username: "mike",
    password: "test123"
  }
];

const locData = [
  {
    id: 1,
    name: "Jess",
    title: "Office Manager",
    role_id: 1,
    loc_id: 1,
    username: "jess",
    password: "test123"
  },
  {
    id: 4,
    name: "Mike",
    title: "Volunteer",
    role_id: 2,
    loc_id: 1,
    username: "mike",
    password: "test123"
  }
];

const updatedUser = {
  id: 1,
  name: "Jess Harrison",
  title: "Office Manager",
  role_id: 1,
  loc_id: 1,
  username: "jess",
  password: "test123"
};

const newUser = {
  name: "Kendall E",
  title: "cook",
  role_id: 3,
  loc_id: 2,
  username: "kendall",
  password: "test123"
};

createdUser = {
  name: "Kendall E",
  title: "cook",
  role_id: 3,
  loc_id: 2,
  username: "kendall",
  password: "test123",
  id: 5
};

getByIdUser = [
  {
    id: 3,
    name: "Jack",
    title: "Chef",
    role_id: 1,
    loc_id: 3,
    username: "jack",
    password: "test123"
  }
];

volunteers = [
  {
    id: 2,
    name: "Test Employee",
    title: "Volunteer",
    role_id: 2,
    loc_id: 3,
    username: "test",
    password: "test123"
  },
  {
    id: 4,
    name: "Mike",
    title: "Volunteer",
    role_id: 2,
    loc_id: 1,
    username: "mike",
    password: "test123"
  }
];
module.exports = {
  locData,
  allData,
  updatedUser,
  newUser,
  getByIdUser,
  createdUser,
  volunteers
};
