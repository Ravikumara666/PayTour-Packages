// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'; // Ensure you have a logo image in your src/assets folder
import './Header.css'; // Import custom CSS
import { Link } from 'react-router-dom';

function Header() {
  const [mode, setMode] = useState('dark');

  const handleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
    <Navbar bg={mode} expand="lg" className={`navbar-${mode}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Bootstrap" width="40" height="34" className="me-2" />
          <h3 className={`mb-0 ms-auto text-red`}>PayTour Planner</h3>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center my-1">
            <Nav.Link href="#" className={`nav-item-custom text-red`}><Link to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#" className={`nav-item-custom text-red`}><Link to={'/gallery'}> Gallery</Link></Nav.Link>
            <Nav.Link href="#" className={`nav-item-custom text-red`}>Contact</Nav.Link>
            <Nav.Link to href="#" className={`nav-item-custom text-red`}><Link to={'/about-us'}>About</Link></Nav.Link>
            <Nav className="nav-item-custom my-3">
              <label className="ui-switch">
                <input type="checkbox" onChange={handleMode} />
                <div className="slider">
                  <div className="circle"></div>
                </div>
              </label>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

    </>
  );
}

export default Header;
