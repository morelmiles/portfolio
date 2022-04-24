import React from 'react'

// Components
import Contact from '../components/contactForm/Contact'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/projects/Projects'

const HomePage = () => (
  <div style={{ margin: '15px' }}>
    <Navbar />

    <div className="hero-section">
      <Hero />
    </div>

    <Projects />

    <Contact />

    <Footer />
  </div>
)

export default HomePage
