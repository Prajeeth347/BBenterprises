import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './hero.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import 'https://fonts.googleapis.com/css?family=Lato'

const HeroMain = () => {
    return (
        <div className='hero-main'>
            <h1>PASSION DRIVES US!</h1>
            <h5>Streamline Your Distribution<br></br> and Logistics with Us</h5>
            <h3>Our concern has a tagline - Passion drives us which summerizes our zeal to excel & deliver on a continuous growth path.</h3>
        </div>
    );
};

export default HeroMain;