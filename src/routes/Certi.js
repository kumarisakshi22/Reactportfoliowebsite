import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'
import Cert from '../components/Cert'


const Certi = () => {
    return (
        <div>
            <Navbar />
            <HeroImage2 heading="CERTIFICATES." text="My Certificates" />
            <Cert />
            <Footer />

        </div>
    )
}

export default Certi;
