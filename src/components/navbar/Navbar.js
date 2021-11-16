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
                <Link to="/" className="p-4 text-dark nav__link">
                    Who I Am
                </Link>
                <a
                    href="https://drive.google.com/file/d/1zi2nXQLiauCgjo7NFlYvX-giFn-Kv7Qi/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopenner"
                    download
                    className="p-4 text-dark nav__link"
                >
                    Resume
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
