import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials' 
import Authentication from './components/Authentication'

function App() {

  return (
    <>
      <Testimonials/>
      <Authentication/>
    </>
  )
}

export default App
