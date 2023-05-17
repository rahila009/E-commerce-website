import React from "react";
// import Slider from "./components/Slider";
import Gadezone from "./components/gadezone";
import Accounts from "./pages/account";
import LoginPage from "./pages/loginPage";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faqs from "./pages/Home";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
      {/* <Gadezone /> */}
      <Accounts />
      <LoginPage/>
  
    </>
  )

  }
