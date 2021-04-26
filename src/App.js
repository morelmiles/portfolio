import React from "react";
import { Switch , Route} from "react-router";
import ContactForm from "./components/contactForm/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>                
      <Navbar />
      <Hero />
      <Skills />
      <ContactForm />
      <Footer/>
    </>
  )
}

export default App;;
