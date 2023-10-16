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
const { Query } = require("pg");
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


app.post("/cpu", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Core_number", "Threads_number", "Socket"]
  num_filters=["Frequency", "TDP", "Price"]
  try {
    query = "SELECT * from Processor WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/motherboard", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Chipset","Socket","Memory_type","Form_factor"]
  num_filters=["Price"]
  try {
    query = "SELECT * from Motherboard WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/body", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=[]
  num_filters=["Price"]
  try {
    query = "SELECT * from Body WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/cooling_system", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Type"]
  num_filters=["Price","Max_TDP"]
  try {
    query = "SELECT * from Cooling_system WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/hard_drive", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Type"]
  num_filters=["Price","Memory"]
  try {
    query = "SELECT * from Disk WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/ram", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Type"]
  num_filters=["Price","Memory","Frequency"]
  try {
    query = "SELECT * from RAM WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/power_unit", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Type"]
  num_filters=["Price","Power"]
  try {
    query = "SELECT * from Power_unit WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})

app.post("/videocard", async (req,res) =>{
  data=req.body
  console.log(data)
  category_filters=["Videomemory_type"]
  num_filters=["Price","Videomemory","Frequency","Power"]
  try {
    query = "SELECT * from Videocard WHERE 1=1"
    for (var f in data){
      if(data[f]){
        if(num_filters.includes(f)){
          query=query+' AND '+f+'>'+data[f][0]+' AND '+f+'<'+data[f][1]
        }
        if(category_filters.includes(f)){
          query=query+' AND ('+f+'='+data[f][0]
          if(data[f].length>1){
            for(i=1;i<data[f].length;i++){
                query=query+' OR '+f+'='+data[f][i]
            }
          }
          query=query+')'
         
        }
      }
      console.log(query)
    } 
    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})


app.listen(8080, () => {
  console.log("Server start");
});


