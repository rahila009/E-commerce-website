import React from "react";
import { SlMenu } from "react-icons/sl";
import { AiFillAppstore } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
const DefaultSorting = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-4  bg-white mx-auto mb-6">
        <div className="flex items-center">
          <div className="mr-2 text-gray-500 flex items-center gap-3">
            <SlMenu className="hidden lg:flex" />                                                                                                                                                                                                                                                                                                                                                                        
            <FiFilter className="lg:hidden flex" />   
            <span className="lg:hidden underline">Filter</span>                                                                                                                                                                                                                                                                                                                                                                     
          </div>
          <div className="mr-2 pl-3 text-red-500 hidden lg:flex">
            <AiFillAppstore />
          </div>
          <select className="px-2 py-1 pl-3 bg-white text-gray-400">
            <option value="option1"> Default Sorting</option>
            <option value="option2">sort by popularity</option>
            <option value="option3">sort by average rating</option>                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <option value="option3">sort by latest</option>
            <option value="option3">sort by price:low to high</option>
            <option value="option3">sort by price: high to low</option>
          </select>
        </div>
        <div className="hidden lg:flex text-sm text-gray-400">Showing 1–12 of 32 results</div>
      </nav>
    </>
  );
};
export default DefaultSorting;
