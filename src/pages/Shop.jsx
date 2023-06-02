import React from "react";
import SidebarFilter from "../components/sidebarfilter";
import Categories from "../components/productcategories";
import Ratings from "../components/ratings";
import BrandCheckbox from "../components/brandcheckbox";
import Memory from "../components/memory";
import MACBOOK from "../components/macbook";
import { data3, data4 ,data5 ,data6} from "../components/data";
import BestSellingCard from "../components/bestSellingCard";
import DefaultSorting from "../components/defaultsorting";

const Shop = () => {
  return (
    // <>
    //   <div className="w-full mx-auto h-auto  mt-[20px]  flex justify-around">
    //     <div className="left">
    //       <Categories />
    //       <SidebarFilter />
    //       <Ratings />
    //       <BrandCheckbox />
    //       <Memory />
    //       <MACBOOK />
    //     </div>

    //     <div className="w-full">
    //       <DefaultSorting/>
    //       <div className="h-auto  w-full">
    //         <div className="lg:grid grid-cols-3; md:grid grid-cols-2 mx-auto w-full gap-3">
    //           {data3.map((item, id) => (
    //             <BestSellingCard
    //               title={item.tittle}
    //               key={id}
    //               disc={item.disc}
    //               img={item.img}
    //             />
    //           ))}
    //         </div>
    //         <div className="grid grid-cols-3 mx-auto w-full gap-3 mt-6">
    //           {data4.map((item, id) => (
    //             <BestSellingCard
    //               title={item.tittle}
    //               key={id}
    //               disc={item.disc}
    //               img={item.img}
    //             />
    //           ))}
    //         </div>

    //         <div className="grid grid-cols-3 mx-auto w-full gap-3 mt-6">
    //           {data5.map((item, id) => (
    //             <BestSellingCard
    //               title={item.tittle}
    //               key={id}
    //               disc={item.disc}
    //               img={item.img}
    //             />
    //           ))}
    //         </div>


    //         <div className="grid grid-cols-3 mx-auto w-full gap-3 mt-6 mb-5">
    //           {data6.map((item, id) => (
    //             <BestSellingCard
    //               title={item.tittle}
    //               key={id}
    //               disc={item.disc}
    //               img={item.img}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>

     
    //   </div>
    // </>

    <>
  
    <>
  <div className="w-full mx-auto h-auto mt-[20px] flex justify-around">
    <div className="left hidden lg:block"  >
      <Categories />
      <SidebarFilter />
      <Ratings />
      <BrandCheckbox />
      <Memory />
      <MACBOOK />
    </div>

    <div >
   <div className="px-6"> 
   <DefaultSorting />
   </div>
      <div className="h-auto w-full py-3">
        <div className=" py-2 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid-cols-1 mx-auto w-full gap-3">
          {data3.map((item, id) => (
            <BestSellingCard
              title={item.tittle}
              key={id}
              disc={item.disc}
              img={item.img}
            />
          ))}
        </div>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid-cols-1 mx-auto w-full gap-3 mt-6">
          {data4.map((item, id) => (
            <BestSellingCard
              title={item.tittle}
              key={id}
              disc={item.disc}
              img={item.img}
            />
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-3 md:grid py-2 md:grid-cols-2 grid-cols-1 mx-auto w-full gap-3 mt-6">
          {data5.map((item, id) => (
            <BestSellingCard
              title={item.tittle}
              key={id}
              disc={item.disc}
              img={item.img}
            />
          ))}
        </div>

        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 py-2 grid-cols-1 mx-auto w-full gap-3 mt-6 mb-5">
          {data6.map((item, id) => (
            <BestSellingCard
              title={item.tittle}
              key={id}
              disc={item.disc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</>

    
    </>
  );
};

export default Shop;
