import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = (props) => {
    const { img, title, description, price, duration } = props;

    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text >
                        {duration}
                    </Card.Text>
                    <Card.Text className="fw-bold">$
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>




    );
};

export default Services;