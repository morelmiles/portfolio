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
    FaEthereum,
    FaReact,
    FaBitcoin,
} from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { index: 1, skill: <FaNodeJs /> },
        { index: 2, skill: <FaReact /> },
        { index: 3, skill: <FaJs /> },
        { index: 4, skill: <FaHtml5 /> },
        { index: 5, skill: <FaEthereum /> },
        { index: 6, skill: <FaBitcoin /> },
        { index: 8, skill: <FaJava /> },
        { index: 9, skill: <FaPhp /> },
        { index: 10, skill: <FaDatabase /> },
        { index: 11, skill: <FaBootstrap /> },
        { index: 12, skill: <FaFigma /> },
        { index: 13, skill: <FaCss3 /> },
    ];
    return (
        <>
            <h4
                className=" text-center my-3
       heading text-dark"
            >
                Technical Tools
            </h4>
            <div className="container ">
                <div className="icon__container">
                    {skills.map((x, index) => (
                        <i className="icon" key={index}>
                            {x.skill}
                        </i>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
