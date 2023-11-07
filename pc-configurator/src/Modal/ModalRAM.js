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
        console.log("FLAG")
      }
      console.log(filteredItems);
    };
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="buttons-container">                    
                    <p>Тип оперативной памяти:</p>
                    {filters.map((category, idx) => (
                        <button
                            onClick={() => handleFilterButtonClick(category)}
                            className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
                            key={`filters-${idx}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalRAM;