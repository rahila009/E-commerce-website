import React from "react";

const MACBOOK = () => {
  return (
    <>
      <div className="bg-[#EDD9D0] px-4 py-10 ml-8  w-[290px]  border border-gray-300 mb-4 ">
        <div className="pl-8">
          <button class="btn bg-white text-black hover:bg-red-500 hover:text-white px-3 py-2">
            LIMITED STOCK{" "}
          </button>
        </div>
        <h1 className="pl-9 py-2 upercase lg:text-[20px]">MACBOOK AIR</h1>
        <div className="flex pl-9">
          <div>
            <p>starting from</p>
          </div>
          <div>
            <p className="text-[#54A4DA]"> $900.99</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MACBOOK;
