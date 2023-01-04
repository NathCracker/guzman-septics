import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
const hotline = () => {
  return (
    <div className='max-w-screen bg-slate-100 flex justify-end items-end h-auto flex-col' lang='en'>
      <div className='flex justify-center items-center'><BsFillTelephoneFill /><p className='px-2 max-sm:text-sm'>+1 281-642-2355</p></div>
      <div className='flex justify-center items-center'><MdEmail /> <p className='px-2 max-sm:text-sm'>guzmansepticservice@outlook.com</p></div>
      <div className='flex justify-center items-center'><IoLocationSharp /><p className='px-2 max-sm:text-xs'>17914 E Hardy Rd, North Houston, TX, United States, Texas</p></div>
    </div>
  )
}

export default hotline