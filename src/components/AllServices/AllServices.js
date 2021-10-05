import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import Services from '../Services/Services';

const AllServices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data));


    }, [])
    return (

        <div >
            <div>
                <Menubar></Menubar>

            </div>

            <Row xs={1} md={3} className="g-4 m-3 mx-5">
                {
                    data?.map(d => <Services
                        key={d.id}
                        img={d.img}
                        title={d.title}
                        description={d.description}
                        duration={d.duration}
                        price={d.price}

                    > </Services>)
                }
            </Row>



        </div>
    );
};

export default AllServices;
