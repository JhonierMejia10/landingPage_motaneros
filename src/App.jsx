import { useState } from 'react'
import { Navbar } from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import Ofertas from './components/ofertas'
import Contact from './components/contact'
import Footer from './components/footer'
import WhatsAppButton from './components/whatsapp-button'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main className=''>
        <Hero />
        <Services />
        <Ofertas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
