

import React, { useState } from "react";
import { motion } from "framer-motion";
import CarDetails from "./CarDetail";
import CarDetail2 from "./CarDetail2";
import CarDetail3 from "./CarDetail3";
import CarDetail4 from "./CarDetail4";
import CarDetail5 from "./CarDetail5";
import Reviews from "./Reviews";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <div className="bg-black text-white min-h-screen px-5 md:px-16 lg:px-32 py-5">
            {/* Top Section: Menu Icon and Search Box */}
            <div className="flex justify-between items-center mb-6">
                {/* Menu Icon (Mobile Only) */}
                <i
                    className="fa fa-bars text-white text-3xl cursor-pointer md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></i>

                {/* Search Box */}
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-1 text-sm w-full max-w-xs text-gray-300"
                />
            </div>

            {/* Navbar */}
            <nav className="relative">
                {/* Desktop Navbar */}
                <ul className="hidden md:flex justify-between items-center space-x-4 text-sm md:text-base">
                    {["Overview", "Compare", "Images", "User Reviews", "Variants", "Videos", "More"].map(
                        (item, index) => (
                            <li key={index} className="hover:text-orange-500 hover:underline cursor-pointer">
                                {item}
                                {["Compare", "More"].includes(item) && (
                                    <i className="fa fa-chevron-down ml-1"></i>
                                )}
                            </li>
                        )
                    )}
                </ul>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        className="absolute top-0 left-0 bg-gray-900 h-screen w-1/2 z-50 p-5 md:hidden"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                    >
                        <ul className="space-y-4">
                            {["Overview", "Compare", "Images", "User Reviews", "Variants", "Videos", "More"].map(
                                (item, index) => (
                                    <li key={index} className="hover:text-orange-500 hover:underline cursor-pointer">
                                        {item}
                                        {["Compare", "More"].includes(item) && (
                                            <i className="fa fa-chevron-down ml-1"></i>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>
                )}
            </nav>

            {/* Main Section */}
            <div className="mt-10 text-center">
                {/* Title */}
                <motion.h1
                    className="text-7xl md:text-[220px] font-bold text-blue-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    XUV 700
                </motion.h1>

                {/* Car Image Section */}
                <motion.div
                    className="relative flex justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/car-image.png" // Replace with your car image URL
                        alt="XUV 700"
                        className="z-10 w-full max-w-2xl -mt-10 md:-mt-24"
                    />

                    <div className="absolute md:ml-[120px] top-[100px] md:top-[320px] left-0 right-0 rounded-full md:w-[770px] h-[450px] md:h-[440px] bg-gradient-to-b from-sky-500 via-transparent to-transparent opacity-80 shadow-2xl"></div>
                </motion.div>

                {/* Description */}
                <motion.p
                    className="text-gray-400 mt-5 md:mt-[-40px] px-4 md:px-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    With its Sci-Fi Technology, Spirited <br /> Performance, and World-Class
                    Safety, <br /> this powerhouse of an SUV is <br /> obsessively engineered to dial up
                    adrenaline like never before.
                </motion.p>
            </div>
            <CarDetails/>
            
        </div>
        <CarDetail2/>
        <CarDetail3/>
        <CarDetail4/>
        <CarDetail5/>
        <Reviews/>
        </>
    );
};

export default Home;

