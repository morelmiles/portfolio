import React from 'react';
const Footer = () => {
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <div className="container footer__container">
            <div className="text-center my-5 footer">
                &copy; Luigi Morel {getYear}
            </div>
        
        </div>
    );
};

export default Footer;
