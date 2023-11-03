import React, { Component } from 'react'

export default function IronVue({items}) {

    return (
      <div>
            {
                items?.map(item => {
                    return(
                    <div key={item.id} className='wrapper'>
                        <div className='leftBlock'>                       
                            <img src={item.img} alt="" className='uglyImg'/>
                            <h1>{item.name}</h1>
                        </div>
                        <div>
                            <h2>{item.price}</h2>
                            <button>Добавить</button>
                        </div> 
                    </div>
                    )
                })
            }
      </div>
    )
}
