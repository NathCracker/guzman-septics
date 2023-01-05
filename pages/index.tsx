import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Contacts from '../components/contacts'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
export default function Home(){

  return(
    <>
    <Head>
      <title>Guzman Septic - Your Trusted Septic Partner</title>
      <meta name="description" content="The Best septic Service in Houston"/>
      <meta name="keywords" content="Septic, septic, septic services, Houston septic services, septic services in houston, best septic service, Austin, San Antonio"/>
      <meta name="author" content="Guzman Septics"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Services />
    <About />
    <Contacts />
    <ToastContainer />
    </>
  )
}