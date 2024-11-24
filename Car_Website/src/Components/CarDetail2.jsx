import React from "react";
import { motion } from "framer-motion";

const CarDetail2 = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white px-4 py-8 md:px-1 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Car Image */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/car2.png" // Replace with the actual car image URL
                        alt="Mahindra XUV 700"
                        // className="w-full h-auto object-cover rounded-lg shadow-lg"
                        className="w-full h-auto object-cover rounded-lg shadow-lg mb-[-50px] "
                    />
                    {/* <div className="absolute md:ml-[120px] top-[100px] md:top-[320px] left-0 right-0 rounded-full md:w-[770px] h-[450px] md:h-[440px] bg-gradient-to-b from-sky-500 via-transparent to-transparent opacity-80 shadow-2xl"></div> */}
                    <div className=" md:ml-[-100px] top-[100px] md:top-[-300px] left-0 right-0 rounded-full md:w-[700px] h-[80px] md:h-[130px] bg-gradient-to-b from-sky-500 via-transparent to-transparent opacity-80 shadow-2xl"></div>


                </motion.div>

                {/* Description */}
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        The Mahindra XUV700 has 1 Diesel Engine and 1 Petrol Engine on offer.
                    </h2>
                    <p className="text-gray-400 mb-4">
                        The Diesel engine is 2198 cc while the Petrol engine is 1999 cc. It is
                        available with Automatic & Manual transmission. Depending upon the variant
                        and fuel type, the XUV700 has a mileage of X. The XUV700 is a 7-seater
                        4-cylinder car and has a length of 4695 mm, width of 1890 mm, and a
                        wheelbase of 2750 mm.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-6 rounded-lg shadow-lg"
                    >
                        Check Current Offers
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default CarDetail2;
