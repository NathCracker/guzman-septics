import React, {useRef, useEffect} from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import images from '../components/imagex'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const slider = () => {
  const slideria = useRef(null);
  useEffect(() =>{
    const el = slideria.current;
    gsap.fromTo(el, {y:100, opacity:0}, {y:0, opacity:1, delay:0.2, scrollTrigger:{
      trigger: el
    }});
  })
  return (
    <div className='flex flex-col items-center lg:hidden'>
        <h1 className='font-lobster text-center text-3xl py-5'>GALLERY</h1>
        <div className="slide-container w-11/12" ref={slideria}>
        <Slide >
         {images.map((slideimages, index)=> (
            <div className="each-slide h-full" key={index}>
              <div className='flex items-center justify-center bg-cover w-full h-[500px] lg:h-screen' style={{'backgroundImage': `url(${slideimages.url})`}}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>

  )
}

export default slider