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


    

  return (
    <div>
      {/* {<img src={logo} alt="Logo" />} */}
      {<button onClick={getEmployes}>Get All</button>}
    </div>
  );
}

export default App;
