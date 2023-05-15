import React from "react";
import bg1 from "../img/menimg.jpeg";
import mobile1 from "../img/mobile.jpeg";

const Zone = () => {
  return (
    <div className=" px-[40px]  mt-[100px] lg:grid grid-cols-2  md:grid grid-cols-2 gap-[20px]">
      {/* frist div start */}
      <div className=" grid grid-cols-2 bg-[#DEE4D2] px-[40px] gap-8 py-[20px]  border rounded-[12px]">
        <div className="px-3">
          <img src={bg1} />
        </div>
        <div className="pt-6">
          <button class="border border-gray-200 py-2 px-4 bg-[white] text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white">
            GADGET ZONE
          </button>
          <h2 className="pt-7 text-[#000000]">
            TAKE YOUR TRIP TO YOUR VIRTUAL WORLD
          </h2>
        </div>
      </div>
      {/* frist dev end */}

      {/* second div start */}

      <div className=" bg-[#B9DCF1] grid grid-cols-2 py-6 border rounded-[12px] gap-8 ">
        <div className=" px-3">
          <img src={mobile1} />
        </div>
        <div>
          <div className="">
            <button class=" border border-gray-200 py-2 px-4 bg-[white] text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white mt-5 ">
              NEW ARRIVAL
            </button>
          </div>
          <h1 className=" text-[#000000] pt-5 text-centerq">REDMI NOTE 10S</h1>
        </div>
      </div>

      {/* second div end */}
    </div>
  );
};

export default Zone;
