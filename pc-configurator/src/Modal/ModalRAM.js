import React, { useState, useEffect, Suspense } from 'react';
import "./modalRAM.css"
import IronVue from '../components/IronVue';

const ModalRAM = ({active, setActive, items, isLoading, parentCallback}) => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
    let filters = ["DDR2", "DDR3", "DDR4", "DDR5"];
  
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
          let temp = items.filter((item) => item.memory_type === selectedCategory);
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
                              name="DDR2"
                              onChange={() => handleFilterButtonClick("DDR2")} 
                          />
                          <label for="DDR2">DDR2</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="DDR3"
                              onChange={() => handleFilterButtonClick("DDR3")} 
                          />
                          <label for="DDR3">DDR3</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="DDR4"
                              onChange={() => handleFilterButtonClick("DDR4")} 
                          />
                          <label for="DDR4">DDR4</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="DDR5"
                              onChange={() => handleFilterButtonClick("DDR5")} 
                          />
                          <label for="DDR5">DDR5</label>
                      </div>
                </div>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalRAM;