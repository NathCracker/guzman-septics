import React from 'react';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import offertable from './serviceoffers';
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const services = () => {
  const h1Text = useRef(null);
  useEffect(() => {
    const el = h1Text.current;
    const cards = gsap.utils.toArray('.cards');
    cards.forEach(card => {
      gsap.fromTo(card, {y: 100, opacity:0}, {y:0, opacity: 1, duration: 0.5,
        scrollTrigger:{
          trigger: card,
          immediateRender: true
        }
        })
      });

      gsap.utils.toArray(".cards").forEach(cardss => {
       let hover = gsap.to(cardss, {y: -20, duration:0.1, paused: true});
       cardss.addEventListener("mouseenter", () => hover.play());
       cardss.addEventListener("mouseleave", () => hover.reverse());
     });

    gsap.fromTo(el, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 1, scrollTrigger:{
      trigger: el
    }});

  }, []);

  return (
    <>
    <div className='flex flex-row justify-around' lang='en'>
      <div className=' bg-white font-custom text-center w-8/12 max-h-full flex flex-col items-center' id='services'>
          <h1 className='text-5xl pt-10 font-lobster' ref={h1Text}>Our Services</h1>
          <div className='flex justify-around items-center gap-5 py-10 max-sm:flex-wrap max-sm:gap-5 max-md:flex-wrap lg:flex-wrap max-lg:flex-wrap max-sm:w-full w-10/12 max-md:w-full'>
              {offertable.map((table) => (
                  <div className='cards bg-white justify-start w-60 p-3 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl max-sm:w-full max-md:w-2/6 max-md:m-5 max-lg:w-2/6 max-lg:m-5 lg:m-5 min-w-[200px]'>
                  <Image className='w-full h-52 m-0 p-1 object-cover rounded-xl' src={table.url} alt="" width={200} height={200}/>
                  <div className='flex justify-end flex-col items-start'>
                      <h1 className='text-xl font-bold py-1'>{table.title}</h1>
                      <p className='text-justify py-2'>{table.description}</p>
                      <Link href={table.link} className='rounded-lg transition-all text-white bg-slate-900 hover:bg-slate-700 duration-100 p-1 px-2 '>Find out more</Link>
                  </div>
              </div>
              ))}
          </div>  
      </div>
    </div>
    </>
  )
}

export default services