import React, { useContext } from 'react';
import { Navbar as ReactBootstrapNavbar } from 'react-bootstrap';

import AuthContext from './../../contexts/AuthContext';
import NavbarLogin from './../NavbarLogin';
import NavbarProfile from './../NavbarProfile';

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <ReactBootstrapNavbar
      className="mt-3 mb-3"
      bg="light"
      expand="lg"
    >
      <ReactBootstrapNavbar.Brand href="#home">
        Neto Social
      </ReactBootstrapNavbar.Brand>
      <ReactBootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrapNavbar.Collapse
        className="justify-content-end"
        id="basic-navbar-nav"
      >
        {!isLoggedIn ? (
          <NavbarLogin />
        ) : (
          <NavbarProfile />
        )}
      </ReactBootstrapNavbar.Collapse>
    </ReactBootstrapNavbar>
  );
}

export default Navbar;
