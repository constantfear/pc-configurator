import React from "react";
import "./modalGood.css"

const ModalContacts = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <span>ХОРОШО</span>
            </div>
        </div>
    )
}

export default ModalContacts;