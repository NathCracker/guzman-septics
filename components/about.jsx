import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import {IoLocationSharp} from 'react-icons/io5'
import {Link as Links} from 'react-scroll'
gsap.registerPlugin(ScrollTrigger);
const about = () => {
  const title = useRef(null);
  const description = useRef(null);
  const map = useRef(null);
  const location = useRef(null);
  useEffect(() => {
    const el = title.current;
    const el2 = description.current;
    const el3 = map.current;
    const el4 = location.current;
    gsap.utils.toArray('.offer').forEach(offers =>{
      gsap.fromTo(offers, {x:-100, opacity:0}, {x:0, opacity: 1, scrollTrigger:{
        trigger:offers,
        delay: ScrollTrigger.isInViewport(offers) ? 1 : 0,
      }})
    })
    gsap.fromTo(el, {x: -100, opacity:0}, {x:0, opacity: 1, scrollTrigger:{
      trigger: el
    }});
    gsap.fromTo(el2, {x: -100, opacity:0}, {x:0, delay:0.5, opacity: 1, scrollTrigger:{
      trigger: el2
    }});
    gsap.fromTo(el3, {y:100, opacity: 0}, {y:0, delay: 0.5, opacity:1 , scrollTrigger:{
      trigger: el3
    }});
    gsap.fromTo(el4, { opacity: 0}, { opacity:1 , scrollTrigger:{
      trigger: el4
    }});
  })
  return (
    <div className='flex flex-row justify-around w-full' lang='en'>
      <div className=' w-4/5 bg-white font-custom flex justify-around snap-y  snap-mandatory max-sm:flex-col max-md: flex-wrap' id='about'>
          <div className='text-center flex flex-col items-center snap-start max-sm:mb-10 gap-10'>
              <h1 ref={title} className='text-3xl py-5 font-lobster'>About us</h1>
              <div className='flex flex-row justify-between items-center gap-16'>
                <div className='offer'>
                  {/*<a href="https://www.flaticon.com/free-icons/residential" title="residential icons">Residential icons created by nawicon - Flaticon</a>
                  <a href="https://www.flaticon.com/free-icons/urban" title="urban icons">Urban icons created by Freepik - Flaticon</a>*/}

                  <img src="/images/ico/house.png" alt="Residential" className='max-h-28' />
                  <h2>Residential</h2>
                </div>

                <div className='offer'>
                  <img src="/images/ico/skyline.png" alt="Commercial" className='max-h-28' />
                  <h2 className=''>Commercial</h2>
                </div>
              </div>
              <div ref={description} className='max-w-lg text-justify max-sm:w-11/12 max-md:w-full '>
                  <p className='my-2'>Welcome to Guzman Septic Service LLC, where we have been providing top-quality septic <Links  href="#"
                    activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className='text-blue-600 font-bold'>services</Links> to our community for over 20 years. Our team is dedicated to delivering exceptional service and reliable solutions to all of your septic needs. </p>
                    <p className='my-2'>Our team of experienced technicians are skilled in a wide range of septic services, including installation, repair, maintenance, and inspections. We pride ourselves on using only the highest quality materials and the latest technologies to ensure that your septic system is running smoothly and efficiently.</p>
                    <p className=' max-sm:mb-10 max-md:mb-10 max-lg:mb-10'>In addition to our excellent service, we are also committed to being environmentally friendly. We use eco-friendly products and practices to minimize our impact on the environment and help preserve natural resources. Thank you for considering us for your septic service needs. We look forward to serving you and your community.</p>
              </div>
          </div>
          <div  ref={map} className=' flex flex-col justify-center max-sm:text-center max-sm:w-full max-md:w-full max-lg:w-[600px] my-0'>
            <p className='font-lobster text-3xl text-center max-sm:hidden max-md:hidden py-12'>Location</p>
            <iframe  title='mapFrame' className='lg:hidden  py-2 max-sm:w-full' width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=%2017914%20E%20Hardy%20Rd,%20North%20Houston,%20TX,%20United%20States,%20Texas&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            <div className='flex flex-row text-center justify-center items-center my-5'>
              <IoLocationSharp className='text-2xl -translate-y-2 max-sm:-translate-y-6' />
              <p className='text-xl max-sm:pb-10 max-sm:text-xl'> 17914 E Hardy Rd, Houston, TX 77073, USA</p>
            </div> 
           <iframe  title='mapFrame' className='max-sm:hidden max-md:hidden max-lg:hidden max-sm:w-full' width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=%2017914%20E%20Hardy%20Rd,%20North%20Houston,%20TX,%20United%20States,%20Texas&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
      </div>
    </div>
  )
}

export default about