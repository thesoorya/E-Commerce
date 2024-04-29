import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Items.css';

const Items = ({ image, name, newPrice, oldPrice }) => {
    return (
        <Col lg={3} md={6} xs={12}>
            <article className="item d-flex flex-column align-items-center align-items-md-start">
                <Card className='cardBox'>
                    <Card.Img variant="top" src={image} className="img-fluid" alt={name} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>{name}</Card.Title>
                        <div className="d-flex flex-wrap">
                            <Card.Text className='mx-1 cardTitle'>₹{newPrice}</Card.Text>
                            <Card.Text className='mx-1 cardTitle'>₹{oldPrice}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    );
};

export default Items;