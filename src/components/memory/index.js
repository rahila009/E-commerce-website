import React from "react";

const Memory = () => {
  return (
    <>
      <div class=" px-4 py-10  ml-8 bg-white  w-[295px] border border-gray-300 mb-8  ">
        <h1 className="px-3 pb-4">Memory</h1>
     <div className="mb-4 flex gap-3"> 
     <div className="bg-gray-300 hover:bg-red-500 py-4 px-4 rounded-[10px] hover:text-white  ">
        <h1>64GB</h1>
        </div>
        <div className="bg-gray-300 hover:bg-red-500 py-4 px-4 rounded-[10px]  hover:text-white ">
        <h1>128GB</h1>
        </div> 

        <div className="bg-gray-300 hover:bg-red-500 py-4 px-4 rounded-[10px]  hover:text-white ">
        <h1>256GB</h1>
        </div>
    </div>

    <div className="flex gap-3">
    <div className="bg-gray-300 hover:bg-red-500 py-4 px-4 rounded-[10px]  hover:text-white ">
        <h1>512GB</h1>
        </div>
        <div className="bg-gray-300 hover:bg-red-500 hover:text-white py-4 px-4 rounded-[10px] ">
        <h1>1024GB</h1>
        </div>
    </div>
    </div>
    </>
  );
};

export default Memory;
