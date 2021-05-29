import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center nav__bar p-3 px-md-1  mb-3 ">
            <Link
                to="/"
                className="my-0 mr-md-auto font-weight-normal name__logo"
            >
                Luigi Morel
            </Link>

            <nav class="mx-auto" id="navBarResponsive">
                <Link to="/" className="p-3 text-dark nav__link">
                    Home
                </Link>
                <Link
                    to="https://drive.google.com/file/d/1Fn5n1XD7VgfIOeM3mORg_a9pN-Jym3O6/view?usp=sharing"
                    className="p-3 text-dark nav__link"
                    target="_blank"
                    noreferrer
                >
                    Resume
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
