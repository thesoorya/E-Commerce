import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <p>Company Name</p>
                        <p>123 Main Street, City</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: 123-456-7890</p>
                    </Col>
                    <Col md={6}>
                        <p>Follow Us</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Facebook</a></li>
                            <li className="list-inline-item"><a href="#">Twitter</a></li>
                            <li className="list-inline-item"><a href="#">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;