import React from 'react';
import Contact from '../components/contactForm/Contact';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Skills from '../components/skills/Skills';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
