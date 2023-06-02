import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopBrand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-[50px]">
      <h2 className="text-2xl font-bold mb-4">Shop by Brand</h2>
      <Slider {...settings}>
        <div className="bg-white py-[30px] rounded-[10px] mx-4 ">
          <img
            src={"assets/img/brand_01.svg"}
            alt="Brand 1"
            className="mx-auto h-[80px] w-[90px]"
          />
        </div>
        <div className="bg-white py-[30px] rounded-[10px] mx-4 border ">
          <img
            src={"assets/img/brand_02.svg"}
            alt="Brand 2"
            className="mx-auto h-[80px] w-[90px]"
          />
        </div>
        <div className="bg-white py-[30px] rounded-[10px]">
          <img
            src={"assets/img/brand_03.svg"}
            alt="Brand 3"
            className="mx-auto h-[80px] w-[90px]"
          />
        </div>
        <div className="bg-white py-[30px] rounded-[10px]">
          <img
            src={"assets/img/brand_04.svg"}
            alt="Brand 4"
            className="mx-auto h-[80px] w-[90px]"
          />
        </div>
        <div className="bg-white py-[30px] rounded-[10px]">
          <img
            src={"assets/img/brand_05.svg"}
            alt="Brand 5"
            className="mx-auto h-[80px] w-[90px]"
          />
        </div>
        <div className="bg-white py-[30px] rounded-[10px]">
          <img
            src={"assets/img/brand_06.svg"}
            alt="Brand 6"
            className="mx-auto h-[80px] w-[90px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ShopBrand;
