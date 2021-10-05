import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import CardData from '../CardData/CardData';



const Home = () => {
    const [data, setData] = useState([]);



    useEffect(() => {

        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])

    return (
        <div>

            <Banner></Banner>
            <div className="m-5">
                <h2 className="my-5 fw-bold">Courses</h2>
                <Row xs={1} md={4} className="g-5">


                    {
                        data?.slice(0, 4).map(d => <CardData

                            key={d.id}
                            img={d.img}
                            description={d.description}
                            title={d.title}
                            price={d.price}
                            duration={d.duration}
                        ></CardData>

                        )
                    }

                </Row>
            </div>

        </div>
    );
};

export default Home;