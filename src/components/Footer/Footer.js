import React from 'react';
import img from '../../image/Logo.png';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <div>


            <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4 bg-dark px-5 pt-5 pb-1">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <img className="text-center rounded" src={img} alt="" />
                            <h5 className=" text-white text-uppercase mb-4 mt-3 font-weight-bold">
                                Content
                            </h5>
                            <p className="text-white">
                                English grammar courses are offered at beginning level to new speakers of English; at the advanced level, grammar courses are designed for native and fluent speakers studying English
                            </p>


                        </MDBCol>
                        <MDBCol className="text-white text-decoration-none" md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Support
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Help</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Community</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Advisories</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Status</Link>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol className="text-white text-decoration-none" md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Company
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">About</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Course</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Press</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Blog</Link>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol className="text-white text-decoration-none" md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                Terms & Policies
                            </h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Code of Conduct</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Privacy</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Policies</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-decoration-none" to="#!">Help</Link>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div className="footer-copyright text-white text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright Reserved
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>


    );
};

export default Footer;