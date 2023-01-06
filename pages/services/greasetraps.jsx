import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Manualservice from '../../components/manualservice'
import Gallery from '../../components/gallery'
import Slider from '../../components/slider'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
const greasetraps = () => {
  return (
    <>
    <Head>
      <title>Guzman Septic - Your Trusted Septic Grease Traps Partner</title>
      <meta name="description" content="Keep your plumbing system running smoothly with a grease trap from Septic Service Company. Our grease traps are designed to prevent grease, oils, and other fatty substances from entering your sewage system, helping to prevent blockages and other problems. Contact us today to learn more about our grease trap services."/>
      <meta name="keywords" content="Septic service, Septic tank, Septic installation, Septic repair, Septic maintenance, Septic inspection, Septic cleaning, Septic pumping, Septic system, Septic tank repair, Septic tank maintenance, Septic tank installation, Septic tank pumping, Septic drain field, Septic control panel, Grease trap, High pressure jetting"/>
      <meta name="author" content="Guzman Septics"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Manualservice Title='The Grease trap service in Houston'
    desc1="A grease trap, also known as a grease interceptor, is a plumbing device that is used to prevent grease, oils, and other fatty substances from entering a building's sewage system. These substances can cause blockages and other problems in the sewer pipes, so it is important to prevent them from entering the system."
    desc2="A grease trap is typically installed in the plumbing system of a commercial kitchen or other facility where grease is produced. It is designed to allow wastewater to flow through it, but to trap grease and other fatty substances before they can enter the sewage system."
    desc3="A grease trap consists of a tank that is divided into two chambers. The first chamber is where the wastewater flows in and the grease and other substances are trapped. The second chamber is where the trapped grease and other substances are allowed to cool and solidify. The solidified grease is then removed from the tank by a professional grease trap cleaning service."
    desc4="Grease traps are an important component of a building's plumbing system because they help to prevent blockages and other problems in the sewage system. If you have a commercial kitchen or other facility that produces grease, it is important to have a professional service company clean your grease trap on a regular basis to ensure that it is functioning properly." 
    fImage="/images/cleaning.jpg"/>
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
   
    </>
  )
}

export default greasetraps