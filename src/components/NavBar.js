import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavbarForm from './NavbarForm';
import { Container, Navbar} from 'react-bootstrap';


const NavBar = () => {

  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Spring Stock Watch</Navbar.Brand>
        <NavbarForm />
      </Container>
    </Navbar>
    
  )
}

export default NavBar;
