import React from 'react';
import Contact from '../components/contactForm/Contact';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';

const HomePage = () => (
    <div style={{ margin: '15px' }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
);

export default HomePage;
