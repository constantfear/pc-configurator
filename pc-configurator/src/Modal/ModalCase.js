import React, { useState, useEffect } from 'react';
import "./modalCase.css"
import IronVue from '../components/IronVue';

const ModalCase = ({active, setActive, items, parentCallback}) => {

    // function handlerItem(event) {
    //     onClick(event)
    // }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='scroll'>
                    <IronVue items={items} parentCallback={parentCallback}/>
                    {/* {
                    items?.map(item => {
                        return(
                        <div key={item.id} className='wrapper'>
                            <div className='leftBlock'>                       
                                <img src={item.img} alt="" className='uglyImg'/>
                                <h1>{item.name}</h1>
                            </div>
                            <div>
                                <h2>{item.price}</h2>
                                <button onClick={() => handlerItem(item.id)}>Добавить</button>
                            </div> 
                        </div>
                        )
                    })
                    } */}
                </div>
            </div>
        </div>
    )
}

export default ModalCase;