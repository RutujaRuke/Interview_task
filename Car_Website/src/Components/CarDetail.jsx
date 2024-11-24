

import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaShieldAlt, FaGasPump, FaUsers, FaCogs } from "react-icons/fa";

const CarDetail = () => {
    const cardData = [
        { icon: <FaCogs />, title: "Engine", text: "1997 to 2184 cc" },
        { icon: <FaShieldAlt />, title: "Safety", text: "5 Star (Global NCAP)" },
        { icon: <FaCar />, title: "Body Type", text: "SUV" },
        { icon: <FaCogs />, title: "Transmission", text: "Manual & Automatic (TC)" },
        { icon: <FaUsers />, title: "Seating Capacity", text: "5 & 7 Seater" },
        { icon: <FaGasPump />, title: "Fuel Type", text: "Petrol & Diesel" },
    ];

    return (
        <div className="bg-black text-white px-4 py-8 sm:px-6 md:px-12 lg:px-16">
            {/* Header Section */}
            <motion.div
                className="text-center md:text-left"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Mahindra XUV 700</h1>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center mt-2">
                    <div className="text-orange-400 flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <i key={index} className="fa fa-star text-orange-500"></i>
                        ))}
                    </div>
                    <span className="ml-0 sm:ml-2 text-sm text-gray-400 mt-1 sm:mt-0">(108 Reviews)</span>
                </div>
                <p className="text-lg font-semibold mt-2 text-sky-400">
                    Rs.13.18 - 24.58 Lakh
                </p>
            </motion.div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {cardData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:shadow-lg hover:bg-gray-800 transition-all"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Icon */}
                        <div className="text-sky-400 text-3xl">{item.icon}</div>
                        {/* Text */}
                        <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CarDetail;
