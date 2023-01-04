import React, {useRef, useEffect} from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import ScrollToTop from 'react-scroll-to-top'

const footer = () => {
  return (
<div className='flex flex-col bg-slate-800 text-center'>
  <div className='flex justify-around items-center bg-slate-800 min-w-full w-full pt-16 pb-3 max-sm:flex-col max-sm:w-full'>
    <div className='flex flex-col justify-center gap-5 items-center w-2/6'>
      <div className=' flex justify-center items-center text-center w-full max-sm:w-full'>
        <h1 className='text-white text-2xl font-lobster'>Sign up to our Newsletter</h1>
      </div>
      <div className='flex justify-center items-center w-full max-sm:w-full max-sm:pb-5'>
        <input className='max-sm:w-full appearance-none block py-[5px] w-full focus:outline focus:border border-teal-500' type="text" name="" id="" />
        <button className=' max-sm:text-xs max-sm:py-2 appearance-none block py-1 border-2   border-slate-900 rounded-sm w-1/2 text-white bg-slate-900 transition-all hover:bg-transparent duration-100  max-sm:w-1/2' type="submit">Sign up</button>
      </div>
    </div>
    <div className='flex justify-center items-center flex-col gap-5'>
      <h1 className=' text-white text-2xl font-lobster'>Follow our Social Media</h1>
      <div className='flex flex-row gap-10'>
        <a href="https://www.facebook.com/Guzmanseptic/" target='_blank' aria-label="Read more about our services in our facebook page."><BsFacebook className='text-white text-3xl' /></a>  
        <a href="https://www.instagram.com/guzmansepticservices/?hl=en" target='_blank' aria-label="Read more about our services in our instagram page."><BsInstagram className='text-white text-3xl' /></a>
      </div>
    </div>
  </div>
  <hr className="my-4 mx-auto w-10/12 h-1 bg-gray-100 rounded border-0 md:my-10"></hr>
  <div className='text-center'>
    <p className=' text-white text-lg pb-5'>© 2022 Guzman Septic™ is a registered trademark. All Rights Reserved.</p>
  </div>
  <ScrollToTop smooth top='20' color="#FFFFFF" width='40' className='!bg-slate-900 toUp opacity-60 transition-all hover:opacity-100 duration-200' />
</div>
  )
}

export default footer