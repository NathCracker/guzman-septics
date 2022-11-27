import React from 'react'
import {useState, useRef, useEffect} from 'react'
import { Transition } from "@headlessui/react"
import Link from 'next/link'
import {Link as Links} from 'react-scroll'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import {gsap, Power3} from 'gsap'

const navbar = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeInOut();
  let logo = useRef(null);
  useEffect(()=>{
    tl.to(logo, {opacity: 1, x: 10, ease: ease});
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [animationParent] = useAutoAnimate();
  return (
    <div ref={animationParent}>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around h-16 max-sm:justify-between max-md:justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 ref={el => logo = el}
                  className=" opacity-0 text-white text-3xl h-8 w-full"
                  
                  alt="Workflow"
                >
                  Guzman <b>Septic</b>
                  
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex justify-center items-center space-x-4">
                <Link
                    href="/"
                    
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Links
                    href="#"
                    activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </Links>

                  <Links
                    href="#"
                    activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Abouts
                  </Links>

                  <Links
                    href="#"
                    activeClass="active" to="contacts" spy={true} smooth={true} offset={0} duration={500}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    
                    Contacts
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
                  activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Links>

                <Links
                  href="#"
                  activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Links>

                <Links
                  href="#"
                  activeClass="active" to="contacts" spy={true} smooth={true} offset={0} duration={500}
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
