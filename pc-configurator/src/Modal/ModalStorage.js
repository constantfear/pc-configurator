import React, { useState, useEffect } from 'react';
import "./modalStorage.css"
import IronVue from '../components/IronVue';

const ModalStorage = ({active, setActive, items, parentCallback, isLoading}) => {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);
  
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
          let temp = items.filter((item) => item.disk_type === selectedCategory);
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
                    <p>Тип накопителя данных:</p>
                    <div>
                        <input 
                            type="checkbox"
                            name="HDD"
                            onChange={() => handleFilterButtonClick("HDD")} 
                        />
                        <label for="HDD">HDD</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox"
                            name="SSD"
                            onChange={() => handleFilterButtonClick("HDD")} 
                        />
                        <label for="SSD">SSD</label>
                    </div>
                </div>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalStorage;