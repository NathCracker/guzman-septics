import React from 'react'
import Navbar from './navbar'
import Hotline from './hotline'
import Footer from './footer'
const Layout = ({ children }) => {

  const meta = {
    title: 'The Best Septice Service in Houston',
    description: 'Your Trusted Septic Partner',
    type: 'website'
  };

  return (
    <>
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta property='type' content={meta.type} />
    </Head>
    
    <div className='scroll-smooth'>
        <Hotline/>
        <Navbar/>
        { children }
        <Footer/>
    </div>
    </>
  )
}

export default Layout
