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
    <div
      onMouseMove={() => sethover(true)}
    >
      <section id="Nav">
        <NavBar hover={hover} />
      </section>
      <section id="Hero">
        <HeroSection />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="testimonial">
        <Testimonials />
      </section>
      <section id="feedback">
        <Feedback />
      </section>
      {/* <section id="about">
        <AboutUs />
      </section> */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Main
