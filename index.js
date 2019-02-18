require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5500;

//for heroku deployment
// const port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
