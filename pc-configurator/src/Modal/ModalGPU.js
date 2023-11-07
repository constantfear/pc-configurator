import React, { useState, useEffect } from 'react';
import "./modalGPU.css"
import IronVue from '../components/IronVue';

const ModalGPU = ({active, setActive, items, parentCallback, isLoading}) => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
    let filters = ["GDDR2", "GDDR3", "GDDR5", "GDDR5X", "GDDR6", "GDDR6X"];
  
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
          let temp = items.filter((item) => item.videomemory_type === selectedCategory);
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
                    <p>Тип памяти видеокарты:</p>
                      <div>
                          <input 
                              type="checkbox"
                              name="GDDR2"
                              onChange={() => handleFilterButtonClick("GDDR2")} 
                          />
                          <label for="GDDR2">GDDR2</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="GDDR3"
                              onChange={() => handleFilterButtonClick("GDDR3")} 
                          />
                          <label for="GDDR3">GDDR3</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="GDDR5"
                              onChange={() => handleFilterButtonClick("GDDR5")} 
                          />
                          <label for="GDDR5">GDDR5</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="GDDR5X"
                              onChange={() => handleFilterButtonClick("GDDR5X")} 
                          />
                          <label for="GDDR5X">GDDR5X</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="GDDR6"
                              onChange={() => handleFilterButtonClick("GDDR6")} 
                          />
                          <label for="GDDR6">GDDR6</label>
                      </div>
                      <div>
                          <input 
                              type="checkbox"
                              name="GDDR6X"
                              onChange={() => handleFilterButtonClick("GDDR6X")} 
                          />
                          <label for="GDDR6X">GDDR6X</label>
                      </div>
                </div>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalGPU;