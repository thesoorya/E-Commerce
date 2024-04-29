import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";

function NavbarExample() {

    const styles = {
        textDecoration: 'none'
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to={'/'} style={styles}><Navbar.Brand>Wizard</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        <Nav.Link as={Link} to={'/collections'}>Collections</Nav.Link>
                    </Nav>
                    <section className="ms-auto d-flex flex-column flex-lg-row justify-content-center align-items-lg-center">
                        <Link to={'/cart'}>
                            <div className="cart d-flex align-items-center">
                                <FaShoppingCart className='me-4 mb-2 mb-lg-0 cartIcon' />
                            </div>
                        </Link>
                        <Link to={'/login'}><button style={{ width: '100px' }} className='btn btn-info me-2 mb-2 mb-lg-0'>Login</button></Link>
                        <Link to={'/register'}><button style={{ width: '100px' }} className='btn btn-info me-2 mb-2 mb-lg-0'>Sign Up</button></Link>
                    </section>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarExample;