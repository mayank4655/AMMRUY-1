import { useState } from 'react'
import './App.css'
import ServicePage from './components/ServicePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main'

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
