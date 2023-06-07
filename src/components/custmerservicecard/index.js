
import React from "react";

const customerCards = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="text-center">
          <h1 className="pt-6 text-[#000000] text-[30px] font-bold leading-[40px] mb-2">
            What makes us different
          </h1>
          <p className="text-gray-500">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt
          </p>
        </div>

        {/* card div start */}
         <div className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:px-[40px]  md:px-[20px] mx-auto mt-10" >
          <div>
            <div>
              <div className="">
                <img src="/assets/img/service1.jpg" alt="" />
              </div>
              <h3 className="py-2 mt-2">Customer Service</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src="/assets/img/service2.jpg" alt="" />
              </div>
              <h3 className="py-2 mt-2">Product Quality</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src="/assets/img/service3.jpg" alt="" />
              </div>
              <h3 className="py-2 mt-2"> Distribution Network</h3>
              <p className=" text-start">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div> 
        {/* card div end */}
      </div>
    </>
  );
};

export default customerCards;
