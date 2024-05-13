import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-200 text-white p-4 lg:flex lg:justify-between lg:items-center hidden">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center  bg-white h-12 w-35 rounded-full ">
                <div className="text-2xl font-bold text-black mb-4 sm:mb-0 px-4">Logo</div>
                <div className="flex flex-col sm:flex-row">
                    <NavLink to="/home" className="px-4 hover:text-gray-300 text-black">Home</NavLink>
                    <NavLink to="/about" className="px-4 hover:text-gray-300 text-black">About us</NavLink>
                    <NavLink to="/services" className="px-4 hover:text-gray-300 text-black">Services</NavLink>
                    <NavLink to="/testimonial" className="px-4 hover:text-gray-300 text-black">Testimonial</NavLink>
                </div>
                <div className="px-4 flex-col sm:flex-row ">
                    <NavLink to="/login" className="px-6 py-2 mt-2 sm:mt-0 sm:ml-4 border border-transparent text-sm font-medium  text-white bg-black">Sign in</NavLink>
                    <NavLink to="/register" className="px-4 py-2 mt-2 sm:mt-0 sm:ml-4 border border-black  text-black text-sm font-medium   hover:bg-blue-700">Register</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
