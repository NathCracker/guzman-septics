import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Contacts from '../components/contacts'
import Head from 'next/head'
export default function Home(){

  return(
    <>
    <Head>
      <title>Guzman Septic - Your Trusted Septic Partner</title>
      <meta name="description" content="Septic Service Company provides professional and reliable septic services for residential and commercial properties. From installation and repair to maintenance and inspections, we've got you covered."/>
      <meta name="keywords" content="Septic service, Septic tank, Septic installation, Septic repair, Septic maintenance, Septic inspection, Septic cleaning, Septic pumping, Septic system, Septic tank repair, Septic tank maintenance, Septic tank installation, Septic tank pumping, Septic drain field, Septic control panel, Grease trap, High pressure jetting"/>
      <meta name="author" content="Guzman Septics"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Services />
    <About />
    <Contacts />
    </>
  )
}