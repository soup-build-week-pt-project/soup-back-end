const locData = [
  {
    id: 1,
    item: "oranges",
    amount: 50,
    unit: "lbs",
    category_id: "Fruit",
    location_id: 1,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
  },
  {
    id: 4,
    item: "rice",
    amount: 100,
    unit: "lbs",
    category_id: "Dry Goods",
    location_id: 1,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 40
  }
];

const allData = [
  {
    id: 1,
    item: "oranges",
    amount: 50,
    unit: "lbs",
    category_id: "Fruit",
    location_id: 1,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
  },
  {
    id: 2,
    item: "apples",
    amount: 10,
    unit: "lbs",
    category_id: "Fruit",
    location_id: 2,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
  },
  {
    id: 3,
    item: "bananas",
    amount: 60,
    unit: "lbs",
    category_id: "Fruit",
    location_id: 3,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
  },
  {
    id: 4,
    item: "rice",
    amount: 100,
    unit: "lbs",
    category_id: "Dry Goods",
    location_id: 1,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 40
  }
];

const deleted = [
  {
    id: 1,
    item: "oranges",
    amount: 50,
    unit: "lbs",
    category_id: "Fruit",
    location_id: 1,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
  }
];

const updatedItem = {
  id: 1,
  item: "oranges",
  amount: 5,
  unit: "lbs",
  category_id: 1,
  location_id: 1,
  color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
  bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
  min_quan: 20
};

const newItem = {
  item: "strawberries",
  amount: 10,
  unit: "lbs",
  category_id: 1,
  location_id: 3,
  color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
  bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
  min_quan: 20
};
const createdItem = [
  {
    item: "strawberries",
    amount: 10,
    unit: "lbs",
    category_id: 1,
    location_id: 3,
    id: 5,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
  }
];

const getByIdItem = [
  {
    id: 3,
    item: "bananas",
    amount: 60,
    unit: "lbs",
    category_id: "Fruit",
    location_id: 3,
    color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
    bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
    min_quan: 20
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
