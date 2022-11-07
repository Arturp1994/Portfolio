import React from 'react';
import style from './Nav.module.scss'
import image from './../assets/image/photo.jpeg'

function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.container} style={{backgroundImage: `url(${image})`}}>
                {/*Button Menu*/}
                {/* List link*/}
                <div className={style.navbar_collapse}>
                    <div className={style.logo}></div>
                    <ul className={style.navbar_nav}>
                        <li className={style.nav_item}>
                            <a className={style.nav_link} href=''>
                                HOME
                            </a>
                        </li>
                        <li className={style.nav_item}>
                            <a className={style.nav_link} href=''>
                                ABOUT
                            </a>
                        </li>
                        <li className={style.nav_item}>
                            <a className={style.nav_link} href=''>
                                PORTFOLIO
                            </a>
                        </li>
                        <li className={style.nav_item}>
                            <a className={style.nav_link} href=''>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                    <ul className={style.social_media_nav}>
                        <li>
                            <a className={style.facebook} href=''>

                            </a>
                        </li>
                        <li>
                            <a className={style.lincedIn} href=''>

                            </a>
                        </li>
                        <li>
                            <a className={style.gitHub} href=''>

                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
