import React, { useState, useEffect } from 'react';
import "./modalMother.css"
import IronVue from '../components/IronVue';

const ModalMother = ({active, setActive, items, parentCallback, isLoading}) => {

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
          let temp = items.filter((item) => item.form_factor === selectedCategory || item.memory_type === selectedCategory
          || item.socket === selectedCategory || item.chipset === selectedCategory);
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
                <div className="buttons-container scroll">  
                        <div>
                            <p>Чипсет</p>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AMD B550"
                                    onChange={() => handleFilterButtonClick("AMD B550")}
                                />
                                <label for="AMD B550">AMD B550</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel B760"
                                    onChange={() => handleFilterButtonClick("Intel B760")}
                                />
                                <label for="Intel B760">Intel B760</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AMD A520"
                                    onChange={() => handleFilterButtonClick("AMD A520")}
                                />
                                <label for="AMD A520">AMD A520</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AMD B650"
                                    onChange={() => handleFilterButtonClick("AMD B650")}
                                />
                                <label for="AMD B650">AMD B650</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel Z790"
                                    onChange={() => handleFilterButtonClick("Intel Z790")}
                                />
                                <label for="Intel Z790">Intel Z790</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel B560"
                                    onChange={() => handleFilterButtonClick("Intel B560")}
                                />
                                <label for="Intel B560">Intel B560</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel H310"
                                    onChange={() => handleFilterButtonClick("Intel H310")}
                                />
                                <label for="Intel H310">Intel H310</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel H470"
                                    onChange={() => handleFilterButtonClick("Intel H470")}
                                />
                                <label for="Intel H470">Intel H470</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AMD A320"
                                    onChange={() => handleFilterButtonClick("AMD A320")}
                                />
                                <label for="AMD A320">AMD A320</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel H670"
                                    onChange={() => handleFilterButtonClick("Intel H670")}
                                />
                                <label for="Intel H670">Intel H670</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="AMD B450"
                                    onChange={() => handleFilterButtonClick("AMD B450")}
                                />
                                <label for="AMD B450">AMD B450</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel H610"
                                    onChange={() => handleFilterButtonClick("Intel H610")}
                                />
                                <label for="Intel H610">Intel H610</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel B660"
                                    onChange={() => handleFilterButtonClick("Intel B660")}
                                />
                                <label for="Intel B660">Intel B660</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel Z590"
                                    onChange={() => handleFilterButtonClick("Intel Z590")}
                                />
                                <label for="Intel Z590">Intel Z590</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel H510"
                                    onChange={() => handleFilterButtonClick("Intel H510")}
                                />
                                <label for="Intel H510">Intel H510</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel Z690"
                                    onChange={() => handleFilterButtonClick("Intel Z690")}
                                />
                                <label for="Intel Z690">Intel Z690</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Intel H410"
                                    onChange={() => handleFilterButtonClick("Intel H410")}
                                />
                                <label for="Intel H410">Intel H410</label>
                            </div>
                        </div>
                        <div>
                            <p>Поддерживаемый тип памяти:</p>
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
                        <div>
                            <p>Форм-фактор:</p>
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
                                    name="microATX"
                                    onChange={() => handleFilterButtonClick("microATX")}
                                />
                                <label for="microATX">microATX</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    name="Mini-ITX"
                                    onChange={() => handleFilterButtonClick("Mini-ITX")}

                                />
                                <label for="Mini-ITX">Mini-ITX</label>
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
                </div>
                <div>
                    <div className='scroll'>
                        <IronVue items={filteredItems} parentCallback={parentCallback}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMother;