import React from "react";
//import logo from "./Untitled.jpeg";

function App() {
  function getAll() {
    fetch("http://[::1]:8080").then((response) => {
      return response;
    });
    // .then((data) => {
    //   getAll(data);
    // });
  }

  return (
    <div>
      {/* {<img src={logo} alt="Logo" />} */}
      {<button onClick={getAll}>Get All</button>}
    </div>
  );
}

export default App;
