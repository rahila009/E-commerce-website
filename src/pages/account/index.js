import React from "react";
import Login from "../../components/login";
import Register from "../../components/register";

const Accounts = () => {
  return (
    <div className=" xl:flex justify-around lg:flex sm:block  justify-evenly; md:flex justify-center lg:px-[40px] font-[Roboto] ;">
      <Login />
      <Register />
    </div>
  );
};

export default Accounts;
