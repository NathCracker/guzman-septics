import React from 'react'
import Navbar from './navbar'
import Hotline from './hotline'
import Footer from './footer'
import { ToastContainer } from 'react-toastify'
const Layout = ({ children }) => {


  return (
    <>
    <div className='scroll-smooth' lang='en'>
        <Hotline/>
        <Navbar/>
        { children }
        <Footer/>
        <ToastContainer />
    </div>
    </>
  )
}

export default Layout
