import "../styles.css";
import Items from "./Items";
import { useEffect } from 'react';
import React, { Component } from 'react'

function Configs() {

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
    // console.log(jsonData)
    return jsonData
  }

  let jsonConfig

  getConfigs().then(jsonData => {
      jsonConfig = jsonData; // Ваши JSON данные
    })

    // for (var key in jsonConfig) {
    //   console.log(key)
    // }
    // jsonConfig.map(config => console.log(config.id))
    // console.log(jsonConfig)
    console.log(jsonConfig)
    return (
      <div>

      </div>
    )
  
}


export {Configs}