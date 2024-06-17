import React from 'react'
import img1 from "../assets/AboutUs/img1.png";
import img2 from "../assets/AboutUs/img2.png";

function AboutUs() {
  return (
    <div className="flex ">
      <div className="first w-full">
       <div className="relative flex flex-row m-10 my-24 ml-2 mt-[10rem]">
            <img className="w-[600px] h-500px] m-10 ml-[2rem]" src={img2} alt="Electrical appliances" />
            <img className="absolute w-[355px] h-[240px] mx-[35%] ml-[26rem] my-[23rem] mt-[12rem]" src={img1} alt="Washing maching repair" />
       </div>
      </div>
      <div className="second w-full login-bg text-center w-[1200px]">
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
  )
}

export default AboutUs
