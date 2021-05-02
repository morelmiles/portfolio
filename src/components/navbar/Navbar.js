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

            <nav class="ml-5" id="navBarResponsive">
                <Link to="/" className="p-5 text-dark nav__link">
                    Home
                </Link>
                <Link to="/porfolio" className="p-5 text-dark nav__link">
                    Resume
                </Link>
                <Link to="/blog" className="p-5 text-dark nav__link">
                    Blog
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
