import React, { useState, useEffect } from 'react';
import "./modalCase.css"
import IronVue from '../components/IronVue';

const ModalRAM = ({active, setActive, items}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='scroll'>
                    <IronVue items={items}/>
                </div>
            </div>
        </div>
    )
}

export default ModalRAM;