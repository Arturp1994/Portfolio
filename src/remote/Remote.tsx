import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Remote.module.css";


function Remote() {
    return (
        <div className={style.remote}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={style.button_1}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Remote;
