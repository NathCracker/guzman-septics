import React from 'react'
import {useState, useRef, useEffect} from 'react'
import { Transition } from "@headlessui/react"
import Link from 'next/link'
import {Link as Links} from 'react-scroll'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {gsap, Power3} from 'gsap'
import offertable from './serviceoffers'

const navbar = () => {
  let ease = Power3.easeInOut();
  let logo = useRef(null);

  useEffect(()=>{  
  const navs = gsap.utils.toArray('.linking');
  navs.forEach(nav => {
    gsap.fromTo(nav, { opacity:0, scale: 0.5}, {scale: 1, opacity: 1, duration: 1, ease: ease})
    });
    gsap.fromTo(logo, {opacity: 0, scale:0.5}, {opacity: 1, scale:1, ease: ease, duration: 1});
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
  return (
    <div ref={animationParent} className='z-10 sticky top-0'>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between">
        <div className="flex-shrink-0">
                <Link href="/"><img ref={el => logo = el} src='/images/logolight.png'
                  className="opacity-0 max-h-16 max-w-24"
                  
                  alt="Workflow"
                /></Link>
          </div>
          <div className="flex items-center justify-center h-16 max-sm:justify-between max-md:justify-between">
            <div className="flex items-center">

              <div className="hidden md:block">
                <div className="ml-10 flex justify-center items-center space-x-4">
                <Link
                    href="/"
                    
                    className="group linking text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:text-white"
                  >
                    Home

                    <div className='animationing bg-white w-0 h-[3px] transition-all group-hover:w-full'>

                    </div>
                  </Link>

                  <div className='flex flex-col overflow-hidden justify-center items-center h-full group'>
                  <Links
                    href="#"
                    activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500}
                    className=" linking text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                    
                    <div className='animationing bg-white w-0 h-[3px] transition-all group-hover:w-full'>

                    </div>

                  </Links>

                  <div className=' absolute top-12 text-white bg-gray-800 hidden flex-col opacity-0 w-[200px] group-hover:flex group-hover:opacity-100'>
                        {offertable.map((table) =>(
                          <a href={table.link} className='py-2 transition-all text-left hover:text-red-500'>{table.title}</a>
                        ))}
                  </div>

                  </div>

                  <Links
                    href="#"
                    activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}
                    className="group linking text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                    
                    <div className='animationing bg-white w-0 h-[3px] transition-all group-hover:w-full'>

                    </div>
                  </Links>

                  <Links
                    href="#"
                    activeClass="active" to="contacts" spy={true} smooth={true} offset={-50} duration={500}
                    className="group linking text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    
                    Contacts
                    
                    <div className='animationing bg-white w-0 h-[3px] transition-all group-hover:w-full'>

                    </div>
                  </Links>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 text-center pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Links
                  href="#"
                  activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Links>

                <Links
                  href="#"
                  activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Links>

                <Links
                  href="#"
                  activeClass="active" to="contacts" spy={true} smooth={true} offset={-50} duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contacts
                </Links>

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default navbar
