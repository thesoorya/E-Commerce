import React from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

function NavbarExample() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Wizard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Features</Nav.Link>
                    </Nav>
                    <section className="ms-auto d-flex flex-column flex-lg-row justify-content-center align-items-lg-center">
                        <div className="cart d-flex align-items-center">
                            <FaShoppingCart className='me-4 mb-2 mb-lg-0 cartIcon' />
                        </div>
                        <button className='btn btn-info me-2 mb-2 mb-lg-0'>Login</button>
                        <button className='btn btn-info me-2 mb-2 mb-lg-0'>Sign Up</button>
                    </section>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarExample;