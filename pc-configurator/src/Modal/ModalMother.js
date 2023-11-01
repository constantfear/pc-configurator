import React from "react";
import "./modalMother.css"

const ModalMother = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="contacts">
                    <span className="sostav">Состав команды:</span>
                    <span>Титеев Рамиль</span> 
                    <span>Жилов Андрей</span> 
                    <span>Козлов Егор</span> 
                    <span>Солдатова Наталья</span> 
                    <span>Добровольский Иван</span>
                </div>
            </div>
        </div>
    )
}

export default ModalMother;