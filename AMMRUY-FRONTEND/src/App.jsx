import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials' 
import Authentication from './components/Authentication'
import AboutUs from './components/AboutUs'
import Feedback from './components/Feedback'

function App() {

  return (
    <>
      {/* <Testimonials/>
      <Authentication/>
      <AboutUs /> */}
      <Feedback/>
    </>
  )
}

export default App
