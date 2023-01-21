import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './hero.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import certificationsimg from '../../../../Assets/certifications.jpeg'
import certificationsbut from '../../../../Assets/viewcerti.png'
import ModalImage from "react-modal-image";

const HeroMain = () => {
    
    return (
        <div className='hero-about'>
            <h1>WHAT DO WE OFFER?</h1>
            <h3> BB Enterprise provides reliable, quality-assured services along with a vast customer base across the state for distribution of products in the automobile & industrial sector. It has the support of domain experts who run the organization with their vast experience in their relevant fields. The infrastructure setup of the company in terms of it’s modern warehouse setup, the transportation network and channels, the technology platform like ERP based operations, the accounting process, internal control, audit and documentation are part of the business & most importantly the legal & statutory compliances are strictly adhered to.
The business is run with primary focus in stakeholder satisfaction in all forms.</h3>
       <div className='view_certi_but'>
       <ModalImage
        small={certificationsbut}
        large={certificationsimg}
        alt="Hello World!"
        />;
        </div>
        </div>
    );
};

export default HeroMain;