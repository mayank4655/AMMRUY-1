import React from 'react'
import Service from './Service'
import Feedback from './Feedback'
import AboutUs from './AboutUs'
import Authentication from './Authentication'
import Testimonials from './Testimonials'
import ServicePage from './ServicePage'

function Main() {
  return (
    <div>
      <Authentication />
      <AboutUs />
      <Service />
      <Testimonials />
      <Feedback />
    </div>
  )
}

export default Main
