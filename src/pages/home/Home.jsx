import React from 'react'
import Hero from './hero/Hero'
import Footer from '../../components/footer/Footer'
import Waste from './waste/waste'
import Service from './personalizedservices/Service'
import Feature from './feature/Feature'
import Harvester from './harvester/Harvester'
import CaseStudy from './case/CaseStudy'
import Power from './power/Power'

const Home = () => {
  return (
    <>
        <Hero/>
        <Waste/>
        <Service/>
        <Feature/>
        <Harvester/>
        <CaseStudy/>
        <Power/>
        <Footer/>
    </>
  )
}

export default Home