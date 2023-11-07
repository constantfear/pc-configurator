import React, { useState, useEffect } from 'react';
import "./modalCPU.css"
import IronVue from '../components/IronVue';

const ModalCPU = ({active, setActive, items, parentCallback, isLoading}) => {

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
          let temp = items.filter((item) => item.socket === selectedCategory || item.core_number ===  selectedCategory);
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
                <form class="filtrs scroll">
                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div>
                            <p>Количество ядер</p>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="2"
                                    onChange={() => handleFilterButtonClick(2)}
                                />
                                <label for="2">2</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="4"
                                    onChange={() => handleFilterButtonClick(4)}
                                />
                                <label for="4">4</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="6"
                                    onChange={() => handleFilterButtonClick(6)}
                                />
                                <label for="6">6</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="8"
                                    onChange={() => handleFilterButtonClick(8)}
                                />
                                <label for="8">8</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="10"
                                    onChange={() => handleFilterButtonClick(10)}
                                />
                                <label for="10">10</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="12"
                                    onChange={() => handleFilterButtonClick(12)}
                                />
                                <label for="12">12</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="16"
                                    onChange={() => handleFilterButtonClick(16)}
                                />
                                <label for="16">16</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="24"
                                    onChange={() => handleFilterButtonClick(24)}
                                />
                                <label for="24">24</label>
                            </div>
                        </div>
                        <div>
                            <p>Сокет</p>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="LGA1700"
                                    onChange={() => handleFilterButtonClick("LGA1700")}
                                />
                                <label for="LGA1700">LGA1700</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="LGA1151"
                                    onChange={() => handleFilterButtonClick("LGA1151")}
                                />
                                <label for="LGA1151">LGA1151</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="LGA1200"
                                    onChange={() => handleFilterButtonClick("LGA1200")}
                                />
                                <label for="LGA1200">LGA1200</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AM4"
                                    onChange={() => handleFilterButtonClick("AM4")}
                                />
                                <label for="AM4">AM4</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AM3+"
                                    onChange={() => handleFilterButtonClick("AM3+")}
                                />
                                <label for="AM3+">AM3+</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AM5"
                                    onChange={() => handleFilterButtonClick("AM5")}
                                />
                                <label for="AM5">AM5</label>
                            </div>
                        </div>
                        <div>
                            <p>Количество потоков</p>
                        </div>
                </form>
                <div className='scroll'>
                    <IronVue items={filteredItems} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalCPU;