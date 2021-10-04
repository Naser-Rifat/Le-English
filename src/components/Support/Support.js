import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Support.css'

const Support = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className="bg-img">
                <h1 className="p-5 fw-bold text-white">Welcome to the support</h1>
                <h3 className="pb-5 text-white"> Help Line:0XXXXX22</h3>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Support;