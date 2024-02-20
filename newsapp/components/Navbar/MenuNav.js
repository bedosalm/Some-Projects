import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import { BiDotsHorizontalRounded } from "react-icons/bi";



function MenuNav() {
  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/nfl">NFL</Nav.Link>
            <Nav.Link href="/">NBA</Nav.Link>
            <Nav.Link href="/">MLB</Nav.Link>
            <Nav.Link href="/">NHL</Nav.Link>
            <Nav.Link href="/">NCAAF</Nav.Link>
            <Nav.Link href="/">NCAAB</Nav.Link>
            <Nav.Link href="/">SOCCER</Nav.Link>
            <Nav.Link href="/">BOXING</Nav.Link>
            <Nav.Link href="/">MMA</Nav.Link>
            <NavDropdown title={ <BiDotsHorizontalRounded />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default MenuNav