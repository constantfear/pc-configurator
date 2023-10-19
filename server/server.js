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
    // query = "SELECT * from Processor WHERE 1=1"
    query="SELECT Processor.id, img, Name, Core_number, Frequency, TDP, Threads_number, Socket.Socket, Price FROM Processor \
    JOIN Socket ON Socket.id = Processor.Socket WHERE 1=1"
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
    query="SELECT Motherboard.id, img, Name, Chipset.Chipset, Socket.Socket, Memory_type.Type, Form_factor.Form_factor, Price FROM Motherboard \
    JOIN Chipset ON Chipset.id = Motherboard.Chipset \
    JOIN Socket ON Socket.id = Motherboard.Socket \
    JOIN Memory_type ON Memory_type.id = Motherboard.Memory_type \
    JOIN Form_factor ON Form_factor.id = Motherboard.Form_factor WHERE 1=1"
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
    query=`SELECT
    Body.id, Body.img, Body.Name, Body.Price,
    STRING_AGG(Form_factor.Form_factor, ', ') AS Form_factors
    FROM Body_form_factors
    JOIN Body ON Body_form_factors.body_id = Body.id
    JOIN Form_factor ON Form_factor.id = Body_form_factors.form_factor_id
    GROUP BY Body.id HAVING 1=1`
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
    query=`SELECT Cooling_system.id, Cooling_system.img, Cooling_system.Name, Cooling_system.Type, Cooling_system.Max_TDP, STRING_AGG(Socket.Socket, ', '),
    Cooling_system.Price FROM Cooling_systems_sockets 
    JOIN Socket ON Socket.id = Cooling_systems_sockets.socket_id
    JOIN Cooling_system ON Cooling_system.id = Cooling_systems_sockets.cooling_system_id
    GROUP BY Cooling_system.id HAVING 1=1`
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

    query="SELECT Disk.id, img, Name, Disk_type.Type, Memory, Price FROM Disk \
    JOIN Disk_type ON Disk_type.id = Disk.Type WHERE 1=1"
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

    query="SELECT RAM.id, img, Name, Memory_type.Type, Memory, Frequency, Price FROM RAM \
    JOIN Memory_type ON Memory_type.id = RAM.Type WHERE 1=1"
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
    query = "SELECT Power_unit.id, img, Name, Power_unit_type.Type, Power, Price FROM Power_unit \
    JOIN Power_unit_type ON Power_unit_type.id = Power_unit.Type WHERE 1=1"
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
  category_filters=["Videomemory_type"]
  num_filters=["Price","Videomemory","Frequency","Power"]
  try {

    query="SELECT Videocard.id, img, Name, Videomemory, Videomemory_type.Videomemory_Type, Frequency, Power, Price FROM Videocard \
    JOIN Videomemory_type ON Videomemory_type.id = Videocard.Videomemory_type WHERE 1=1"
    
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

app.post("/config_existence", async (req, res) => {//проверка на существование имени конфигурации
  try{
  data=req.body
  query=`SELECT EXISTS (SELECT 1 FROM Configuration WHERE Name = '${data["Name"]}')`
  console.log(query)
  
  const all_data = await pool.query(query);
  res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
});

app.post("/delete_config", async (req, res) => {//удаленик конфигурации
  try{
  data=req.body
  query=`DELETE FROM Configuration WHERE id = ${data["ID"]}`
  console.log(query)
  
  await pool.query(query);
  res.json("DELETED");
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
});

app.post("/update_name", async (req, res) => {//изменение имени конфигурации
  try{
  data=req.body
  query=`UPDATE Configuration SET Name = '${data["NewName"]}' WHERE id = ${data["ID"]}`
  console.log(query)
  
  await pool.query(query);
  res.json("Updated");
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
});


app.post("/set_config", async (req, res) => {//сохранение конфигурации
  try{
  data=req.body
  query="INSERT INTO Configuration (Name, Body, Motherboard, Processor, Cooling_system, RAM, Videocard, Disk, Power_unit, Full_price) \
  VALUES ('"+data["Name"]+"', "+data["Body"]+", "+data["Motherboard"]+", "+data["Processor"]+", "+data["Cooling_system"]+
  ", "+data["RAM"]+", "+data["Videocard"]+", "+data["Disk"]+", "+data["Power_unit"]+", "+data["Full_price"]+")"
  console.log(query)
  
  const all_data = await pool.query(query);
  res.json("Config set!!!");
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
});

app.post("/get_configs", async (req, res) => {//получение всех конфигураций
  try{
    query="SELECT Configuration.id, Configuration.Name AS CONF_NAME, Body.Name AS BODY_NAME, Motherboard.Name AS MOTHER_NAME, Processor.Name AS CPU_NAME,\
    Cooling_system.Name AS COOL_NAME, RAM.Name AS RAM_NAME, Videocard.Name AS VIDEO_NAME, Disk.Name AS SDD_NAME, Power_unit.Name AS POWER_NAME, Full_price FROM Configuration\
    JOIN Body ON Body.id = Configuration.Body\
    JOIN Motherboard ON Motherboard.id = Configuration.Motherboard\
    JOIN Processor ON Processor.id = Configuration.Processor\
    JOIN Cooling_system ON Cooling_system.id = Configuration.Cooling_system\
    JOIN RAM ON RAM.id = Configuration.RAM\
    JOIN Videocard ON Videocard.id = Configuration.Videocard\
    JOIN Disk ON Disk.id = Configuration.Disk\
    JOIN Power_unit ON Power_unit.id = Configuration.Power_unit\
    ORDER BY Configuration.id ASC;"
    const all_data = await pool.query(query);
    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  
  
});

app.post("/select_component", async (req, res) => {//получить название картинку и цену если выбран товар
  data=req.body
  try {
    query = "SELECT "+data["Component"]+".id, img, Name, Price FROM "+data["Component"]+" WHERE 1=1 AND ID="+data['ID']
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
});


app.post("/count", async (req, res) => {//получить количество товаров компоненты
  data=req.body
  try {
    query=`SELECT COUNT(*) as amount FROM ${data["Component"]}`
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
});


app.post("/max_component_price", async (req,res) =>{ //получение максимума для фильтров
  data=req.body
  console.log(data)
  try {
    query = `SELECT MAX(Price) as max_price FROM ${data["Component"]}`    
    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
})



app.post("/component_filters", async (req, res) => {//получение фильтров компоненты
  data=req.body
  try {
    query=`SELECT COUNT(*) as amount FROM ${data["Component"]}`

    const all_data = await pool.query(query);

    res.json(all_data.rows);
  }
  catch (err){
    console.error(err.message);
  }
  console.log(data)
  
});

app.listen(8080, () => {
  console.log("Server start");
});


