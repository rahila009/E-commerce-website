// import React from "react";

// const StoreBrand = () => {
//   return (
//     <>
//       <div className="grid grid-cols-2 mx-auto mt-[50px] mb-5 lg:px-[40px]  md:px-[20px] px-10 gap-2">
//         <div>

//          <img src="/assets/img/about.png" alt=""/>
//         </div>

//         <div>
//           <h1 className="text-[36px] leading-[40px] font-semibold text-[#000000] ">You buy, We deliver </h1>
//           <p className="py-4 font-[16px] leading-[24px] text-[#666666] px-6">
//             We have been asked how we’ve grown so quickly, the answer is simple.
//             We have positioned the organization in providing the best and
//             cheapest products and to provide the best customer service possible
//             through technology. Internally, we call this our
//             Supercalifragilisticexpialidocious philosophy.
//           </p>
//           <div className="grid grid-cols-2 mt-[30px]">
//             <div>
//               <h1 className="py-2 text-[48px]  leading-[48px] px-2 font-bold text-red-500">25<span>+</span></h1>
//               <p className="">Stores</p>
//               <h5>spectacular world of electronics</h5>
//             </div>
//             <div>
//               <h1 className=" text-[48px]  leading-[48px] font-bold text-red-500">115<span>+</span> </h1> 
//               <p className="">Brands</p>
//               <h5 className=""> of good quality and repute</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StoreBrand;
import React from "react";

const StoreBrand = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto mt-10 mb-5 lg:px-40 md:px-20 px-10 gap-2">
        <div className="flex justify-center md:justify-start">
          <img src="/assets/img/about.png" alt="" />
        </div>

        <div className="md:pl-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-normal font-semibold text-black">
            You buy, We deliver
          </h1>
          <p className="py-4 text-base md:text-lg lg:text-xl leading-relaxed text-gray-600">
            We have been asked how we’ve grown so quickly, the answer is simple.
            We have positioned the organization in providing the best and
            cheapest products and to provide the best customer service possible
            through technology. Internally, we call this our
            Supercalifragilisticexpialidocious philosophy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 gap-10">
            <div className="mb-4 md:mb-0">
              <h1 className="py-2 text-4xl leading-normal px-2 font-bold text-red-500">
                25<span>+</span>
              </h1>
              <p className="text-sm">Stores</p>
              <h5 className="text-sm">spectacular world of electronics</h5>
            </div>
            <div>
              <h1 className="text-4xl leading-normal py-2 font-bold text-red-500">
                115<span>+</span>{" "}
              </h1>
              <p className="text-sm">Brands</p>
              <h5 className="text-sm">of good quality and repute</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreBrand;
