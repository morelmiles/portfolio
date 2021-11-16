import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projectDetails = [
        {
            id: 1,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1637045471/Screenshot_278_e2gk0y.png',
            altText: 'Recruit Africa',
            heading: 'Recruit Africa',
            descText:
                'Recruit Africa is a web application meant for talent recruitment agency ',
            link: 'https://recruit-it.netlify.app/',
            ghLink: 'https://github.com/morelmiles/recruit-africa',
        },
        {
            id: 2,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1637015429/Screenshot_277_d9o2zl.png',
            altText: 'Executive Study Web',
            heading: 'Executive Study Web',
            descText:
                'Executive Study Web is a website template for an institution of higher learning that can be customized. ',
            link: 'https://exec-study.netlify.app/',
            ghLink: 'https://github.com/morelmiles/study',
        },
        {
            id: 1,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1636038870/Screenshot_267_nxudam.png',
            altText: 'LaslesVPN',
            heading: 'LaslesVPN',
            descText:
                'LaslesVPN is a website template for a hypothetical SaaS company offering VPN services',
            link: 'https://lasleslis.netlify.app/',
            ghLink: 'https://github.com/morelmiles/vpn-landing-page',
        },
        {
            id: 4,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1631787384/Screenshot_2021-09-16_130702_qrzrtk.jpg',
            altText: 'Credit Berkley',
            heading: 'Credit Berkley',
            descText:
                'Credit Berkley is a website template meant for a  fintech product ',
            link: 'https://credit-brekley.netlify.app/',
            ghLink: 'https://github.com/morelmiles/credit-berkley',
        },
        {
            id: 5,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1628839353/localhost_3000__2_bcbfml.png',
            altText: 'Techspaces Uganda',
            heading: 'Techspaces Uganda',
            descText:
                '     Information about the Ugandan tech ecosystem in one place.',
            link: 'https://techspacesuganda.org',
            ghLink: 'https://github.com/morelmiles/techspaces-uganda',
        },
        {
            id: 6,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1622252692/Screenshot_162_blgryx.png',
            altText: 'Solerchil',
            heading: 'Solerchil',
            descText:
                '  Website for a renewable energy startup serving a global market.',
            link: 'https://solerchil.com',
        },
        {
            id: 7,
            imgLink:
                'https://res.cloudinary.com/morelmiles/image/upload/v1622252699/Screenshot_163_kee4wq.png',
            altText: 'Strides of Hope Foundation',
            heading: 'Strides of Hope Foundation',
            descText:
                'The website allows the visitors to register for a course of their choice.',
            link: 'https://sohopefoundation.com',
        },
    ];

    return (
        <>
            <h4 className=" text-center mt-5 mb-3 heading text-dark">
                Projects
            </h4>
            <div className="container">
                <div className="row ">
                    {projectDetails.map((project) => (
                        <div
                            key={project.id}
                            className="col-md-4 project__card  card "
                        >
                            <img
                                src={project.imgLink}
                                alt={project.altText}
                                loading="lazy"
                                className="img-card img-responsive my-1"
                            />
                            <h6 className="text-center heading project__card__header my-1">
                                {project.heading}
                            </h6>
                            <p className="text-center my-1">
                                {project.descText}
                            </p>
                            <div className="card-body text__container  ">
                                <span className="project__text">
                                    <a
                                        href={project.link}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                </span>
                                <span className="hero__icon">
                                    <a
                                        href={project.ghLink}
                                        rel="noreferrer"
                                        loading="lazy"
                                        target="_blank"
                                        className="text-center"
                                    >
                                        {project.ghLink !== undefined ? (
                                            <FaGithub />
                                        ) : (
                                            ''
                                        )}
                                    </a>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
