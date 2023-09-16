import React, { useState, useEffect } from "react";
// import logo from "./Untitled.jpeg";

function App() {
  const [employ, setEmployees] = useState(false);
  useEffect(() => {
    getEmloyees();
  }, []);
  function getEmloyees() {
    fetch("http://localhost:8080")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setEmployees(data);
      });
  }

  return (
    <div>
      {employ ? employ : "There is no employ data avaible"}
      {/* <img src={logo} alt="Logo" /> */}
      <button onClick={getEmloyees}>Get Employees</button>
    </div>
  );
}

export default App;
