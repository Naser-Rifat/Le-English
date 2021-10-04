import React from 'react';
import Menubar from '../Menubar/Menubar';
import './banner.css'


const Banner = () => {
    return (
        <div className="banner-container">

            <div className="">
                <div className="row d-flex banner py-1 justify-content-center">
                    <Menubar></Menubar>
                    <div className="col-md-6">
                        <h1 className="title">
                            ENGLISH AS A  <br /> SECOND LANGUAGE
                        </h1>
                        <p className="text-white text-center mt-3">
                            Knowledge is of no value unless you put it into practice.
                            <br />
                            -Anton Chekhov
                        </p>
                        <button className="mt-3 about-btn rounded fw-bold">Purchase Course</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;