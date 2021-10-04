import React from 'react';
import img from '../../image/Logo.png'

const Footer = () => {
    return (
        <div className="bg-dark px-5 pt-5 pb-1">
            <div className="mb-5">
                <img className="rounded" src={img} alt="logo" />
            </div>
            <p className="text-white"> &copy; All Right Reserved</p>

        </div>
    );
};

export default Footer;