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
                    <Nav.Link className='unselected_nav_item' href="/">Home</Nav.Link>
                    <Nav.Link className='selected_nav_item' href="#">About Us</Nav.Link>
                    <Nav.Link className='unselected_nav_item' href="/services">Services</Nav.Link>
                    <Nav.Link className='contact_nav_item' href="#contactus">Contact us</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    );
};

export default NavBarMain;