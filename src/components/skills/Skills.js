import React from 'react';
import {
    FaBootstrap,
    FaCss3,
    FaDatabase,
    FaFigma,
    FaHtml5,
    FaJava,
    FaJs,
    FaNodeJs,
    FaPhp,
    FaReact,
} from 'react-icons/fa';

const Skills = () => {
    return (
        <>
            <h4
                className=" text-center my-3
       heading text-dark"
            >
                Technical Skills
            </h4>
            <div className="container ">
                <div className="icon__container">
                    <i className="icon">
                        <FaNodeJs />
                    </i>
                    <i className="icon">
                        <FaReact />
                    </i>
                    <i className="icon">
                        <FaJs />
                    </i>

                    <i className="icon">
                        <FaHtml5 />
                    </i>
                    <i className="icon">
                        <FaCss3 />
                    </i>
                    <i className="icon">
                        <FaJava />
                    </i>

                    <i className="icon">
                        <FaPhp />
                    </i>
                    <i className="icon">
                        <FaFigma />
                    </i>
                    <i className="icon">
                        <FaDatabase />
                    </i>
                    <i className="icon">
                        <FaBootstrap />
                    </i>
                </div>
            </div>
        </>
    );
};

export default Skills;
