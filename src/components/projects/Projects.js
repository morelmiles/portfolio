import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../assets/img/solerchil.webp';

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
                            src={img}
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />

                        <div className="card-body text__container  ">
                            <span className="project__text">
                                <Link>Live Project</Link>
                            </span>
                            <span className="hero__icon">
                                <Link>
                                    <FaGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card ">
                        <img
                            src={img}
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />

                        <div className="card-body text__container  ">
                            <span className="project__text">
                                <Link>Live Project</Link>
                            </span>
                            <span className="hero__icon">
                                <Link>
                                    <FaGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card ">
                        <img
                            src={img}
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />

                        <div className="card-body text__container  ">
                            <span className="project__text">
                                <Link>Live Project</Link>
                            </span>
                            <span className="hero__icon">
                                <Link>
                                    <FaGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card">
                        <img
                            src={img}
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />
                        <div className="card-body text__container ">
                            <span className="project__text">
                                <Link>Live Project</Link>
                            </span>
                            <span className="project-icon">
                                <Link>
                                    <FaGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card">
                        <img
                            src={img}
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />
                        <div className="card-body text__container ">
                            <span className="project__text">
                                <Link>Live Project</Link>
                            </span>
                            <span className="project-icon">
                                <Link>
                                    <FaGithub />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3 project__card  card">
                        <img
                            src={img}
                            alt="Completed project"
                            className="img-card img-responsive my-3"
                        />
                        <div className="card-body text__container ">
                            <span className="project__text">
                                <Link>Live Project</Link>
                            </span>
                            <span className="project-icon">
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
