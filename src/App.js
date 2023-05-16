import React from "react";
import Slider from "./components/Slider";
import Gadezone from "./components/gadezone";
import Accounts from "./pages/account";
import LoginPage from "./pages/loginPage";


export default function App() {
  return (
    <>
      <Slider />
      <Gadezone />
      <Accounts />
      <LoginPage/>
  
    </>
  );
}
