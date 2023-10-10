const express = require("express");
const cors = require("cors");
const port = 8080;
/* Creates an Express application.
The express() function is a top-level
function exported by the express module.
*/

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "root",
  host: "postgres",
  database: "root",
  password: "root",
  port: 5432,
});

/* To handle the HTTP Methods Body Parser
is used, Generally used to extract the
entire body portion of an incoming
request stream and exposes it on req.body
*/

const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // res.setHeader(
  //   "Content-Security-Policy: default-src 'self'; img-src https://images.example.com 'self';"
  // );
  next();
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Connected to Database !");
  });
});

// app.get("", async (req, res) => {
//   try {
//     console.log(await pool.query("SELECT * from employees"));
//   } catch (err) {
//     console.error(err.message);
//   }
// });
app.get("/", (req, res) => {
  console.log("GET");

  getAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/get_json",(req,res) =>{
  console.log(req.body)
})



app.get("/check_db", async (req, res) => {
  console.log("GET");
  try {
    const all_data = await pool.query("SELECT * from body");
    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
});


const getAll = () => {
  return new Promise(async function (resolve, reject) {
    await pool.query("SELECT * from employees", (error, results) => {
      console.log("GETALL");
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

// app.get("/testdata", (req, res, next) => {
//   console.log("TEST DATA :");
//   pool.query("Select * from test").then((testData) => {
//     console.log(testData);
//     res.send(testData.rows);
//   });
// });

// app.get("/", (req, res) => {
//   pool
//     .getEmloyees()
//     .then((response) => {
//       res.status(200).send(response);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

// const getEmloyees = () => {
//   return new Promise(function (resolve, reject) {
//     pool.query("SELECT * FROM employees", (error, results) => {
//       if (error) {
//         reject(error);
//       }
//       resolve(results);
//     });
//   });
// };

// Require the Routes API
// Create a Server and run it on the port 3000
// const server = app.listen(port, function () {
//   let host = server.address().address;
//   let port = server.address().port;
//   // Starting the Server at the port 3000
// });
app.listen(8080, () => {
  console.log("Server start");
});

module.exports = {
  getAll,
};
