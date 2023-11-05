import React, { useState, useEffect } from 'react';
import "./modalRAM.css"
import IronVue from '../components/IronVue';

const ModalRAM = ({active, setActive, items, parentCallback, itemsInfo}) => {

    const [filteredRAM, setFilteredRAM] = useState(null)
    const [ddr2Checkbox, setDdr2Checkbox] = useState(null);
    const [ddr3Checkbox, setDdr3Checkbox] = useState(null);
    const [ddr4Checkbox, setDdr4Checkbox] = useState(null);
    const [ddr5Checkbox, setDdr5Checkbox] = useState(null);
    const [ searchMin, setSearchMin ] = useState('');
    const [ searchMax, setSearchMax ] = useState('');

    useEffect(() => {
        let filtered = items;
    
        if (searchMin) {
          const s = searchMin.toLowerCase();
          filtered = filtered.filter(n => n.title.toLowerCase().includes(s));
        }

        if (searchMax) {
            const s = searchMax.toLowerCase();
            filtered = filtered.filter(n => n.title.toLowerCase().includes(s));
        }
    
        if (ddr2Checkbox && ddr3Checkbox && ddr4Checkbox && ddr5Checkbox) {
            filtered = items
        }

        if (!(ddr2Checkbox && ddr3Checkbox && ddr4Checkbox && ddr5Checkbox)) {
            if (!ddr2Checkbox) { //3
                filtered = filtered.filter(n => n.memory_type === 0 || n.memory_type === 1 || n.memory_type === 2);
              }
      
            if (!ddr3Checkbox) { //1
                filtered = filtered.filter(n => n.memory_type === 0 || n.memory_type === 2 || n.memory_type === 3);
            }

            if (!ddr4Checkbox) { //0
                filtered = filtered.filter(n => n.memory_type === 1 || n.memory_type === 2 || n.memory_type === 3);
              }
      
            if (!ddr5Checkbox) { //2
                filtered = filtered.filter(n => n.memory_type === 0 || n.memory_type === 1 || n.memory_type === 3);
            }
        }
        
        setFilteredRAM(filtered);
        console.log(filtered)
    }, [ items, searchMin, searchMax, ddr2Checkbox, ddr3Checkbox, ddr4Checkbox, ddr5Checkbox ]);

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form class="filtrs">
                    <div className='price'>
                        <input 
                            type="text"
                            placeholder='0'
                            value={searchMin}
                            onChange={e => setSearchMin(e.target.value)} 
                        />
                        <input 
                            type="text"
                            placeholder='10000'
                            value={searchMax}
                            onChange={e => setSearchMax(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Тип оперативной памяти</p>
                        <div>
                            <input 
                                id="selectName0" 
                                type="checkbox"
                                value={ddr2Checkbox} 
                                name="selectRAM" 
                                onChange={e => setDdr2Checkbox(e.target.checked)}
                            />
                            <label for="selectName0">DDR2</label>
                        </div>
                        <div>
                            <input 
                                id="selectName1" 
                                type="checkbox"
                                value={ddr3Checkbox} 
                                name="selectRAM" 
                                onChange={e => setDdr3Checkbox(e.target.checked)}                            
                            />
                            <label for="selectName1">DDR3</label>
                        </div>
                        <div>
                            <input 
                                id="selectName2" 
                                type="checkbox"
                                value={ddr4Checkbox} 
                                name="selectRAM" 
                                onChange={e => setDdr4Checkbox(e.target.checked)}                            
                            />
                            <label for="selectName2">DDR4</label>
                        </div>
                        <div>
                            <input 
                                id="selectName3" 
                                type="checkbox"
                                value={ddr5Checkbox} 
                                name="selectRAM" 
                                onChange={e => setDdr5Checkbox(e.target.checked)}                            
                            />
                            <label for="selectName3">DDR5</label>
                        </div>
                    </div>
                </form>
                <div className='scroll'>
                    <IronVue items={filteredRAM} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalRAM;