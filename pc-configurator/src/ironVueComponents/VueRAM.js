import React, {useState, Component } from 'react'
import "./ironsVue.css"

export default function VueRAM({items, parentCallback}) {

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
                                    <p>{item.memory_type}</p>
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