import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <h4
                className=" text-center my-5
       heading text-dark"
            >
                Projects
            </h4>
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 project__card  card ">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1622252692/Screenshot_162_blgryx.png"
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />

                        <div className="card-body text__container  ">
                            <span className="project__text">
                                <a
                                    href="https://solerchil.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Project
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card ">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1622252699/Screenshot_163_kee4wq.png"
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />

                        <div className="card-body text__container  ">
                            <span className="project__text">
                                <a
                                    href="https://sohopefoundation.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Project
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card ">
                        <img
                            src="https://res.cloudinary.com/morelmiles/image/upload/v1622254114/Screenshot_164_ezxyv9.png"
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />

                        <div className="card-body text__container  ">
                            <span className="project__text">
                                <a
                                    href="https://github.com/morelmiles/portfolio"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Live Project
                                </a>
                            </span>
                            <span className="hero__icon">
                                <Link>
                                    <FaGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
