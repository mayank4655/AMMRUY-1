import { useState } from 'react'
import './App.css'
import Authentication from './components/Authentication'
import ServicePage from './components/ServicePage'
import Main from './components/Main'
import { NavBar } from './reusable components/NavBar'
import { Footer } from './reusable components/Footer'
import Feedback from './components/Feedback'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ACRepair from './components/ACRepair';
import FridgeRepair from './components/Fridge';
import RORepair from './components/RORepair.jsx';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Routes>
         {/* <Route path='/' element={<NavBar/>}></Route> */}
          <Route path='/auth' element={<Authentication/>}></Route>
          <Route path='/' element={<Main />}></Route>
          <Route path='/services' element={<ServicePage />}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/ac-repair' element={<ACRepair />} />
          <Route path='/fridge-repair' element={<FridgeRepair />} />
          <Route path='/ro-repair' element={<RORepair />} />
        </Routes>
      </Router>
      {/* <section id="footer">
      <Footer/>
      </section> */}
    </>
  )
}

export default App
