const Pool = require("pg").Pool;
const pool = new Pool({
  user: "root",
  host: "root",
  database: "root",
  password: "root",
  port: 5432,
});
