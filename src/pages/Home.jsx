import React from "react";
import Slider from "../components/Slider";
import Gadezone from "../components/gadezone"
import BestProduct from "../components/bestproduct";
import WhatClientsSays from "../components/WhatClientsSays/WhatClientsSays";
import ShopBrand from "../components/shopbrand";
const Home = () => {
  return (
    <div >
      <Slider/>
     <Gadezone/>
     <BestProduct/>
     <WhatClientsSays/>
     <ShopBrand/>
    </div>  
  );
};

export default Home;
