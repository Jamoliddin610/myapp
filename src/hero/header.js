import React from 'react';
import '../global.css';
import '../column.css';

import logo from '../imgs/logo.svg'


export default function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="row middle">
                    <a href='#'>
                    <img className="logo-site" src={logo} alt="logo"></img>
                    </a>
                        <ul className="header-menu-list row ">
                            <li className="header-menu-items"><a href="#" className="menu-links">Home</a></li>
                            <li className="header-menu-items"><a href="#" className="menu-links">Courses</a></li>
                            <li className="header-menu-items"><a href="#" className="menu-links">Webinar</a></li>
                            <li className="header-menu-items"><a href="#" className="menu-links">Pricing</a></li>
                        </ul>
                        <ul className="header-nav-items row middle">
                            <li className="header-nav-items row middle"><span className="lang">Eng</span>
                                <i className="bx bx-globe " ></i>
                                <i className="bx bxs-down-arrow" ></i>
                                <div className="lang-down">
                                    <ul className="lang-list ">
                                        <li className="lang-items"><a href="#" className="lang-link">Uzbek</a></li>
                                        <li className="lang-items"><a href="#" className="lang-link">Russian</a></li>
                                        <li className="lang-items"><a href="#" className="lang-link">English</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="header-nav-items"><button className="login-btn">login</button></li>
                        </ul>
                </div>
            </div>
        </header>
    );
}
 