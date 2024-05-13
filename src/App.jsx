import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./componenents/Navbar/Navbar";
import Home from "./componenents/Home/Home";
import About from "./componenents/About/About";
import Services from "./componenents/Services/Services";
import Testimonial from "./componenents/Testimonial/Testimonial";
import Login from "./componenents/Login/Login";
import Register from "./componenents/Register/Register";
import Mobilenavbar from "./componenents/Navbar/Mobilenavbar";



function App() {
 

  return (
    <div className="">
      <Navbar/>
      <Mobilenavbar/>

      <div className="">
        <Routes>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/testimonial" element={<Testimonial/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
