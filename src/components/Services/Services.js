import { Card, Col } from 'react-bootstrap';

const Services = (props) => {
    const { img, title, description, price, duration } = props;

    return (

        <Col>
            <Card style={{ height: "500px" }}>
                <Card.Img style={{ height: "250px" }} variant="top" src={img} />
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