import React from 'react'
import Service from './Service'
import Feedback from './Feedback'
import AboutUs from './AboutUs'
import Authentication from './Authentication'
import Testimonials from './Testimonials'
import ServicePage from './ServicePage'
import HeroSection from './HeroSection'
import { NavBar } from '../reusable components/NavBar'
import { Footer } from '../reusable components/Footer'

function Main() {
  return (
    <div>
      <section id="Nav">
        <NavBar />
      </section>
      <section id="Hero">
        <HeroSection />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="testimonial">
        <Testimonials />
      </section>
      <section id="feedback">
        <Feedback />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="footer">
      <Footer/>
      </section>
    </div>
  )
}

export default Main
