import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './EmailBox.css'

function EmailBox() {

    const styles = {
        width: '100%'
    }

    return (
        <main className='mt-5'>
            <h1 className='text-center'>Subscribe, Stay updated!.</h1>
            <Container className='d-flex justify-content-center'>
                <Row>
                    <Col lg={8} md={10} xs={12} style={styles}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col>
                        <button className='btn btn-danger text-light' style={styles}>Submit</button>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default EmailBox;