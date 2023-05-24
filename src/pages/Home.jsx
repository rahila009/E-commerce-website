import React from "react";
import Slider from "../components/Slider";
import Gadezone from "../components/gadezone"
import BestProduct from "../components/bestproduct";
import ShopBrand from "../components/shopbrand";
const Home = () => {
  return (
    <div >
      <Slider/>
     <Gadezone/>
     <BestProduct/> 
     <ShopBrand/>
    </div>  
  );
};

export default Home;
