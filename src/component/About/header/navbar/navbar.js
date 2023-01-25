import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar ,NavDropdown} from 'react-bootstrap';
import logo from '../../../../Assets/logo.png'
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import ModalImage from "react-modal-image";
import storyimg from '../../../../Assets/ourStoryMain.png'
import ourStory from '../../../../Assets/OurStory.png'
import { FaTwitter,FaInstagram,FaGlobe,FaLinkedinIn,FaFacebook,FaHome} from "react-icons/fa";
import { CgProfile} from "react-icons/cg";
import { MdOutlineMiscellaneousServices} from "react-icons/md";


// src/component/Home/header/navbar/navbar.js
// src/component/Home/header/header.css
const NavBarMain = () => {
    return (
        <div className='navmain_wrapper'>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
            <a class="navbar-brand" href="/">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
            <div className='brand-side-nav'>
            <div className='brand_name'> BB Enterprises</div>
            <div className='brand_sub_name'>PASSION DRIVES US </div>
            <div className='brand_sub_name'>ISO 9001:2015 </div>
            </div>
        </a>
              <Navbar.Toggle className='togglebutton_nav' aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <a class="navbar-brand" href="/">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
            <div className='brand-side-nav'>
            <div className='brand_name'> BB Enterprises</div>
            <div className='brand_sub_name'>PASSION DRIVES US </div>
            <div className='brand_sub_name'>ISO 9001:2015 </div>
            </div>
        </a>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='unselected_nav_item' href="/"><FaHome/>Home</Nav.Link>
                    <Nav.Link className='selected_nav_item' href="#"><CgProfile/> About Us</Nav.Link>
                    <Nav.Link className='unselected_nav_item' href="/services"><MdOutlineMiscellaneousServices/> Services</Nav.Link>
                    <Nav.Link className='contact_nav_item' href="#contactus">Contact us</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
                <div className='bluediv'>
                  <div className='social_icons'>
                    <a href='https://twitter.com/bbent_in'><FaTwitter className='social_icons_mobile'/></a>
                    <a href='https://www.instagram.com/bbent_in/'><FaInstagram className='social_icons_mobile'/></a>
                    <a href='mailto:bbenterprises2019@yahoo.com'><FaGlobe className='social_icons_mobile'/></a>
                    <a href='https://www.linkedin.com/in/bb-enterprises-a16155263'><FaLinkedinIn className='social_icons_mobile'/></a>
                  </div>
                    <p>11/3 Ganganagar Katakhal,<br/>  Madhyamgram, North 24 Parganas<br/>
Kolkata, West Bengal-700132
</p>
                  </div>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    );
};

export default NavBarMain;