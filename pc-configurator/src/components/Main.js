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

  const [pickedCase, setConfigCase] = useState("");
  const [pickedMother, setConfigMother] = useState("");
  const [pickedCool, setConfigCool] = useState("");
  const [pickedRAM, setConfigRAM] = useState("");
  const [pickedGPU, setConfigGPU] = useState("");
  const [pickedStorage, setConfigStorage] = useState("");
  const [pickedPower, setConfigPower] = useState("");
  const [pickedCPU, setConfigCPU] = useState("");
  const [pickedName, setName] = useState("Сборка");

  const [dataBodyInfo, setBodyInfo] = useState(null);
  const [dataMotherInfo, setMotherInfo] = useState(null);
  const [dataRAMInfo, setRAMInfo] = useState(null);
  const [dataCoolInfo, setCoolInfo] = useState(null);
  const [dataGPUInfo, setGPUInfo] = useState(null);
  const [dataCPUInfo, setCPUInfo] = useState(null);
  const [dataStorageInfo, setStorageInfo] = useState(null);
  const [dataPowerInfo, setPowerInfo] = useState(null);

  async function setConfig(name, body, mother, cpu, cool, ram, gpu, storage, power) {
    const fullPrice = cpu.price + mother.price + body.price + cool.price + ram.price + gpu.price + storage.price + power.price
    const response=await fetch(
      'http://localhost:8080/set_config',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Name":name,
          "Body":String(body.id),
          "Motherboard":String(mother.id),
          "Processor":String(cpu.id),
          "Cooling_system":String(cool.id),
          "RAM":String(ram.id),
          "Videocard":String(gpu.id),
          "Disk":String(storage.id),
          "Power_unit":String(power.id),
          "Full_price":String(fullPrice)
        })
      }
    )
    const jsonData = await response.json()
    console.log(jsonData)
  }

  async function getBody() {
    const response = await fetch(
      'http://localhost:8080/body',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Price": [0,30000]
        })

      }
    )
    const jsonData = await response.json()
    return jsonData.Page_data
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
          "Price": [0,300000],
          "Frequency": [2,16],
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

  async function getBody1() {
    const response = await fetch(
      'http://localhost:8080/body',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Price": [0,300000]
        })
      }
    )
    const jsonData = await response.json()
    return jsonData
  }

  
  async function getCpu1() {
    const response = await fetch(
      'http://localhost:8080/cpu',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Price": [0,300000],
          "Frequency": [2,16],
          "Core_number": [8],
          "TDP": ""
        })
      }
    )
    const jsonData = await response.json()
    return jsonData
  }

  async function getMotherBoard1() {
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
    return jsonData
  }

  async function getCoolingSystem1() {
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
    return jsonData
  }

  async function getHardDrive1() {
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
    return jsonData
  }

  async function getRAM1() {
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
    return jsonData
  }

  async function getPowerUnit1() {
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
    return jsonData
  }

  async function getVideocard1() {
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
    return jsonData
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

        const response0 = await getBody1();
        setBodyInfo(response0); // Устанавливаем полученные данные в состояние
        const response21 = await getMotherBoard1();
        setMotherInfo(response21); // Устанавливаем полученные данные в состояние
        const response22 = await getCoolingSystem1();
        setCoolInfo(response22); // Устанавливаем полученные данные в состояние
        const response23 = await getRAM1();
        setRAMInfo(response23); // Устанавливаем полученные данные в состояние
        const response24 = await getVideocard1();
        setGPUInfo(response24); // Устанавливаем полученные данные в состояние
        const response25 = await getHardDrive1();
        setStorageInfo(response25); // Устанавливаем полученные данные в состояние
        const response26 = await getPowerUnit1();
        setPowerInfo(response26); // Устанавливаем полученные данные в состояние
        const response27 = await getCpu1();
        setCPUInfo(response27); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }

    fetchData();
  }, []); // Второй аргумент (пустой массив) означает, что эффект будет выполняться только при монтировании компонента.

  const [modalCaseActive, setModalCaseActive] = useState(false);
  const [modalMotherActive, setModalMotherActive] = useState(false);
  const [modalRAMActive, setModalRAMActive] = useState(true);
  const [modalCoolActive, setModalCoolActive] = useState(false);
  const [modalGPUActive, setModalGPUActive] = useState(false);
  const [modalStorageActive, setModalStorageActive] = useState(false);
  const [modalPowerActive, setModalPowerActive] = useState(false);
  const [modalCPUActive, setModalCPUActive] = useState(false);
    return(
      <main className="main">
        <div className="leftConteiners">
          <div className={pickedCase != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/caseLogo.svg" alt="корпус" />
              <p>Корпус</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalCaseActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className={pickedMother != "" ? "components active" : "components"}>
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
          <div className={pickedCool != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/CPUCoolingLogo.svg" alt="Охлаждение" />
              <p>Система охлаждения</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalCoolActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className={pickedRAM != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/RAMLogo.svg" alt="RAM" />
              <p>Оперативная память</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalRAMActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className={pickedGPU != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/GPULogo.svg" alt="GPU" />
              <p>Видеокарта</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalGPUActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className={pickedStorage != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/dataStorageLogo.svg" alt="Накопитель" />
              <p>Хранение данных</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalStorageActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className={pickedPower != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/powerUnitLogo.svg" alt="БП" className="powerUnit"/>
              <p>Блок питания</p>
            </div>
            <div className="rightAdd">
              <p>999 товаров</p>
              <button className="componentAdd" onClick={() => setModalPowerActive(true)}>Добавить +</button>
            </div>
          </div>
          <div className={pickedCPU != "" ? "components active" : "components"}>
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
          <input type="text" placeholder="Введите название сборки" value={pickedName} onChange={e => setName(e.target.value)}/>
          <button onClick={() => setConfig(pickedName, pickedCase, pickedMother, pickedCPU, pickedCool, pickedRAM, pickedGPU, pickedStorage, pickedPower)}>Сохранить сборку</button>
        </div>
        <ModalCase active={modalCaseActive} setActive={setModalCaseActive} items={dataBody} state={pickedCase} 
        parentCallback={setConfigCase} itemsInfo={dataBodyInfo} className="modalCase">
        </ModalCase>
        <ModalMother active={modalMotherActive} setActive={setModalMotherActive} items={dataMother} state={pickedMother} 
        parentCallback={setConfigMother} itemsInfo={dataMotherInfo} className="modalCase">
        </ModalMother>
        <ModalCool active={modalCoolActive} setActive={setModalCoolActive} items={dataCool} state={pickedCool} 
        parentCallback={setConfigCool} itemsInfo={dataCoolInfo} className="modalCase">
        </ModalCool>
        <ModalRAM active={modalRAMActive} setActive={setModalRAMActive} items={dataRAM} state={pickedRAM} 
        parentCallback={setConfigRAM} itemsInfo={dataRAMInfo} className="modalCase">
        </ModalRAM>
        <ModalGPU active={modalGPUActive} setActive={setModalGPUActive} items={dataGPU} state={pickedGPU} 
        parentCallback={setConfigGPU} itemsInfo={dataGPUInfo} className="modalCase">
        </ModalGPU>
        <ModalStorage active={modalStorageActive} setActive={setModalStorageActive} items={dataStorage} state={pickedStorage} 
        parentCallback={setConfigStorage} itemsInfo={dataStorageInfo} className="modalCase">
        </ModalStorage>
        <ModalPower active={modalPowerActive} setActive={setModalPowerActive} items={dataPower} state={pickedPower} 
        parentCallback={setConfigPower} itemsInfo={dataPowerInfo} className="modalCase">
        </ModalPower>
        <ModalCPU active={modalCPUActive} setActive={setModalCPUActive} items={dataCPU} state={pickedCPU} 
        parentCallback={setConfigCPU} itemsInfo={dataCPUInfo} className="modalCase">
        </ModalCPU>
      </main>
    )
}

export {Main}