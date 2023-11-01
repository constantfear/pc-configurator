import React from "react";
import "./modalCPU.css"

const ModalCPU = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="contacts">
                <div className="content">
                <div>
                    <div className="filtr">
                    <div className="price">
                        <p className="priceText">Цена</p>
                        <div className="priceInput">
                            <input type="number" placeholder="10000" min="10000" max="30000" className="minPrice" />
                            <input type="number" placeholder="30000" min="0" max="30000" className="maxPrice" />
                        </div>
                    </div>
                    <div className="cores">
                        <p className="priceText">Количество ядер</p>
                        <div >
                            <input type="checkbox" id="cores4" name="cores4" />
                            <label for="cores4">4</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cores4" name="cores4" />
                            <label for="cores4">6</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cores4" name="cores4" />
                            <label for="cores4">8</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cores4" name="cores4" />
                            <label for="cores4">12</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cores4" name="cores4" />
                            <label for="cores4">16</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="cpuBoxes">
                    <div className="cpuBox">
                        <p>lo pore perspiciatis numquam esse consequuntur sapiente obcaecati voluptas tempora labore, perferendis adipisci possimus, consequatur ipsa, vel eos et voluptatem hic. Rem.</p>
                    </div>
                    <div className="cpuBox">
                        <p>lo pore perspiciatis numquam esse consequuntur sapiente obcaecati voluptas tempora labore, perferendis adipisci possimus, consequatur ipsa, vel eos et voluptatem hic. Rem.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCPU;