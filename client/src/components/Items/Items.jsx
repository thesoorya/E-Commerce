import React from 'react';
import { Col } from 'react-bootstrap';
import './Items.css';

const Items = ({ image, name, newPrice, oldPrice }) => {
    return (
        <Col lg={3} md={6} xs={12}>
            <article className="item d-flex flex-column align-items-center align-items-md-start">
                <div className="imgContainer">
                    <img src={image} className='img-fluid itemsImage' alt={name} />
                </div>
                <p>{name}</p>
                <section className="itemPrices d-flex">
                    <div className="newPrice me-2">₹{newPrice}</div>
                    <div className="oldPrice me-2">₹{oldPrice}</div>
                </section>
            </article>
        </Col>
    );
};

export default Items;