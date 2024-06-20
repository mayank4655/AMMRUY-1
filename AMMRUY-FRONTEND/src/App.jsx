import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials' 
import Authentication from './components/Authentication'
import AboutUs from './components/AboutUs'
<<<<<<< HEAD
import ServicePage from './components/ServicePage'
import { NavBar } from './reusable components/NavBar'
import { Footer } from './reusable components/Footer'
=======
import Feedback from './components/Feedback'
import ServicePage from './components/ServicePage'
>>>>>>> 9936c475e0761a9102defcf427a84424a51f1958

function App() {

  return (
    <>
<<<<<<< HEAD
      <NavBar/>
      <ServicePage/>
      <Authentication/>
      <AboutUs />
      <Testimonials/>
      <Footer/>
=======
      <ServicePage/>
      <Testimonials/>
      <Authentication/>
      <AboutUs />
      <Feedback/>
>>>>>>> 9936c475e0761a9102defcf427a84424a51f1958
    </>
  )
}

export default App
