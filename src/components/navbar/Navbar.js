import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center nav__bar p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link
                to="/"
                className="my-0 mr-md-auto font-weight-normal name__logo"
            >
                Luigi Morel
            </Link>
            <nav class="my-2 my-md-0 mr-md-3">
                <Link to="/" className="p-2 text-dark nav__link">
                    Home
                </Link>
                <Link to="/projects" className="p-2 text-dark nav__link">
                    Projects
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
