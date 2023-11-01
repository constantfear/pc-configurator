import "../styles.css";
import React, { useState } from "react";
import ModalCase from "../Modal/ModalCase";
import ModalMother from "../Modal/ModalMother";
import ModalRAM from "../Modal/ModalRAM";
import ModalGPU from "../Modal/ModalGPU";
import ModalStorage from "../Modal/ModalStorage";
import ModalPower from "../Modal/ModalPower";
import ModalCPU from "../Modal/ModalCPU";
import ModalCool from "../Modal/ModalCool";

const Main = () => {

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
    const jsonData = await response.json();
    console.log(jsonData);
  }

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
          <button onClick={setConfig}>Сохранить сборку</button>
        </div>
        <ModalCase active={modalCaseActive} setActive={setModalCaseActive} className="modalCase">
        </ModalCase>
        <ModalMother active={modalMotherActive} setActive={setModalMotherActive} className="modalCase">
        </ModalMother>
        <ModalCool active={modalCoolActive} setActive={setModalCoolActive} className="modalCase">
        </ModalCool>
        <ModalRAM active={modalRAMActive} setActive={setModalRAMActive} className="modalCase">
        </ModalRAM>
        <ModalGPU active={modalGPUActive} setActive={setModalGPUActive} className="modalCase">
        </ModalGPU>
        <ModalStorage active={modalStorageActive} setActive={setModalStorageActive} className="modalCase">
        </ModalStorage>
        <ModalPower active={modalPowerActive} setActive={setModalPowerActive} className="modalCase">
        </ModalPower>
        <ModalCPU active={modalCPUActive} setActive={setModalCPUActive} className="modalCase">
        </ModalCPU>
      </main>

      
    )
}

export {Main}