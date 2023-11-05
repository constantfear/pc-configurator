import React, { useState, useEffect } from 'react';
import "./modalCool.css"
import IronVue from '../components/IronVue';

const ModalCool = ({active, setActive, items, parentCallback, itemsInfo}) => {

    const [filteredCool, setFilteredCool] = useState(null)
    const [liquidCheckbox, setLiquidCheckbox] = useState(null);
    const [airCheckbox, setAirCheckbox] = useState(null);
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
    
        if (liquidCheckbox) {
          filtered = filtered.filter(n => n.cooling_system_type === "water cooling system");
        }

        if (airCheckbox) {
            filtered = filtered.filter(n => n.cooling_system_type === "Conventional cooling system");
        }

        if (airCheckbox && liquidCheckbox) {
            filtered = filtered
        }


    
        setFilteredCool(filtered);
        console.log(filtered)
    }, [ items, searchMin, searchMax, liquidCheckbox, airCheckbox ]);

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
                        <div>
                            <input 
                                id="selectName0" 
                                type="checkbox"
                                value={liquidCheckbox} 
                                name="selectCooler" 
                                onChange={e => setLiquidCheckbox(e.target.checked)}
                            />
                            <label for="selectName0">СЖО</label>
                        </div>
                        <div>
                            <input 
                                id="selectName1" 
                                type="checkbox"
                                value={airCheckbox} 
                                name="selectCooler" 
                                onChange={e => setAirCheckbox(e.target.checked)}
                            />
                            <label for="selectName1">Кулер</label>
                        </div>
                    </div>
                </form>
                <div className='scroll'>
                    <IronVue items={filteredCool} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalCool;