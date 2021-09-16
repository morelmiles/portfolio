import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projectDetails = [{
            imgLink: 'https://res.cloudinary.com/morelmiles/image/upload/v1628839353/localhost_3000__2_bcbfml.png',
            altText: 'Techspaces Uganda',
            heading: 'Techspaces Uganda',
            descText: '     Information about the Ugandan tech ecosystem in one place.',
            link: 'https://techspacesuganda.org',
            ghLink: 'https://github.com/morelmiles/techspaces-uganda',
        },
        {
            imgLink: 'https://res.cloudinary.com/morelmiles/image/upload/v1622254114/Screenshot_164_ezxyv9.png',
            altText: 'Personal Website',
            heading: 'Personal Website',
            descText: 'Built to boost Luigi Morels personal brand.',
            link: 'https://luigimorel.me',
            ghLink: 'https://github.com/morelmiles/portfolio',
        },

        {
            imgLink: 'https://res.cloudinary.com/morelmiles/image/upload/v1622252692/Screenshot_162_blgryx.png',
            altText: 'Solerchil',
            heading: 'Solerchil',
            descText: '  Website for a renewable energy startup serving a global market.',
            link: 'https://solerchil.com',
        },
        {
            imgLink: 'https://res.cloudinary.com/morelmiles/image/upload/v1622252699/Screenshot_163_kee4wq.png',
            altText: 'Strides of Hope Foundation',
            heading: 'Strides of Hope Foundation',
            descText: 'The website allows the visitors to register for a course of their choice.',
            link: 'https://sohopefoundation.com',
        },
        {
            imgLink: '        https://res.cloudinary.com/morelmiles/image/upload/v1631787384/Screenshot_2021-09-16_130702_qrzrtk.jpg',
            altText: 'Credit Berkley',
            heading: 'Credit Berkley',
            descText: 'Creidt Berkley',
            link: 'https://sohopefoundation.com',
        },
    ];
    return ( <
        >
        <
        h4 className = " text-center my-5 heading text-dark" > Projects < /h4> <
        div className = "container" >
        <
        div className = "row " > {
            projectDetails.map((project) => ( <
                div key = "index"
                className = "col-md-3 project__card  card " >
                <
                img src = { project.imgLink }
                alt = { project.altText }
                loading = "lazy"
                className = "img-card img-responsive my-3" /
                >
                <
                h6 className = "text-center heading project__card__header my-1" > { project.heading } <
                /h6> <
                p className = "text-center my-1" > { project.descText } <
                /p> <
                div className = "card-body text__container  " >
                <
                span className = "project__text" >
                <
                a href = { project.link }
                rel = "noreferrer"
                target = "_blank" >
                <
                FaExternalLinkAlt / >
                <
                /a> <
                /span> <
                span className = "hero__icon" >
                <
                a href = { project.ghLink }
                rel = "noreferrer"
                loading = "lazy"
                target = "_blank"
                className = "text-center" >
                {
                    project.ghLink !== undefined ? ( <
                        FaGithub / >
                    ) : (
                        ''
                    )
                } <
                /a> <
                /span> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        />
    );
};

export default Projects;