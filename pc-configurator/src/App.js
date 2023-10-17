import React from "react";
//import logo from "./Untitled.jpeg";

function App() {
  async function getBody() {
    const response = await fetch(
      'http://localhost:8080/body',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Price": [10000,30000]
        })
        // body: JSON.stringify({ "myData": "123" })
        // "Core_number": [2,4],
          // "TDP": ""
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getCpu() {
    const response = await fetch(
      'http://localhost:8080/cpu',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Price": [10000,30000],
          "Frequency": [2,4],
          "Core_number": [4],
          "TDP": ""
        })
        // body: JSON.stringify({ "myData": "123" })
        // "Core_number": [2,4],
          // "TDP": ""
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getMotherBoard() {
    const response = await fetch(
      'http://localhost:8080/motherboard',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          
        })
        
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getCoolingSystem() {
    const response = await fetch(
      'http://localhost:8080/cooling_system',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          
        })
        
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getHardDrive() {
    const response = await fetch(
      'http://localhost:8080/hard_drive',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          
        })
        
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getRAM() {
    const response = await fetch(
      'http://localhost:8080/ram',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          
        })
        
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getPowerUnit() {
    const response = await fetch(
      'http://localhost:8080/power_unit',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          
        })
        
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getVideocard() {
    const response = await fetch(
      'http://localhost:8080/videocard',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          
        })
        
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }
  
  return (
    <div>
      {<button onClick={getCpu}>Get CPU</button>}
      {<button onClick={getMotherBoard}>Get Motherboard</button>}
      {<button onClick={getBody}>Get Body</button>}
      {<button onClick={getCoolingSystem}>Get Cooling System</button>}
      {<button onClick={getHardDrive}>Get HDD</button>}
      {<button onClick={getRAM}>Get RAM</button>}
      {<button onClick={getPowerUnit}>Get Power Unit</button>}
      {<button onClick={getVideocard}>Get Videocard</button>}
    </div>
  );
}

export default App;
