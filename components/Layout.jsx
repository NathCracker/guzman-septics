import React from 'react'
import Navbar from './navbar'
import Hotline from './hotline'
import Footer from './footer'
const Layout = ({ children }) => {


  return (
    <>
    <div className='scroll-smooth' lang='en'>
        <Hotline/>
        <Navbar/>
        { children }
        <Footer/>
    </div>
    </>
  )
}

export default Layout
