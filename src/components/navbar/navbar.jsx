import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "../cartWidget/cartWidget";

export default function NavbarComponent() {

    function handleOnClick(buttonName) {
        console.log("me hizo click el botón", buttonName);
    }

return (
  <>
    <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home" onClick={() => handleOnClick('Logo')}>Sinnarn</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#products" onClick={() => handleOnClick('Productos')}>Productos</Nav.Link>
      <Nav.Link href="#us" onClick={() => handleOnClick('Nosotros')}>Nosotros</Nav.Link>
      <Nav.Link href="#contactus" onClick={() => handleOnClick('Contacto')}>Contacto</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  </>
  );
}
