import React, {useState, Component } from 'react'
import "./ironsVue.css"

export default function VueGPU({items, parentCallback}) {

    function handlerItem(event) {
        parentCallback(event)
    }

    return (
        
      <div>
            {
                items?.map(item => {
                    return(
                    <div key={item.id} className='wrapperc'>
                        <div className='leftBlock'>                       
                            <img src={item.img} alt="" className='uglyImg'/>
                            <div>
                                <h1>{item.name}</h1>
                                <div>
                                    <p>тип памяти: {item.videomemory_type}, потребление: {item.power} Ватт</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>{item.price}</h2>
                            <button onClick={() => handlerItem(item)}>Добавить</button>
                        </div> 
                    </div>
                    )
                })
            }
      </div>
    )
}
