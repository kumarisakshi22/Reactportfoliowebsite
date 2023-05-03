import React from 'react'
import Navbar from "../components/Navbar";
import HeroImage2 from "../components/HeroImage2";
import Footer from "../components/Footer"
import PricingCard from '../components/PricingCard';
const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
      <PricingCard />
      <Footer />



    </div>
  )
}

export default Project
