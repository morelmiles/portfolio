import React from 'react';

import heroImg from '../../assets/img/hero-img.jpg';

import { FaGithub, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
    return (
        <div className="container">
            <div className="row hero__container">
                <div className="col-md-6    ">
                    <img
                        className="img-responsive hero__img"
                        src={heroImg}
                        loading="lazy"
                        srcSet
                        alt="Luigi Morel speaking at a conference "
                    />
                </div>
                <div className="col-md-5">
                    <h5 className="heading hero__heading">
                        Turning business processes into code
                    </h5>
                    <p className="hero__para">
                        Sed mauris congue et ut sit scelerisque tristique
                        ultricies ac viverra aliquet eget non auctor aenean
                        vitae, lacus turpis cursus quis venenatis mollis
                        phasellus faucibus velit, orci integer blandit nisl
                        habitant proin habitant v olutpat mauris, neque, et,
                        lectus in mi
                    </p>
                    <div className=" icons__container mb-3">
                        <i className="hero__icons mx-3">
                            <FaGithub />
                        </i>
                        <i className="hero__icons mx-3">
                            <FaDribbble />
                            <i className="hero__icons mx-3">
                                <FaLinkedin />
                            </i>
                            <i className="hero__icons mx-3">
                                <FaTwitter />
                            </i>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
