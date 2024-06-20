import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials' 
import Authentication from './components/Authentication'
import AboutUs from './components/AboutUs'
import ServicePage from './components/ServicePage'
import { NavBar } from './reusable components/NavBar'
import { Footer } from './reusable components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <ServicePage/>
      <Authentication/>
      <AboutUs />
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
