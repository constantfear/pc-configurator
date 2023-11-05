import React, { useState, useEffect } from 'react';
import "./modalRAM.css"
import IronVue from '../components/IronVue';

const ModalRAM = ({active, setActive, items, parentCallback, itemsInfo}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form class="filtrs">
                    <div className='price'>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div>
                        <p>Тип оперативной памяти</p>
                        <div>
                            <input id="selectName0" type="checkbox" name="selectCooler" />
                            <label for="selectName0">СЖО</label>
                         </div>
                        <div>
                            <input id="selectName1" type="checkbox" name="selectCooler" />
                            <label for="selectName1">Кулер</label>
                        </div>
                    </div>
                </form>
                <div className='scroll'>
                    <IronVue items={items} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalRAM;