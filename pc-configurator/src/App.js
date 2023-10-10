import React from "react";
//import logo from "./Untitled.jpeg";

function App() {
  
  const getEmployes = async () => {
    try{
      const response = await fetch("http://localhost:8080/check_db")
      const jsonData = await response.json()
      console.log(jsonData)
    }
    catch (err){
      console.error(err.message);
    }
  }
  const putJson = async()=>{
    fetch(
      'http://localhost:8080/get_json',
      {
        method: 'POST',
        body: JSON.stringify({ myData: 123 })
      }
    )
  }
  return (
    <div>
      {/* {<img src={logo} alt="Logo" />} */}
      {<button onClick={getEmployes}>Get Data</button>}
      {<button onClick={putJson}>Send Json</button>}
    </div>
  );
}

export default App;
