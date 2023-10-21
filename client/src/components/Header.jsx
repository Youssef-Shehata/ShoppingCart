import React, { useContext } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { shoppingCartContext } from "../App";

export const Header = ()=>{
  const [cart] = useContext(shoppingCartContext  )
  return(
    <div>
      <Navbar expand="lg"   data-bs-theme="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
           </Nav>
           <Nav className="me-auto" >
           Items in Cart {cart.length}

           </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

