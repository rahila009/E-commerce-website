import React from "react";
import Slider from "./components/Slider";
import Zone from "./components/gadegetzone";
import Accounts from "./pages/account";
import LoginPage from "./pages/loginPage";
export default function App() {
  return (
    <>
      <Slider />
      <Accounts />
      <LoginPage/>
    </>
  );
}
