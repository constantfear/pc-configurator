import React, { useState, useEffect } from 'react';
import "./modalPower.css"
import IronVue from '../components/IronVue';

const ModalPower = ({active, setActive, items, parentCallback, isLoading}) => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
    let filters = ["ATX", "TFX", "SFX"];
  
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
          let temp = items.filter((item) => item.power_unit_type === selectedCategory);
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
                    <p>Тип блока питания:</p>
                      <div>
                          <input 
                              type="checkbox"
                              name="ATX"
                              onChange={() => handleFilterButtonClick("ATX")} 
                          />
                          <label for="ATX">ATX</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="TFX"
                              onChange={() => handleFilterButtonClick("TFX")} 
                          />
                          <label for="TFX">TFX</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="SFX"
                              onChange={() => handleFilterButtonClick("SFX")} 
                          />
                          <label for="SFX">SFX</label>
                      </div>
                </div>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalPower;