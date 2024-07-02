import React, { useState, useEffect } from "react";
import daveImage from "../assets/testimonials-img/dave.jpg";
import hannahImage from "../assets/testimonials-img/hannah.jpg";
import steveImage from "../assets/testimonials-img/steve.jpg";
import benImage from "../assets/testimonials-img/ben.jpg";
import aaronImage from "../assets/testimonials-img/customer-1.jpg";
import tomImage from "../assets/testimonials-img/customer-4.jpg";
import jayImage from "../assets/testimonials-img/customer-5.jpg";
import michelleImage from "../assets/testimonials-img/customer-6.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderColor from "@material-tailwind/react/theme/components/slider/sliderColor";
import badgeColors from "@material-tailwind/react/theme/components/badge/badgeColors";

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

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // badgeColors: redirect,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  return (
    <section className="testimonials">
      <h1 className="text-5xl text-center font-bold mb-20 mx-1">
        Here’s what our clients have to say!
      </h1>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {testimonials.map((d) => (
              <div
                key={d.name}
                className="bg-gradient-to-tr from-green-gradient from-30% to-dark-green-gradient text-white rounded-lg shadow-lg flex flex-col items-center w-64 relative z-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                <div className="testimonials-img w-20 h-20 bg-white rounded-full absolute -top-10 left-28">
                  <img
                    src={d.image}
                    className="w-full h-full rounded-full"
                    alt={d.name}
                  />
                </div>

                <div className="p-2 flex flex-col items-center">
                  <p className="text-center text-xs mt-12 mb-8">{d.text}</p>
                  <p className="font-bold mb-4">{d.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

