const allData = [
  {
    id: 1,
    name: "Jess",
    title: "Office Manager",
    email: "jess@soup.com",
    role_id: 1,
    loc_id: 1,
    username: "jess",
    password: "test123"
  },
  {
    id: 2,
    name: "Test Employee",
    title: "Volunteer",
    email: "test@soup.com",
    role_id: 2,
    loc_id: 3,
    username: "test",
    password: "test123"
  },
  {
    id: 3,
    name: "Jack",
    title: "Chef",
    email: "jack@soup.com",
    role_id: 1,
    loc_id: 3,
    username: "jack",
    password: "test123"
  },
  {
    id: 4,
    name: "Mike",
    title: "Volunteer",
    email: "mike@soup.com",
    role_id: 2,
    loc_id: 1,
    username: "mike",
    password: "test123"
  }
];

const allReturn = [
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
  },
  {
    id: 4,
    name: "Mike",
    title: "Volunteer",
    email: "mike@soup.com",
    role_id: 2,
    loc_id: 1,
    username: "mike"
  }
];

const locData = [
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
    id: 4,
    name: "Mike",
    title: "Volunteer",
    email: "mike@soup.com",
    role_id: 2,
    loc_id: 1,
    username: "mike"
  }
];

const newUser = {
  name: "Kendall E",
  title: "cook",
  email: "kendall@soup.com",
  role_id: 3,
  loc_id: 2,
  username: "kendall",
  password: "test123"
};

createdUser = {
  name: "Kendall E",
  title: "cook",
  email: "kendall@soup.com",
  role_id: 3,
  loc_id: 2,
  username: "kendall",
  id: 5
};

getByIdUser = [
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

volunteers = [
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
    id: 4,
    name: "Mike",
    title: "Volunteer",
    email: "mike@soup.com",
    role_id: 2,
    loc_id: 1,
    username: "mike"
  }
];
module.exports = {
  locData,
  allData,
  newUser,
  getByIdUser,
  createdUser,
  volunteers,
  allReturn
};
