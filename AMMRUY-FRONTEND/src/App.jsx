import { useState } from 'react'
import './App.css'
import Testimonials from './components/Testimonials' 
import Authentication from './components/Authentication'
import AboutUs from './components/AboutUs'
import ServicePage from './components/ServicePage'
import { NavBar } from './reusable components/NavBar'
import { Footer } from './reusable components/Footer'
import Feedback from './components/Feedback'
import ServicePage from './components/ServicePage'
import ServicePage from './components/ServicePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main'


function App() {
  return (
    <>

      <NavBar/>
      <ServicePage/>
      <Authentication/>
      <AboutUs />
      <Testimonials/>
      <Footer/>
      <ServicePage/>
      <Testimonials/>
      <Feedback/>
    </>
  )
}

export default App
