import React from "react";
import AboutUS from "../components/oboutus";
import StoreBrand from "../components/storebrand";
import CustomerCards from "../components/custmerservicecard";
import Premium from "../components/premium";

const About = () => {
  return (
    <div>
      <AboutUS />
      <StoreBrand />
      <div className="mt-[100px]">
        <hr className="py-10 text-gray-600"></hr>
      </div>
      <div className="pt-[50px]">
        <CustomerCards />
      </div>
      <Premium />
    </div>
  );
};

export default About;
