import { useState } from 'react'
import './App.css'
import Authentication from './components/Authentication'
import ServicePage from './components/ServicePage'
import Main from './components/Main'
import { NavBar } from './reusable components/NavBar'
import { Footer } from './reusable components/Footer'
import Feedback from './components/Feedback'
import Fridge from './components/Fridge'
import RO from './components/RORepair'
import AC from './components/RORepair'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import WashingMachine from './components/WashingMachine'
import RORepair from './components/RORepair'
import FridgeRepair from './components/Fridge'
import Tv from './components/Tv'
import ACRepair from './components/ACRepair'
import Microwave from './components/Microwave'



function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Routes>
         {/* <Route path='/' element={<NavBar/>}></Route> */}
          {/* <Route path='/washing' element={<WashingMachine/>}></Route> */}
          <Route path='/auth' element={<Authentication/>}></Route>
          <Route path='/' element={<Main />}></Route>
          <Route path='/services' element={<ServicePage />}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/ro-repair' element={<RORepair />} />
          <Route path='/ac-repair' element={<ACRepair />} />
          <Route path='/fridge-repair' element={<FridgeRepair />} />
          <Route path='/washingmachine-repair' element={<WashingMachine />} />
          <Route path='/tv-repair' element={<Tv />} />
          <Route path='/microwave-repair' element={<Microwave />} />
        </Routes>
      </Router>
      {/* <section id="footer">
      <Footer/>
      </section> */}
    </>
  )
}

export default App
