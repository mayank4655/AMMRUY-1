import React, { useState } from 'react'
import img1 from "../assets/AboutUs/img1.png";
import img2 from "../assets/AboutUs/img2.png";
import { NavBar } from '../reusable components/NavBar';

function AboutUs() {
  const [hover, sethover] = useState(false);
  setTimeout(() => {
    sethover(false);
  }, 10000);
  return (
    <>
      <NavBar hover={hover}/>
      <div
        onMouseMove={() => sethover(true)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="first">
            <div className=" object-fill lg:flex lg:m-10 lg:my-24 lg:ml-2 lg:mt-[10rem] lg:min-w-[792px] md:min-w-[530px] md:flex-col md:object-fill">
              <div className="lg:max-w-[650px] lg:max-h-[500px] md:max-w-[531px]">
                <img className="relative md:w-auto md:h-auto lg:m-10 lg:ml-[2rem] lg:top-4 object-fill" src={img2} alt="Electrical appliances" />

              </div>
              <div className="absolute hidden md:block lg:w-[350px] lg:h-[260px] lg:mt-[209px] lg:left-[29.25rem] md:w-[531px] ">
                <img className="w-auto h-auto top-auto" src={img1} alt="Washing maching repair" />
              </div>
            </div>
          </div>
          <div className="second login-bg text-center lg:min-w-auto max-w-fit">
            <div className="header mx-auto text-white  mt-[3rem]">
              <h1 className='font-bold text-5xl my-4 mb-[2rem]'>The Team</h1>
              <p className='mx-auto text-xl my-2 roboto-thin w-[80%] text-left'> We are dedicated to offering our clients fast, affordable and professional appliance repair service. Resolving the appliance repair issues of our customers in a timely and affordable price is our #1 goal.
                <br /> <br />
                Call us today for repair of any major appliance in your home. We respond quickly to your need for appliance repair, washing machine repair, fridge repair, refrigerator repair, microwave repair, chimney deep cleaning, RO service, LED TV repair at doorstep
                and most work is done the very same day. <br /> <br /> Our prices are very competitive, and we guarantee the work we do.
                We take great pride in each and every service call and we make the same guarantee to all our customers. If you need Professional Appliance Repair at your home, Contact us via Phone, Email or our Schedule a service by online form.
                <br /> <br />
                We repair and install all makes and model of Refrigerators, Freezers, Fridge, Washers, Dryers, Dishwashers, Ovens, Microwaves, Wine Coolers, Ice Machines and more.</p>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
