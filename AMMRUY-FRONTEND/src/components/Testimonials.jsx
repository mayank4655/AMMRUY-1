import React, { useState, useEffect } from "react";
import daveImage from "../assets/testimonials-img/dave.jpg";
import hannahImage from "../assets/testimonials-img/hannah.jpg";
import steveImage from "../assets/testimonials-img/steve.jpg";
import benImage from "../assets/testimonials-img/ben.jpg";
import aaronImage from "../assets/testimonials-img/customer-1.jpg";
import tomImage from "../assets/testimonials-img/customer-4.jpg";
import jayImage from "../assets/testimonials-img/customer-5.jpg";
import michelleImage from "../assets/testimonials-img/customer-6.jpg";

const testimonials = [
  {
    name: "Hannah",
    image: hannahImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Dave",
    image: daveImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Steve",
    image: steveImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Ben",
    image: benImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jay",
    image: jayImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Michelle",
    image: michelleImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Aaron",
    image: aaronImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Tom",
    image: tomImage,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et varius lorem. Nulla facilisi. Integer feugiat venenatis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const first = activeIndex;
    const second = (activeIndex + 1) % total;
    const third = (activeIndex + 2) % total;
    return [testimonials[first], testimonials[second], testimonials[third]];
  };

  return (
    <div className="bg-gray-20 flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-5xl text-center font-bold mb-20">
        Here’s what our clients have to say!
      </h1>
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="text-black mr-10 py-2 px-4 text-4xl"
        >
          &lt;
        </button>
        <div className="flex flex-wrap justify-center gap-24">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-green-gradient from-30% to-dark-green-gradient text-white p-10 rounded-lg shadow-lg flex flex-col items-center w-64 relative transform transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-white rounded-full absolute -top-10">
                <img
                  src={testimonial.image}
                  className="w-full h-full object-cover rounded-full"
                  alt={testimonial.name}
                />
              </div>
              <p className="text-center text-xs mt-12 mb-8">
                {testimonial.text}
              </p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className=" text-black ml-10 py-2 px-4 text-4xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
