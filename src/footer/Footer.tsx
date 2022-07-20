import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Footer.module.css";



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Pryshchep Arthur</h2>
                <div className={style.apps}>
                    <div className={style.app}></div>
                    <div className={style.app}></div>
                    <div className={style.app}></div>
                    <div className={style.app}></div>
                </div>
                <h3>2022 Все права защищены</h3>
            </div>
        </div>
    );
}

export default Footer;
