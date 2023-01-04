import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Slider from '../../components/slider'
import Gallery from '../../components/gallery'
import Manualservice from '../../components/manualservice'
const Cleaning = () => {
  return (
   <>
    <Manualservice Title='The Best Septic Cleaning Service' 
    desc1='Septic cleaning, also known as septic tank pumping, is the process of removing solids 
    and other accumulated debris from a septic tank. It is an important part of maintaining a septic system and preventing it from malfunctioning.' 
    desc2='A septic tank is a buried, water-tight container that stores wastewater from a home or business. The tank is designed to allow solids to settle to the bottom, while liquids and gases flow out to the drain field. Over time, however, solids can build up in the tank, reducing its efficiency and potentially causing it to overflow or fail' 
    desc3='Septic cleaning involves using a specialized truck to pump out the solids and liquids from the septic tank. The process typically takes a few hours to complete, and the tank should be cleaned every three to five years, depending on its size and the amount of wastewater it receives.'
    desc4='Cleaning a septic tank can help prevent costly repairs and extend the life of the system. It is also important for maintaining proper functioning of the septic system and protecting the environment by preventing sewage overflow. If you are unsure of when your septic tank was last cleaned or if it needs to be cleaned, it is a good idea to have a professional septic service company assess your system.' />
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
   </>
  )
}

export default Cleaning
