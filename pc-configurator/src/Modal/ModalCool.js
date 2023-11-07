import React, { useState, useEffect } from 'react';
import "./modalCool.css"
import IronVue from '../components/IronVue';

const ModalCool = ({active, setActive, items, isLoading, parentCallback}) => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
    let filters = ["water cooling system", "Conventional cooling system"];
  
    const handleFilterButtonClick = (selectedCategory) => {
      if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
  
    useEffect(() => {
      filterItems();
    }, [selectedFilters, isLoading]);
  
    const filterItems = () => {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = items.filter((item) => item.cooling_system_type === selectedCategory);
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else if (!isLoading) {
        setFilteredItems([...items]);
      }
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="buttons-container">                    
                    <p>Тип оперативной памяти:</p>
                    <div>
                        <input 
                            type="checkbox"
                            name="water"
                            onChange={() => handleFilterButtonClick("water cooling system")} 
                        />
                        <label for="water">СЖО</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="air"
                            onChange={() => handleFilterButtonClick("Conventional cooling system")} 
                        />
                        <label for="air">Куллер</label>
                    </div>
                </div>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalCool;