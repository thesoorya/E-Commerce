import React from 'react'
import newCollection from '../../components/assets/new_collections';
import { Col, Container, Row } from 'react-bootstrap';
import Items from '../Items/Items';
import './NewCollection.css'

const NewCollection = () => {
    return (
        <Container>
            <article className='popular mt-5 d-flex flex-column justify-content-center'>
                <h1 className='text-center'>New Collection</h1>
                <hr />
                <Row className='g-3'>
                    {newCollection.map((data, i) => (
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
    )
}

export default NewCollection