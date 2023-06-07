import React from "react";
import Slider from "../components/Slider";
import Gadezone from "../components/gadezone"
import BestProduct from "../components/bestproduct";
import WhatClientsSays from "../components/WhatClientsSays/WhatClientsSays";
const Home = () => {
  return (
    <div >
     <Slider/>
     <Gadezone/>
     <BestProduct/>
     <WhatClientsSays/>

    </div>  
  );
};

export default Home;
