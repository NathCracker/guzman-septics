import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Manualservice from '../../components/manualservice'
import Gallery from '../../components/gallery'
import Slider from '../../components/slider'
const pumping = () => {
  return (
    <>
    <Manualservice Title='The Best Septic Tank Repair Services'
    desc1="Septic tank repair is the process of fixing or repairing a septic tank that is damaged or not functioning properly. A septic tank is a buried, water-tight container that stores wastewater from a home or business. It is designed to allow solids to settle to the bottom, while liquids and gases flow out to the drain field."
    desc2="Septic tank repair may be necessary for a variety of reasons, including damage to the tank due to age or corrosion, blockages or leaks in the tank or drain field, or problems with the pump or other components of the system."
    desc3="Septic tank repair typically involves identifying the cause of the problem and then taking the necessary steps to fix it. This may involve repairing or replacing damaged parts of the tank, cleaning out blockages, or fixing leaks."
    desc4="Septic tank repair is an important part of maintaining a septic system and ensuring that it is functioning properly. If you suspect that you have a problem with your septic tank, it is important to have it assessed and repaired as soon as possible to prevent further damage and costly repairs." 
    fImage="/images/images8.jpg" />
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
    </>
  )
}

export default pumping