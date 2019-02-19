exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          item: "oranges",
          amount: 50,
          unit: "lbs",
          category_id: 1,
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
          category_id: 1,
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
          category_id: 1,
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
          category_id: 2,
          location_id: 1,
          color_img: "https://image.flaticon.com/icons/svg/135/135620.svg",
          bw_img: "https://image.flaticon.com/icons/svg/135/135389.svg",
          min_quan: 40
        }
      ]);
    });
};
