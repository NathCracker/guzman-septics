import {gsap} from 'gsap';
import React, {useRef, useEffect} from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const header = () => {
  const headering = useRef(null);
  useEffect(() =>{
    const el = headering.current;
    gsap.fromTo(el, {y: 50, opacity:0},{ y:0, opacity: 1, scrollTrigger:{
      trigger: el
    }});
  })
  return (
    <div className=' text-center font-lobster tracking-widest' lang='en'>
      <div className='max-w-full min-h-screen flex items-center justify-center '>
        <div className='w-full h-full object-cover absolute bg-guzmans-bg bg-fixed bg-cover brightness-50' alt="Picture of our trucks" ></div>
        <h1 ref={headering} className=' font-thin opacity-0 max-sm:text-center max-md:text-center text-5xl text-white'>Best Septic Service in Houston, Texas</h1>
      </div>
    </div>
  )
}

export default header
