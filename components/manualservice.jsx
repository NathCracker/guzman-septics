import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const manualservice = ({Title, desc1,desc2,desc3,desc4}) => {
  const titleAbove = useRef(null);
  const picLeft = useRef(null);
  const description = useRef(null);

  useEffect(() =>{
    const el = titleAbove.current;
    const el1 = picLeft.current;
    const el2 = description.current;
    gsap.fromTo(el, {x:-100, opacity:0}, {x:0, opacity:1, delay:0.3, scrollTrigger:{
      trigger: el
    }})
    gsap.fromTo(el1, {y:100, opacity:0}, {y:0, opacity:1, delay:0.3, scrollTrigger:{
      trigger: el1
    }})
    gsap.fromTo(el2, {x:100, opacity:0}, {x:0, opacity:1, delay:0.3, scrollTrigger:{
      trigger: el2
    }})
  })
  return (
    <>
    <div className='font-lobster tracking-widest' lang='en'>
    <div className='max-w-full min-h-screen flex items-center justify-center bg-gradient-to-tl  from-black to-gray-500'>
      <div className='w-full h-full object-cover absolute mix-blend-overlay bg-septic-cleaning bg-fixed bg-cover' alt="Picture of our trucks" ></div>
      <h1 className=' max-sm:text-4xl max-sm:text-center text-5xl text-white'>{Title}</h1>
    </div>
  </div>
    <div id='services' className='font-custom flex flex-col text-center justify-center items-center gap-10 max-sm:flex-col max-md:flex-col max-lg:flex-col'>
      <div className=' flex flex-col w-4/12 items-center justify-start max-sm:w-10/12 max-md:w-10/12 max-lg:w-10/12 lg:w-5/12'>
        <h1 ref={titleAbove} className=' font-lobster py-5 text-3xl max-sm:text-2xl'>{Title}</h1>
        <img ref={picLeft} className='px-3 max-sm:w-full max-sm:h-full max-md:h-full max-md:w-full max-lg:h-full max-lg:w-full w-full h-full' src="/images/septictanks.jpg" alt="" />
      </div>
      <div ref={description} className=' flex flex-col justify-start items-start lg:w-6/12 max-sm:w-10/12 max-sm:gap-5 max-md:w-10/12 max-lg:w-10/12 gap-5'>
        <p className=' text-justify w-full text-xl max-sm:text-lg'>{desc1}</p>
        <p className=' text-justify w-full text-xl max-sm:text-lg'>{desc2}</p>
        <p className=' text-justify w-full text-xl max-sm:text-lg'>{desc3}</p>
        <p className=' text-justify w-full text-xl max-sm:text-lg'>{desc4}</p>
      </div>  
    </div>
    </>
  )
}

export default manualservice
