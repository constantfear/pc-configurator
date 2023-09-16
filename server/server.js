const express = require("express");
const app = express();
const port = 8080;

const pc_model = require("./pc_model");
// Connect to our postgres database

// // Serves a folder called `public` that we will create
// //app.use(express.static("../pc-configurator/public"));
// //const pc_model = require("./conf_db");

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/", (req, res) => {
  pc_model
    .getEmloyees()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

const getEmloyees = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM employees", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};
// // When a GET request is made to /employees
// // Our app will return an array with a list of all
// // employees including name and title
// // this data is defined in our `database-seed.sql` file
// // app.get("/employees", async (req, res) => {
// //   const results = await client
// //     .query("SELECT * FROM employees")
// //     .then((payload) => {
// //       return payload.rows;
// //     })
// //     .catch(() => {
// //       throw new Error("Query failed");
// //     });
// //   res.setHeader("Content-Type", "application/json");
// //   res.status(200);
// //   res.send(JSON.stringify(results));
// // });

// // Our app must connect to the database before it starts, so
// // we wrap this in an IIFE (Google it) so that we can wait
// // asynchronously for the database connection to establish before listening

// // (async () => {
// //   await client.connect();

// //   app.listen(port, () => {
// //     console.log(`Example app listening at http://root:${port}`);
// //   });
// // })();
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
//   reject("oops");
// });

// myPromise.then(() => {
//   console.log("hello");
// });

module.exports = {
  getEmloyees,
};
