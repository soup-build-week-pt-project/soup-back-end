require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5500;

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

// client.query(
//   "SELECT table_schema,table_name FROM information_schema.tables;",
//   (err, res) => {
//     if (err) throw err;
//     for (let row of res.rows) {
//       console.log(JSON.stringify(row));
//     }
//     client.end();
//   }
// );

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
