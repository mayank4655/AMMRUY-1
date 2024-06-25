import React, { useState } from 'react'
import Service from './Service'
import Feedback from './Feedback'
import AboutUs from './AboutUs'
import Authentication from './Authentication'
import Testimonials from './Testimonials'
import ServicePage from './ServicePage'
import HeroSection from './HeroSection'
import { NavBar } from '../reusable components/NavBar'
import { Footer } from '../reusable components/Footer'
import ContactUs from './Contact-us'

function Main() {
  const [hover, sethover] = useState(false);
  setTimeout(() => {
    sethover(false);
  }, 10000);
  return (
    <div>
      <Authentication />
      <AboutUs />
      <Service />
      <Testimonials />
      <Feedback />
      <ServicePage/>
    </div>
  )
}

export default Main
