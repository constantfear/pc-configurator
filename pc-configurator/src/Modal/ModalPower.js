import React, { useState, useEffect } from 'react';
import "./modalPower.css"
import IronVue from '../components/IronVue';

const ModalPower = ({active, setActive, items, parentCallback, itemsInfo}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form class="filtrs">
                    <div>
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div>
                        <p>Тип блока питания</p>
                        <div>
                            <input id="selectName0" type="checkbox" name="selectCooler" />
                            <label for="selectName0">СЖО</label>
                         </div>
                         <div>
                            <input id="selectName0" type="checkbox" name="selectCooler" />
                            <label for="selectName0">СЖО</label>
                         </div>
                         <div>
                            <input id="selectName0" type="checkbox" name="selectCooler" />
                            <label for="selectName0">СЖО</label>
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

export default ModalPower;