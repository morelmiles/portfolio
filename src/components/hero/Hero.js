import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import heroImg from '../../assets/img/hero-img.jpg';

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
                    <h5 className="heading hero__heading">Luigi Morel </h5>
                    <p className="hero__para">
                        I'm a Software Engineer and a digital normad who has
                        worked with corporate companies and non-profits.
                    </p>
                    <p className="hero__para">
                        I'm passionate about coding best practices, start-ups,
                        product design and a firm believer in the potential of
                        the crypto-currency revolution.
                    </p>
                    <p className="hero__para">
                        When I'm not writing software, I'm reading and engaging
                        in deep talks about technologies and markets or
                        prototyping a new product idea that hit my mind a few
                        seconds ago.
                    </p>
                    <div className=" icons__container mb-3">
                        <i className="hero__icons mx-3">
                            <a
                                href="https://github.com/morelmiles"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                        </i>
                        <i className="hero__icons mx-3">
                            <a
                                href="https://www.linkedin.com/in/luigimorel/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                        </i>
                        <i className="hero__icons mx-3">
                            <a
                                href="https://twitter.com/LuigiMorel_/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
