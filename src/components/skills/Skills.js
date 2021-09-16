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
    FaDocker,
} from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { id: 1, skill: <FaDocker /> },
        { id: 2, skill: <FaReact /> },
        { id: 3, skill: <FaJs /> },
        { id: 4, skill: <FaHtml5 /> },
        { id: 5, skill: <FaEthereum /> },
        { id: 6, skill: <FaBitcoin /> },
        { id: 8, skill: <FaJava /> },
        { id: 9, skill: <FaPhp /> },
        { id: 10, skill: <FaDatabase /> },
        { id: 11, skill: <FaBootstrap /> },
        { id: 12, skill: <FaFigma /> },
        { id: 13, skill: <FaCss3 /> },
        { id: 14, skill: <FaNodeJs /> },
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
                    {skills.map((x, id) => (
                        <i className="icon" key={id}>
                            {x.skill}
                        </i>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
