import React, { useState, useEffect } from 'react';
import "./modalMother.css"
import IronVue from '../components/IronVue';

const ModalMother = ({active, setActive, items, parentCallback, itemsInfo}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <form class="filtrs">
                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div>
                            <p>Чипсет</p>
                            <div>
                                <input id="selectName0" type="checkbox" name="selectCooler" />
                                <label for="selectName0">СЖО</label>
                            </div>
                            <div>
                                <input id="selectName1" type="checkbox" name="selectCooler" />
                                <label for="selectName1">Кулер</label>
                            </div>
                        </div>
                        <div>
                            <p>Форм-фактор</p>
                            <div>
                                <input id="selectName0" type="checkbox" name="selectCooler" />
                                <label for="selectName0">СЖО</label>
                            </div>
                            <div>
                                <input id="selectName1" type="checkbox" name="selectCooler" />
                                <label for="selectName1">Кулер</label>
                            </div>
                        </div>
                        <div>
                            <p>Поддерживаемый тип памяти</p>
                            <div>
                                <input id="selectName0" type="checkbox" name="selectCooler" />
                                <label for="selectName0">СЖО</label>
                            </div>
                            <div>
                                <input id="selectName1" type="checkbox" name="selectCooler" />
                                <label for="selectName1">Кулер</label>
                            </div>
                        </div>
                        <div>
                            <p>Сокет</p>
                            <div>
                                <input id="selectName0" type="checkbox" name="selectCooler" />
                                <label for="selectName0">СЖО</label>
                            </div>
                            <div>
                                <input id="selectName1" type="checkbox" name="selectCooler" />
                                <label for="selectName1">Кулер</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input id="selectName0" type="checkbox" name="selectCooler" />
                                <label for="selectName0">СЖО</label>
                            </div>
                            <div>
                                <input id="selectName1" type="checkbox" name="selectCooler" />
                                <label for="selectName1">Кулер</label>
                            </div>
                        </div>
                </form>
                <div className='scroll'>
                    <IronVue items={items} parentCallback={parentCallback}/>
                </div>
            </div>
        </div>
    )
}

export default ModalMother;