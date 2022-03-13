import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "../cartWidget/cartWidget";
import { Link } from 'react-router-dom';

export default function NavbarComponent() {

return (
  <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
          <Link to="/"> 
            <Navbar.Brand> Sinnarn </Navbar.Brand>
          </Link>
        <Nav className="me-auto">
          <Nav.Link>
          <Link to="category/dados"> Dados </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="category/manuales"> Manuales </Link>
          </Nav.Link>
        </Nav>
        <Link to="cart"> <CartWidget /> </Link>
      </Container>
    </Navbar>
  </>
  );
}
