import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Success = () => {
    return (
        <>
            <Navbar />

            <div className="container success__text ">
                <h5 className="text-center heading  ">
                    Message sent successfully...
                </h5>
                <p className="text-center text__para">
                    Thanks for reaching out. Luigi Morel will get in touch soon.
                </p>
            </div>
            <Link to="/">
                <button type="submit" className="btnSubmit mt-3 mb-3 btn">
                    Go Back Home
                </button>
            </Link>
        </>
    );
};

export default Success;
