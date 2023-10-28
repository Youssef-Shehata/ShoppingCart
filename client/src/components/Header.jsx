import React, { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export const Header = ()=>{
  return(
    <div>
      <Navbar expand="lg" mb="2px"  data-bs-theme="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/products"}>
            Home
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link  to={"/Cart"}>
            Cart
          </Link>
           </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

