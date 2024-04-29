import React from 'react';
import './Popular.css';
import { Col, Container, Row } from 'react-bootstrap';
import dataProducts from '../../components/assets/data';
import Items from '../Items/Items';

const Popular = () => {
    return (
        <Container>
            <article className='popular mt-5 d-flex flex-column justify-content-center'>
                <h1 className='text-center'>Popular in Women</h1>
                <hr />
                <Row className='g-3'>
                    {dataProducts.map((data, i) => (
                        <Items
                            key={i}
                            id={data.id}
                            name={data.name}
                            image={data.image}
                            newPrice={data.new_price}
                            oldPrice={data.old_price}
                        />
                    ))}
                </Row>
            </article>
        </Container>
    );
};

export default Popular;