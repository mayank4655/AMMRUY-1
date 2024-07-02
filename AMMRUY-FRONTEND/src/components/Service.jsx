import React from 'react'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className='service flex flex-col md:flex-row justify-between items-center gap-4 min-h-screen mx-4 '>
      <div className="leftSide h-[400px] w-full md:w-[508px] m-auto">
        <img
          className='h-full w-full rounded-xl'
          src="https://s3-alpha-sig.figma.com/img/748f/2a7f/bd1c1bc99e72dd08b1e3e47060b6502c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJBH9uj4fmz0Q5j9R2hju0PrLAabqlypq07IT4V-NSGD0Ax4JtG~2SDiZ1arKGCZEUoUeeXbnVWR81ceu3cHbFCmEDrhQ8jmcdrcjjHeMGmqRpqYqfYIt0w6iCJ4XmBsXWwr9hcGUKXJYb~eknTaBmePOpoGDOAfNopsv7jeTCSvgPZ5hbuYsqV3FgfehE2sK~JEJ5TURCwuoJEDW5iev2D4M9rW66ED34blDAkk~jE73WIhQe0NtoO-KrLDVUmHjWnDtMMGrYSG7h62Pto9d3Foayjd~5Ku32wT1MeUOhtrGoE3jLuIMugZ1F6Q2rPWCX2pvunqOXG9R4Hv7gohXA__" />
      </div>
      <div className="rightSide m-auto font-serif">
        <h1 className='text-2xl md:text-4xl my-4'>Explore Our <span className='btn-txt'>Services</span></h1>
        <p className='w-60 md:w-96 text-sm md:text-xl'>We offer top-notch repair services for a wide range of home appliances, including washing machines, refrigerators, air conditioners, and LED TVs, ensuring reliable and efficient solutions for all your needs.</p>
        <div className="explore_section text-center my-4">
          <Link to='/services'>
            <button className='BTN-color px-8 py-2 text-white font-bold rounded-full hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'>
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service
