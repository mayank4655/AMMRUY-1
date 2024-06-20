import React from 'react'
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className='service flex justify-around min-h-screen m-auto'>
      <div className="leftSide m-auto">
        <img
          className='h-[400px] w-[508px] rounded-xl'
          src="https://s3-alpha-sig.figma.com/img/748f/2a7f/bd1c1bc99e72dd08b1e3e47060b6502c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJBH9uj4fmz0Q5j9R2hju0PrLAabqlypq07IT4V-NSGD0Ax4JtG~2SDiZ1arKGCZEUoUeeXbnVWR81ceu3cHbFCmEDrhQ8jmcdrcjjHeMGmqRpqYqfYIt0w6iCJ4XmBsXWwr9hcGUKXJYb~eknTaBmePOpoGDOAfNopsv7jeTCSvgPZ5hbuYsqV3FgfehE2sK~JEJ5TURCwuoJEDW5iev2D4M9rW66ED34blDAkk~jE73WIhQe0NtoO-KrLDVUmHjWnDtMMGrYSG7h62Pto9d3Foayjd~5Ku32wT1MeUOhtrGoE3jLuIMugZ1F6Q2rPWCX2pvunqOXG9R4Hv7gohXA__" />
      </div>
      <div className="rightSide m-auto font-serif">
        <h1 className='text-4xl my-4'>Explore Our <span className='btn-txt'>Services</span></h1>
        <p className='w-96 text-xl'>We offer top-notch repair services for a wide range of home appliances, including washing machines, refrigerators, air conditioners, and LED TVs, ensuring reliable and efficient solutions for all your needs.</p>
        <div className="explore_section text-center my-4">
          <button className='BTN-color px-8 py-2 text-white font-bold rounded-full'>
            <Link to='/services'>Explore Services</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Service
