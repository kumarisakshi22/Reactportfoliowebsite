import React from 'react'
import Navbar from "../components/Navbar";

import Footer from "../components/Footer"
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT." text="I am Friendly Front-End Developer." />
      <AboutContent/>

      <Footer />

    </div>
  )
}

export default About
