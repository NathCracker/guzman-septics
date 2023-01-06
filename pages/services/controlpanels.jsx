import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Manualservice from '../../components/manualservice'
import Gallery from '../../components/gallery'
import Slider from '../../components/slider'
import Head from 'next/head'

const controlpanels = () => {
  return (
    <>
    <Head>
      <title>Guzman Septic - Your Trusted Septic Partner</title>
      <meta name="description" content="Ensure the proper functioning of your septic system with a septic control panel from Septic Service Company. Our control panels are designed to monitor the level of wastewater in your septic tank and control the pumps and other components of your system. Contact us today to learn more about our septic control panels"/>
      <meta name="keywords" content="Septic service, Septic tank, Septic installation, Septic repair, Septic maintenance, Septic inspection, Septic cleaning, Septic pumping, Septic system, Septic tank repair, Septic tank maintenance, Septic tank installation, Septic tank pumping, Septic drain field, Septic control panel, Grease trap, High pressure jetting"/>
      <meta name="author" content="Guzman Septics"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Manualservice Title='The Best Control Panels' 
    desc1='Septic control panels are devices that are used to monitor and control the operation of a septic system. They are typically installed in the electrical panel of a home or business and are used to monitor the level of wastewater in the septic tank and control the pumps and other components of the system.'
    desc2='A septic control panel typically consists of a float switch, a control panel, and a pump. The float switch is a device that is installed in the septic tank and is used to detect the level of wastewater in the tank. When the wastewater reaches a certain level, the float switch sends a signal to the control panel, which in turn activates the pump to remove the wastewater from the tank.'
    desc3='Septic control panels are an important component of a septic system because they help to prevent overflow and other problems that can occur if the tank becomes full. They also help to ensure that the system is operating efficiently and effectively. '
    desc4='If you have a septic system, it is a good idea to have a professional septic service company check your control panel on a regular basis to make sure it is working properly. This can help to prevent problems with your septic system and ensure that it is functioning optimally.' 
    fImage="/images/image6.jpg"/>
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
   </>
  )
}

export default controlpanels