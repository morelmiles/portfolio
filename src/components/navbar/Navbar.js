import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center nav__bar p-3 px-md-4 mb-3 ">
            <Link
                to="/"
                className="my-0 mr-md-auto font-weight-normal name__logo"
            >
                Luigi Morel
            </Link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navBarResponsive"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <nav class="my-2 my-md-0 mr-md-3" id="navBarResponsive">
                <Link to="/" className="p-2 text-dark nav__link">
                    Home
                </Link>
                <Link to="/porfolio" className="p-2 text-dark nav__link">
                    Resume
                </Link>
                <Link to="/blog" className="p-2 text-dark nav__link">
                    Blog
                </Link>
                <Link to="" className="p-2 text-dark nav__link">
                    Contact
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
