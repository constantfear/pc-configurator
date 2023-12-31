import React from "react";
import "./modalInfo.css"

const ModalInfo = ({active, setActive}) => {
    return (
        <div className={active ? "modalar active" : "modalar"} onClick={() => setActive(false)}>
            <div className={active ? "modalar__content active" : "modalar__content"} onClick={e => e.stopPropagation()}>
                <p className="info">
                    Это — курсовой проект студентов группы М8О-305Б-21 — конфигуратор ПК. 
                    Конфигуратор ПК — онлайн-инструмент, который позволяет собрать компьютер самостоятельно или с минимальной посторонней помощью, 
                    а также ознакомиться со стоимостью выбранных комплектующих. Помимо конфигуратора, здесь есть каталог готовых конфигураций, 
                    в котором можно выбрать сборку на любой вкус/бюджет.
                </p>
            </div>
        </div>
    )
}

export default ModalInfo;