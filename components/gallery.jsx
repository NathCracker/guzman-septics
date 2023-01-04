import React from 'react'
import Images from './imagex'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const gallery = () => {
    const[selectedImage, setselectedImage] = useState(Images[0]);
    const galleria = useRef(null);

    useEffect(() =>{
      const el = galleria.current;
      gsap.fromTo(el, {y:100, opacity:0}, {y:0, opacity:1, delay:0.2, scrollTrigger:{
        trigger: el
      }})
    }, []);
  return (

  <div ref={galleria} className='flex flex-col max-sm:flex-col max-md:flex-col max-sm:hidden max-md:hidden max-lg:hidden mb-10'>
    <h1 className='text-black text-3xl text-center py-10 font-lobster'>Gallery</h1>
    <div className='flex flex-col justify-center items-center max-h-full'>
        <img className='w-auto h-[500px] object-scale-down border-2 border-black' src={selectedImage.url} alt="" />
        <div className='flex flex-wrap flex-row justify-center items-center '>
            {Images.map((img, index) => (
                <Image 
                 className={'mt-5 my-1 mx-1 w-[100px] h-[100px] cursor-pointer object-cover transition-all ' + (selectedImage === img ? 'scale-110 border-2 border-black': "")}
                 src={img.url} 
                 key={index} 
                 onClick={() => setselectedImage(img)} 
                 alt=""
                 width={100}
                 height={100} />
            ))}
        </div>
    </div>
  </div>
  )
}

export default gallery