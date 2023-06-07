import React from "react";
import BestSellingCard from "../bestSellingCard";
const SellingBanner = () => {
  return (
    <>
      <div className=" container mx-auto  lg:grid-cols-2  md:grid md:grid-cols-1  md:gap-8 mt-[50px]">
        {/* frist div start */}
          <div className=" grid grid-cols-2 bg-white lg:gap-10 md:gap-7 sm:gap-5 lg:py-[20px]  border rounded-[12px] ">
          <div className="px-3">
            <img src={"assets/img/bluemobile.jpg"} alt="helo" />
          </div>
          <div className="pt-6">
            <span class="before absolute top-0 left-0 w-0 h-full bg-red-500 transition-all"></span>
            <a
              href="#"
              class="  text-gray-500 hover:text-red-500 hover:underline hover:before:w-full text-start"
            >
              MOBILES, TABLETS
            </a>

            <div>
              <span class="inline-block  pt-5  text-black hover:text-red-500 hover:before:bg-black hover:before:w-full transition-colors duration-300">
                Version Android 11 Helio G25 5150mAh 3GB 64GB
              </span>
            </div>

            <div className="flex lg:gap-5 ">
              <div>
                <span class="flex pt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current text-green-500 "
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 14.87l-5.29 3.21 1.14-6.63L.38 7.62l6.64-.96L10 .38l2.98 6.28 6.64.96-4.47 4.33 1.14 6.63L10 14.87z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current text-green-500 "
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 14.87l-5.29 3.21 1.14-6.63L.38 7.62l6.64-.96L10 .38l2.98 6.28 6.64.96-4.47 4.33 1.14 6.63L10 14.87z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current text-green-500 h"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 14.87l-5.29 3.21 1.14-6.63L.38 7.62l6.64-.96L10 .38l2.98 6.28 6.64.96-4.47 4.33 1.14 6.63L10 14.87z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current text-green-500 "
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 14.87l-5.29 3.21 1.14-6.63L.38 7.62l6.64-.96L10 .38l2.98 6.28 6.64.96-4.47 4.33 1.14 6.63L10 14.87z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 fill-current text-gray-300"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 14.87l-5.29 3.21 1.14-6.63L.38 7.62l6.64-.96L10 .38l2.98 6.28 6.64.96-4.47 4.33 1.14 6.63L10 14.87z" />
                  </svg>
                </span>
              </div>
             
            </div>
            <p className="text-red-500 pt-5">$233.79 </p>
          </div>
        </div>
        {/* frist dev end */}

        {/* second div start */}

        <div className=" bg-[#F1DBD7] grid grid-cols-2  mt-[20px] lg:mt-0  py-6 border  rounded-[12px] lg:gap-[12px] md:gap-[10px]  ">
          <div className=" px-5">
            <img src={"assets/img/soundbox.png"} alt="mobile" />
          </div>
          <div>
            <div className="mt-5">
              <button class="bg-white hover:bg-red-500 text-black hover:text-white font-bold py-2 px-4 rounded">
                DONT'T MISS
              </button>
            </div>
            <h1 className="  pt-5 text-centerq text-[20px] leading-[23px] uppercase ">
              FLAT 10% OFF BLUETOOTH SPEAKER
            </h1>
            <p className="pt-2">
              <a href="#" class="underline hover:no-underline ">
                Shop now
              </a>
            </p>
          </div>
        </div>

        {/* second div end */}
      </div>
    </>
  );
};

export default SellingBanner;
