import { AiOutlineHeart } from "react-icons/ai";
import { MdSyncLock } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";
const BestSellingCard = ({ title, disc, img }) => {
    console.log(img)
  return (
    <>
      <div className=" w-[280px]  container mx-auto flex">
        <div class="  bg-white  rounded-lg shadow-md  text-center mt-[50px] p-[30px] ">
          <div className="flex w-full justify-center gap-1">
            <div className="w-full">
                <img src = {img}  className="h-auto w-full"   alt="hello" />
            </div>
            <div className="">
              <div>
                <AiOutlineHeart />
              </div>
              <div className="pt-3">
                <MdSyncLock />
              </div>
              <div className="pt-3">
                <BsArrowsFullscreen />
              </div>
            </div>
          </div>
        

          <div class="inline-block relative pt-5">
            <span class="before absolute top-0 left-0 w-0 h-full bg-red-500 transition-all"></span>
            <a
              href="#"
              class="  text-gray-500 hover:text-red-500 hover:underline hover:before:w-full text-start"
            >
              {title}
            </a>
          </div>
          <div className="pt-5  ">
            <span class="inline-block break-words text-justify    text-black hover:text-red-500 hover:before:bg-black hover:before:w-full transition-colors duration-300">
              {disc}
            </span>
          </div>
          <div class="">
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
          {/* div for button */}

          <div className="text-start pt-5">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5 inline-block -mt-1 mr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add to Cart
            </button>
          </div>

          {/* button div close */}
        </div>
      </div>
    </>
  );
};

export default BestSellingCard;
