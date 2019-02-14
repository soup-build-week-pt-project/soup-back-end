const allData = [
  { id: 1, name: "Jess", title: "Office Manager", role_id: 1, loc_id: 1 },
  { id: 2, name: "Test Employee", title: "Volunteer", role_id: 2, loc_id: 3 },
  { id: 3, name: "Jack", title: "Chef", role_id: 1, loc_id: 3 },
  { id: 4, name: "Mike", title: "Volunteer", role_id: 2, loc_id: 1 }
];

const locData = [
  { id: 1, name: "Jess", title: "Office Manager", role_id: 1, loc_id: 1 },
  { id: 4, name: "Mike", title: "Volunteer", role_id: 2, loc_id: 1 }
];

const updatedUser = {
  id: 1,
  name: "Jess Harrison",
  title: "Office Manager",
  role_id: 1,
  loc_id: 1
};

const newUser = {
  name: "Kendall E",
  title: "cook",
  role_id: 3,
  loc_id: 2
};

createdUser = {
  name: "Kendall E",
  title: "cook",
  role_id: 3,
  loc_id: 2,
  id: 5
};

getByIdUser = [{ id: 3, name: "Jack", title: "Chef", role_id: 1, loc_id: 3 }];

volunteers = [
  { id: 2, name: "Test Employee", title: "Volunteer", role_id: 2, loc_id: 3 },
  { id: 4, name: "Mike", title: "Volunteer", role_id: 2, loc_id: 1 }
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
