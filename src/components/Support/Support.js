import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import './Support.css'

const Support = () => {
    return (
        <div>
            <Menubar></Menubar>

            <div className="contact2 style1" id="contact">

                <h1 className="p-5 fw-bold text-white">Welcome to the support</h1>
                <h3 className="pb-5 text-white"> Help-Line:</h3>

                <div className="container">

                    <div>
                        <div className="row contact-container">
                            <div className="col-lg-12">
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="contact-box p-4">
                                                <h4 className="title">Contact Us</h4>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group mt-3">
                                                                <input className="form-control" type="text" placeholder="name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group mt-3">
                                                                <input className="form-control" type="text" placeholder="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group mt-3">
                                                                <input className="form-control" type="text" placeholder="phone" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group mt-3">
                                                                <input className="form-control" type="text" placeholder="location" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group mt-3">
                                                                <input className="form-control" type="text" placeholder="message" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit" className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"><span> SUBMIT NOW <i className="ti-arrow-right"></i></span></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-image style2">
                                            <div className="detail-box p-4">
                                                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                                                <p className="text-white op-7">601 Gulshan Ave.
                                                    <br /> San Baridhara</p>
                                                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                                                <p className="text-white op-7">251 546 9442
                                                    <br /> 630 446 8851</p>
                                                <div className="round-social light">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Support;