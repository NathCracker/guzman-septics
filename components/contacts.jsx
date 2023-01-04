import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {BsFillTelephoneFill} from 'react-icons/bs'
gsap.registerPlugin(ScrollTrigger);
const contacts = () => {
  //Scroll animation
  const contacts = useRef(null);

  useEffect(() =>{
    const el = contacts.current;
    gsap.fromTo(el, {y:50, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger:{
      trigger: el
    }})
  }, [])

  //input validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');


  //emailJS
  const form = useRef();
  
  const sendEmail = (e) => {
    const success = () => toast.success('Message sent!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const failed = () => toast.error('Error please try again.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });  
    const requirements = () => toast.error('Please fill up the required fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
      const requirementsInvalid = (where) => toast.error('Invalid ' + where +'. Please try again!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    e.preventDefault();
    if (name.length == 0 && email.length == 0 && phoneNumber.length == 0 && message.length == 0 ){
      requirements();
    } else if(name.length == 0){
      requirementsInvalid('name');
    }
    else if(email.length == 0){
      requirementsInvalid('email address');
    }
    else if(phoneNumber.length == 0){
      requirementsInvalid('phone number');
    }
    else if(message.length == 0){
      requirementsInvalid('message');
    }else if(address.length == 0){
      requirementsInvalid('address');
    }else {
      emailjs.sendForm('service_h53hsbv', 'template_2wsgejr', form.current, '55VfGu7c3pQDEh_no')
      .then((result) => {
          console.log(result.text);
          success();
      }, (error) => {
          console.log(error.text);
          failed();
      });
    }
  };
//<a href="https://www.flaticon.com/free-icons/customer-service" title="customer service icons">Customer service icons created by Freepik - Flaticon</a>
  return (
    <div className='flex flex-row justify-around' lang='en'>
      <div ref={contacts} className='w-10/12 bg-white pt-10 pb-5 mt-10 font-custom' id='contacts'>
        <div className='flex justify-center items-center mx-3 mb-6 max-sm:flex-col lg:flex-row max-md: flex-col'>
          <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-black text-5xl max-sm:text-center font-lobster'>Connect with us</h1>
            <p className='text-black  max-sm:text-center'>Feel free to contact us using this form or by calling our hotline.</p>
            <div className='offer flex justify-center items-center flex-col gap-5'>
                  <Image src="/images/ico/call-center.png" alt="Commercial" className='max-h-28' height={112} width={112} />
                  <div className='flex justify-center items-center'><BsFillTelephoneFill className='text-4xl max-sm:text-lg' /><p className='px-2 max-sm:text-lg text-3xl'>+1 281-642-2355</p></div>
                  <h2 className='max-sm:pb-10'>Our customer service is open for 24 hours.</h2>
                  <h1 className='font-lobster text-3xl lg:hidden pb-5'>Contact Form</h1>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} action="" className=' flex justify-center items-center flex-col gap-5 px-4 my-auto w-[50%] max-w-full mx-auto max-sm:w-full max-md:w-full max-lg:w-full'>
            <div className='flex gap-1 flex-col justify-start w-full max-sm:w-full max-md:w-full max-lg:w-full'>
              <label htmlFor="name" className=' text-black'>Name</label>
              <input aria-label='Name' id='name' onChange={e=>setName(e.target.value)} className='border border-slate-900  w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' 
              name='from_name' type="text"  />
            </div>
            <div className='flex gap-1 flex-col justify-start w-full'>
              <label htmlFor="email" className='text-black'>Email</label>
              <input aria-label='Email' id='email' onChange={e=>setEmail(e.target.value)} name='from_email' className='border border-slate-900  w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="email"  />
            </div>
            <div className='flex gap-1 flex-col justify-start w-full'>
              <label htmlFor="phone" className='text-black'>Phone Number</label>
              <input aria-label='Phone Number' id='phone' onChange={e=>setphoneNumber(e.target.value)} name='from_phone' className='border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="number" min='0' max='99999999999' />
            </div>
            <div className='flex gap-1 flex-col justify-start w-full'>
              <label htmlFor="address" className='text-black'>Address</label>
              <input aria-label='Address' id='address' onChange={e=>setAddress(e.target.value)} name='from_address' className='border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="text"  />
            </div>
            <div className='flex gap-1 flex-col justify-start w-full'>
              <label htmlFor="select" className='text-black'>Service</label>
              <select name="from_select" id="select" className='border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1'>
                <option aria-label='Septic Cleaning and Pumping' value="Cleaning and Pumping">Septic Cleaning and Pumping</option>
                <option aria-label='Septic Tank Installation' value="Installation">Septic Tank Installation</option>
                <option aria-label='Septic Control Panel' value="Control Panels">Septic Control Panel</option>
                <option aria-label='Grease Traps' value="Grease Traps">Grease Traps</option>
                <option aria-label='High Pressure Jetting' value="High Pressure Jetting">High Pressure Jetting</option>
                <option aria-label='Septic Tank Repair' value="Septic Tank Repair">Septic Tank Repair</option>
              </select>
            </div>
            <div className='flex gap-1 flex-col justify-start w-full'>
              <label htmlFor="message" className='text-black'>Message</label>
              <textarea aria-label='Message' id='message' onChange={e=>setMessage(e.target.value)} rows="4" className='appearance-none border border-slate-900 block rounded-sm w-full focus:outline focus:border min-h-[150px] max-h-[300px] focus:border-teal-500 resize-y' cols="4" type="text" name="message" ></textarea>
            </div>
              <input aria-label='Submit' type="submit"  value='Send' className='w-full text-white bg-slate-800 px-4 py-2 cursor-pointer rounded-sm transition-all hover:scale-105 duration-300 hover:shadow-md' />  
          </form>
        </div>
      </div>
    </div>
  )
}

export default contacts
