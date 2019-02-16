const locData = [
  {
    id: 1,
    item: "oranges",
    amount: 3,
    unit: "lbs",
    category_id: 1,
    location_id: 1
  },
  {
    id: 4,
    item: "rice",
    amount: 3,
    unit: "lbs",
    category_id: 2,
    location_id: 1
  }
];

const allData = [
  {
    id: 1,
    item: "oranges",
    amount: 3,
    unit: "lbs",
    category_id: 1,
    location_id: 1
  },
  {
    id: 2,
    item: "apples",
    amount: 3,
    unit: "lbs",
    category_id: 1,
    location_id: 2
  },
  {
    id: 3,
    item: "bananas",
    amount: 3,
    unit: "lbs",
    category_id: 1,
    location_id: 3
  },
  {
    id: 4,
    item: "rice",
    amount: 3,
    unit: "lbs",
    category_id: 2,
    location_id: 1
  }
];

const deleted = [
  {
    id: 1,
    item: "oranges",
    amount: 3,
    unit: "lbs",
    category_id: 1,
    location_id: 1
  }
];

const updatedItem = {
  id: 1,
  item: "oranges",
  amount: 5,
  unit: "lbs",
  category_id: 1,
  location_id: 1
};

const newItem = {
  item: "strawberries",
  amount: 10,
  unit: "lbs",
  category_id: 1,
  location_id: 3
};
const createdItem = [
  {
    item: "strawberries",
    amount: 10,
    unit: "lbs",
    category_id: 1,
    location_id: 3,
    id: 5
  }
];

const getByIdItem = [
  {
    id: 3,
    item: "bananas",
    amount: 3,
    unit: "lbs",
    category_id: 1,
    location_id: 3
  }
];

const badItem = {
  item: "oranges",
  amount: 2
};

module.exports = {
  locData,
  allData,
  deleted,
  updatedItem,
  newItem,
  getByIdItem,
  createdItem,
  badItem
};
