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
          "Price": [6000,30000]
        })

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


  async function setConfig() {
    const response=await fetch(
      'http://localhost:8080/set_config',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Name":"Sborka",
          "Body":"1",
          "Motherboard":"1",
          "Processor":"1",
          "Cooling_system":"1",
          "RAM":"1",
          "Videocard":"2",
          "Disk":"1",
          "Power_unit":"1",
          "Full_price":"2"
        })
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
    
  }

  async function getConfigs() {
    const response = await fetch(
      'http://localhost:8080/get_configs',
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
  
  async function configExistence() { 
    const response = await fetch(
      'http://localhost:8080/config_existence',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Name" : "Sborka"
        })
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function deleteConfig() {
    const response = await fetch(
      'http://localhost:8080/delete_config',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "ID":"1"
        })

      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function updateNameConfig() {
    const response = await fetch(
      'http://localhost:8080/update_name',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "NewName":"nameTest",
          "ID":"3"
        })

      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }


  async function getCount() { 
    const response = await fetch(
      'http://localhost:8080/count',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Component" : "Videocard"
        })

      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function selectProduct() {
    const response = await fetch(
      'http://localhost:8080/select_component',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Component" : "Videocard",
          "ID":"2"
        })
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }
  async function getMaxPriceInComponents() {
    const response = await fetch(
      'http://localhost:8080/max_component_price',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Component":"Videocard"
        })

      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  async function getFiltersInComponent() {
    const response = await fetch(
      'http://localhost:8080/component_filters',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Component":"Videocard"
        })

      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
    
  }

  //получение фильтров 
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
      {<button onClick={getCount}>Get Count</button>}
      {<button onClick={selectProduct}>Select Product</button>}
      {<button onClick={setConfig}>Set Config</button>}
      {<button onClick={getConfigs}>Get Configs</button>}
      {<button onClick={getMaxPriceInComponents}>Get Max Price in Component</button>}
      {<button onClick={configExistence}>Config Exist???</button>}
      {<button onClick={deleteConfig}>Delete Config</button>}
      {<button onClick={updateNameConfig}>Update Name Config</button>}
      {/* {<button onClick={getFiltersInComponent}>Get Component Filters</button>} */}
    </div>
  );
}

export default App;
