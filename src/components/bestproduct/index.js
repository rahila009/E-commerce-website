import Tab from "../tab";
import { data , data2 } from "../data";
import BestSellingCard from "../bestSellingCard";
import SellingBanner from "../bestsellingbannar";
const BestProduct = () => {
  return (
    <>
      <div div class=" container mt-[100px] mx-auto mb-10 px-[20px] sm:mx-auto ">
        <div className="lg:flex  flex-col md:flex-row ">
          <div class="lg:w-1/2">
            <h2 class="text-lg font-medium uppercase text-center lg:text-start">Best Selling Products</h2>
          </div>
          <Tab />
        </div>
        <div className="flex  w-full justify-between flex-wrap  ">
          {data.map((item, id) => (
            <BestSellingCard
              title={item.tittle}
              key={id}
              disc={item.disc}
              img={item.img}
            />
          ))}
        </div>

        <div><SellingBanner/></div>
        <div className="flex  w-full justify-between flex-wrap sm:mx-auto mt-4 " >
        {data2.map((item, id) => (
            <BestSellingCard
              title={item.tittle}
              key={id}
              disc={item.disc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestProduct;
