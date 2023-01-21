import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './hero.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'https://fonts.googleapis.com/css?family=Lato'

const HeroMain = () => {
    return (
        <div className='hero-about'>
            <h1>ABOUT US</h1>
            <h3> BB Enterprises is a young concern which is currently 3 years old. Having started its journey in March 2019 and now have been promoted itself to an established business house in MSME category and being supported by the reputed financial organization to recapitalize the firm to make its foray into the ventures with a strong position in the market today.
</h3>
        </div>
    );
};

export default HeroMain;