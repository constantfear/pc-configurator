import "../styles.css";
import React, { useState, useEffect, Suspense, useLayoutEffect } from "react";
// import ModalCase from "../Modal/ModalCase";
// import ModalMother from "../Modal/ModalMother";
// import ModalRAM from "../Modal/ModalRAM";
// import ModalGPU from "../Modal/ModalGPU";
// import ModalStorage from "../Modal/ModalStorage";
// import ModalPower from "../Modal/ModalPower";
// import ModalCPU from "../Modal/ModalCPU";
// import ModalCool from "../Modal/ModalCool";

const ModalCase = React.lazy(() => import ("../Modal/ModalCase"))
const ModalMother = React.lazy(() => import ("../Modal/ModalMother"))
const ModalRAM = React.lazy(() => import ("../Modal/ModalRAM"))
const ModalGPU = React.lazy(() => import ("../Modal/ModalGPU"))
const ModalStorage = React.lazy(() => import ("../Modal/ModalStorage"))
const ModalPower = React.lazy(() => import ("../Modal/ModalPower"))
const ModalCPU = React.lazy(() => import ("../Modal/ModalCPU"))
const ModalCool = React.lazy(() => import ("../Modal/ModalCool"))

const Main = () => {

  const [countBody, setCountBody] = useState(0);
  const [countMother, setCountMother] = useState(0);
  const [countRAM, setCountRAM] = useState(0);
  const [countCool, setCountCool] = useState(0);
  const [countGPU, setCountGPU] = useState(0);
  const [countCPU, setCountCPU] = useState(0);
  const [countStorage, setCountStorage] = useState(0);
  const [countPower, setCountPower] = useState(0);

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

  const [isLoading, setIsLoading] = useState(true);

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

  async function getCount(iron) { 
    const response = await fetch(
      'http://localhost:8080/count',
      {
        method: 'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body: JSON.stringify({
          "Component" : iron
        })

      }
    )
    const jsonData = await response.json()
    return jsonData
    
  }

  useLayoutEffect(() => {
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
        
        const Count = await getCount("body")
        setCountBody(Count[0].amount)
        const Count1 = await getCount("processor")
        setCountCPU(Count1[0].amount)
        const Count2 = await getCount("cooling_system")
        setCountCool(Count2[0].amount)
        const Count3 = await getCount("videocard")
        setCountGPU(Count3[0].amount)
        const Count4 = await getCount("motherboard")
        setCountMother(Count4[0].amount)
        const Count5 = await getCount("power_unit")
        setCountPower(Count5[0].amount)
        const Count6 = await getCount("ram")
        setCountRAM(Count6[0].amount)
        const Count7 = await getCount("disk")
        setCountStorage(Count7[0].amount)

        setIsLoading(false);
        // setIsLoadingRam(false);

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
          <div className={pickedCase != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/caseLogo.svg" alt="корпус" />
              <p>Корпус</p>
            </div>
            <div className="rightAdd">
              {
                pickedCase != "" ? 
                <div className="pickedIron">
                  <img src={pickedCase.img} alt="case" className="pickedImg"/>
                  <p>{pickedCase.name}</p>
                </div>:
                <p>{countBody} товаров</p>
              }
              <button className="componentAdd" onClick={() => setModalCaseActive(true)}>Добавить</button>
            </div>
          </div>
          <div className={pickedMother != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/motherboardLogo.svg" alt="Плата" />
              <p>Материнская плата</p>
            </div>
            <div>
              <div className="rightAdd">
                {
                pickedMother != "" ? 
                <div className="pickedIron">
                  <img src={pickedMother.img} alt="case" className="pickedImg"/>
                  <p>{pickedMother.name}</p>
                </div>:
                <p>{countMother} товаров</p>
                }
                <button className="componentAdd" onClick={() => setModalMotherActive(true)}>Добавить</button>
              </div>
            </div>
          </div>
          <div className={pickedCool != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/CPUCoolingLogo.svg" alt="Охлаждение" />
              <p>Система охлаждения</p>
            </div>
            <div className="rightAdd">
                {
                pickedCool != "" ? 
                <div className="pickedIron">
                  <img src={pickedCool.img} alt="case" className="pickedImg"/>
                  <p>{pickedCool.name}</p>
                </div>:
                <p>{countCool} товаров</p>
                }
              <button className="componentAdd" onClick={() => setModalCoolActive(true)}>Добавить</button>
            </div>
          </div>
          <div className={pickedRAM != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/RAMLogo.svg" alt="RAM" />
              <p>Оперативная память</p>
            </div>
            <div className="rightAdd">
                {
                pickedRAM != "" ? 
                <div className="pickedIron">
                  <img src={pickedRAM.img} alt="case" className="pickedImg ram"/>
                  <p>{pickedRAM.name}</p>
                </div>:
                <p>{countRAM} товаров</p>
                }
              <button className="componentAdd" onClick={() => setModalRAMActive(true)}>Добавить</button>
            </div>
          </div>
          <div className={pickedGPU != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/GPULogo.svg" alt="GPU" />
              <p>Видеокарта</p>
            </div>
            <div className="rightAdd">
                {
                pickedGPU != "" ? 
                <div className="pickedIron">
                  <img src={pickedGPU.img} alt="case" className="pickedImg"/>
                  <p>{pickedGPU.name}</p>
                </div>:
                <p>{countGPU} товаров</p>
                }
              <button className="componentAdd" onClick={() => setModalGPUActive(true)}>Добавить</button>
            </div>
          </div>
          <div className={pickedStorage != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/dataStorageLogo.svg" alt="Накопитель" />
              <p>Хранение данных</p>
            </div>
            <div className="rightAdd">
                {
                pickedStorage != "" ? 
                <div className="pickedIron">
                  <img src={pickedStorage.img} alt="case" className="pickedImg"/>
                  <p>{pickedStorage.name}</p>
                </div>:
                <p>{countStorage} товаров</p>
                }
              <button className="componentAdd" onClick={() => setModalStorageActive(true)}>Добавить</button>
            </div>
          </div>
          <div className={pickedPower != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/powerUnitLogo.svg" alt="БП" className="powerUnit"/>
              <p>Блок питания</p>
            </div>
            <div className="rightAdd">
                {
                pickedPower != "" ? 
                <div className="pickedIron">
                  <img src={pickedPower.img} alt="case" className="pickedImg"/>
                  <p>{pickedPower.name}</p>
                </div>:
                <p>{countPower} товаров</p>
                }
              <button className="componentAdd" onClick={() => setModalPowerActive(true)}>Добавить</button>
            </div>
          </div>
          <div className={pickedCPU != "" ? "components active" : "components"}>
            <div className="componentLogo">
              <img src="./images/CPULogo.svg" alt="CPU" />
              <p>Процессор</p>
            </div>
            <div className="rightAdd">
                {
                pickedCPU != "" ? 
                <div className="pickedIron">
                  <img src={pickedCPU.img} alt="case" className="pickedImg"/>
                  <p>{pickedCPU.name}</p>
                </div>:
                <p>{countCPU} товаров</p>
                }
              <button className="componentAdd" onClick={() => setModalCPUActive(true)}>Добавить</button>
            </div>
          </div>
        </div>
        <div className="rightConteiners">
          <input type="text" placeholder="Введите название сборки" value={pickedName} onChange={e => setName(e.target.value)} className="inputName"/>
          <button className="btnName" onClick={() => setConfig(pickedName, pickedCase, pickedMother, pickedCPU, pickedCool, pickedRAM, pickedGPU, pickedStorage, pickedPower)}>Сохранить сборку</button>
        </div>
        <Suspense fallback={<div>loading...</div>}>
        <ModalCase active={modalCaseActive} setActive={setModalCaseActive} items={dataBody} state={pickedCase} isLoading={isLoading} 
        parentCallback={setConfigCase} className="modalCase">
        </ModalCase>
        <ModalMother active={modalMotherActive} setActive={setModalMotherActive} items={dataMother} state={pickedMother} isLoading={isLoading} 
        parentCallback={setConfigMother} className="modalCase">
        </ModalMother>
        <ModalCool active={modalCoolActive} setActive={setModalCoolActive} items={dataCool} state={pickedCool} isLoading={isLoading}
        parentCallback={setConfigCool} className="modalCase">
        </ModalCool>
        <ModalRAM active={modalRAMActive} setActive={setModalRAMActive} items={dataRAM} isLoading={isLoading}
        state={pickedRAM} parentCallback={setConfigRAM} className="modalCase">
        </ModalRAM>
        <ModalGPU active={modalGPUActive} setActive={setModalGPUActive} items={dataGPU} state={pickedGPU} isLoading={isLoading} 
        parentCallback={setConfigGPU} className="modalCase">
        </ModalGPU>
        <ModalStorage active={modalStorageActive} setActive={setModalStorageActive} items={dataStorage} state={pickedStorage} isLoading={isLoading} 
        parentCallback={setConfigStorage} className="modalCase">
        </ModalStorage>
        <ModalPower active={modalPowerActive} setActive={setModalPowerActive} items={dataPower} state={pickedPower} isLoading={isLoading}
        parentCallback={setConfigPower} className="modalCase">
        </ModalPower>
        <ModalCPU active={modalCPUActive} setActive={setModalCPUActive} items={dataCPU} state={pickedCPU} isLoading={isLoading}
        parentCallback={setConfigCPU} className="modalCase">
        </ModalCPU>
        </Suspense>
      </main>
    )
}

export {Main}