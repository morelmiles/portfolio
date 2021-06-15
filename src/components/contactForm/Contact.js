import React from 'react';

function Contact() {
    return (
        <>
            <h4
                className=" text-center mt-5
       heading text-dark"
            >
                Contact Me
            </h4>

            <p className="text-center contact__para">
                Want us to collaborate on a project? <br />
                Get in touch.
            </p>
            <p className="text-center">
                WhatsApp me on {'  '}
                <a href="tel:+256 704 916 696">+256 704 916 696</a> <br />
                Or email me on{' '}
                <a href="mailto:morelmiles@gmail.com">
                    morelmiles[at]gmail[dot]com
                </a>
            </p>
        </>
    );
}

export default Contact;
