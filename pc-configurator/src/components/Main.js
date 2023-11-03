import "../styles.css";
import React, { useState, useEffect } from "react";
import ModalCase from "../Modal/ModalCase";
import ModalMother from "../Modal/ModalMother";
import ModalRAM from "../Modal/ModalRAM";
import ModalGPU from "../Modal/ModalGPU";
import ModalStorage from "../Modal/ModalStorage";
import ModalPower from "../Modal/ModalPower";
import ModalCPU from "../Modal/ModalCPU";
import ModalCool from "../Modal/ModalCool";

const Main = () => {

  const [dataBody, setBody] = useState(null);
  const [dataMother, setMother] = useState(null);
  const [dataRAM, setRAM] = useState(null);
  const [dataCool, setCool] = useState(null);
  const [dataGPU, setGPU] = useState(null);
  const [dataCPU, setCPU] = useState(null);
  const [dataStorage, setStorage] = useState(null);
  const [dataPower, setPower] = useState(null);

  async function getBody() {
    const response = await fetch(
      'http://localhost:8080/body',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Price": [6000,15000]
        })

      }
    )
    const jsonData = await response.json()
    return jsonData.Page_data
    // console.log(jsonData)
    
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
          "Core_number": [8],
          "TDP": ""
        })

      }
    )
    const jsonData = await response.json()
    return jsonData.Page_data
    
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
    // console.log(jsonData)
    return jsonData.Page_data
    
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
    return jsonData.Page_data
    
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
    return jsonData.Page_data
    
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
    return jsonData.Page_data
    
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
    return jsonData.Page_data
    
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
    return jsonData.Page_data
    
  }

  useEffect(() => {
    // Внутри этой функции вы можете вызвать вашу асинхронную функцию
    async function fetchData() {
      try {
        const response = await getBody();
        setBody(response); // Устанавливаем полученные данные в состояние
        const response1 = await getMotherBoard();
        setMother(response1); // Устанавливаем полученные данные в состояние
        const response2 = await getCoolingSystem();
        setCool(response2); // Устанавливаем полученные данные в состояние
        const response3 = await getRAM();
        setRAM(response3); // Устанавливаем полученные данные в состояние
        const response4 = await getVideocard();
        setGPU(response4); // Устанавливаем полученные данные в состояние
        const response5 = await getHardDrive();
        setStorage(response5); // Устанавливаем полученные данные в состояние
        const response6 = await getPowerUnit();
        setPower(response6); // Устанавливаем полученные данные в состояние
        const response7 = await getCpu();
        setCPU(response7); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }

    fetchData();
  }, []); // Второй аргумент (пустой массив) означает, что эффект будет выполняться только при монтировании компонента.

    const [modalCaseActive, setModalCaseActive] = useState(false);
    const [modalMotherActive, setModalMotherActive] = useState(false);
    const [modalRAMActive, setModalRAMActive] = useState(false);
    const [modalCoolActive, setModalCoolActive] = useState(false);
    const [modalGPUActive, setModalGPUActive] = useState(false);
    const [modalStorageActive, setModalStorageActive] = useState(false);
    const [modalPowerActive, setModalPowerActive] = useState(false);
    const [modalCPUActive, setModalCPUActive] = useState(false);
    return(
      <main className="main">
        <div className="leftConteiners">
          <div className="components">
            <div className="componentLogo">
              <img src="./images/caseLogo.svg" alt="корпус" />
              <p>Корпус</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalCaseActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/motherboardLogo.svg" alt="Плата" />
              <p>Материнская плата</p>
            </div>
            <div>
              <img src="" alt="" />
              <div className="rightAdd">
                <p>999 товаров</p>
                <button className="componentAdd" onClick={() => setModalMotherActive(true)}>Добавить +</button>
              </div>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/CPUCoolingLogo.svg" alt="Охлаждение" />
              <p>Система охлаждения</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalCoolActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/RAMLogo.svg" alt="RAM" />
              <p>Оперативная память</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalRAMActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/GPULogo.svg" alt="GPU" />
              <p>Видеокарта</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalGPUActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/dataStorageLogo.svg" alt="Накопитель" />
              <p>Хранение данных</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalStorageActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/powerUnitLogo.svg" alt="БП" className="powerUnit"/>
              <p>Блок питания</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalPowerActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className="components">
            <div className="componentLogo">
              <img src="./images/CPULogo.svg" alt="CPU" />
              <p>Процессор</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalCPUActive(true)}>Добавить +</button>
            </div>
          </div>
        </div>
        <div className="rightConteiners">
          <button >Сохранить сборку</button>
        </div>
        <ModalCase active={modalCaseActive} setActive={setModalCaseActive} items={dataBody} className="modalCase">
        </ModalCase>
        <ModalMother active={modalMotherActive} setActive={setModalMotherActive} items={dataMother} className="modalCase">
        </ModalMother>
        <ModalCool active={modalCoolActive} setActive={setModalCoolActive} items={dataCool} className="modalCase">
        </ModalCool>
        <ModalRAM active={modalRAMActive} setActive={setModalRAMActive} items={dataRAM} className="modalCase">
        </ModalRAM>
        <ModalGPU active={modalGPUActive} setActive={setModalGPUActive} items={dataGPU} className="modalCase">
        </ModalGPU>
        <ModalStorage active={modalStorageActive} setActive={setModalStorageActive} items={dataStorage} className="modalCase">
        </ModalStorage>
        <ModalPower active={modalPowerActive} setActive={setModalPowerActive} items={dataPower} className="modalCase">
        </ModalPower>
        <ModalCPU active={modalCPUActive} setActive={setModalCPUActive} items={dataCPU} className="modalCase">
        </ModalCPU>
      </main>

      
    )
}

export {Main}