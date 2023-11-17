import React from "react";
import "./modalBad.css"

const ModalContacts = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <span>ПЛОХО</span>
            </div>
        </div>
    )
}

export default ModalContacts;