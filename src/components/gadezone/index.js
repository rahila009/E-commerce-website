import React from "react";
import bg1 from "../img/menimg.jpeg";

const Zone = () => {
  return (
    <div className="mt-[100px] px-[40px]">
      {/* frist div start */}
      <div className=" grid grid-cols-2 bg-[#DEE4D2] px-20 w-[50%] gap-5 py-[20px] ">
        <div className="">
          <img src={bg1} />
        </div>
        <div className="pt-6">
          <button class="border border-gray-500 py-2 px-4  text-black transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white">
            GADGET ZONE
          </button>
          <h2 className="pt-3">TAKE YOUR TRIP TO YOUR VIRTUAL WORLD</h2>
        </div>
      </div>
      {/* frist dev end */}
      
      
      {/* second div start */}

        <div>
        
        </div>

      {/* second div end */}
    </div>
  );
};

export default Zone;
