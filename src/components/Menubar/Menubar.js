import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubar.css';
import img from '../../image/Logo.png'


const Menubar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img className="w-75" src="" alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">

                                {/*-------navigation------- */}
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/allservices" className="items">
                                    <li>Courses</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About us</li>
                                </Link>
                                <Link to="support" className="items">
                                    <li>Support</li>
                                </Link>
                                <img className="rounded" src={img} alt="" />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;