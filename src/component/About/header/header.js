import React from 'react';
import NavBarMain from './navbar/navbar';
import HeroMain from './hero/hero';
import './header.css'
const Header_main = () => {
    return (
        <div className="header_about">
            <NavBarMain/>
            <HeroMain/>
        </div>
    );
};

export default Header_main;