import { useState } from 'react'
import { Navbar } from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main className=''>
        <Hero />
        <Services />
      </main>
    </>
  )
}

export default App
