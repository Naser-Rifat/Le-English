import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CardData = (props) => {

    const { title, img, description, price, duration } = props;
    return (
        <Col>
            <Card style={{ height: "500px" }}>
                <Card.Img style={{ height: "180px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {duration}
                    </Card.Text>
                    <Card.Text className="fw-bold"> $
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

export default CardData;