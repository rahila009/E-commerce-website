import React from "react";
import Rating from "react-rating-stars-component";
import { reviewsCard } from "../../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "../WhatClientsSays/style.css";
import Newsletter from "../newsletter/index.js";

const WhatClientsSays = () => {
  const data = reviewsCard;

  const settings = {
    dots: true,

    infinite: true,
    autoplay: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="rounded-[50px] py-10  container mx-auto ">
      <h2 className="text-black text-2xl font-semibold pl-[30px] lg:px-0">
        What Clients Say
      </h2>
      <div className="  mt-10 container mx-auto  px-[30px] lg:px-0">
        <Slider {...settings}>
          {data.map((review) => (
            <div
              className="border-2 bg-white border-gray-200  py-[30px] px-[25px] rounded-[14px] shadow-lg  "
              key={review.id}
            >
              <h2 className="text-xl font-semibold">{review.h1}</h2>
              <div className="mt-2">
                <Rating
                  count={5}
                  size={20}
                  activeColor="#ffd700"
                  value={4} // Set the initial rating value here
                  edit={false} // Set to true if you want to allow user rating input
                />
              </div>
              <p className="text-base leading-7 mt-4">{review.disc}</p>
              <div className="mt-6 flex items-center gap-5">
                <img
                  src={review.img}
                  className="rounded-full w-14 h-14"
                  alt=""
                />
                <div>
                  <span className="text-lg font-semibold">{review.name}</span>
                  <p className="text-sm text-gray-500 font-medium">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default WhatClientsSays;
