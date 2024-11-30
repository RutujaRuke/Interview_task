import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from '@heroicons/react/solid'; // Importing the dropdown icon from Heroicons


const Reviews = () => {
    const reviews = [
        {
            id: 1,
            text: "It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.",
            author: "Mohendrakumar Baviskar",
            date: "Aug 18, 2022",
            views: 193,
        },
        {
            id: 2,
            text: "It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.",
            author: "Mohendrakumar Baviskar",
            date: "Aug 18, 2022",
            views: 193,
        },
        {
            id: 3,
            text: "It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.",
            author: "Mohendrakumar Baviskar",
            date: "Aug 18, 2022",
            views: 193,
        },
        // Add more reviews here
    ];

    return (
        <>
            <div className="bg-black text-white p-8">
                {/* Header */}
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-bold"> <span className="text-7xl">" </span><span className="font-normal font-thin">Mahindra XUV700 </span></h1>
                    <motion.p
                        className="text-xl md:text-5xl font-medium mt-2"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        User Review
                    </motion.p>
                    {/* Rating */}
                    <div className="flex justify-center md:items-left mt-4 md:ml-[-900px] space-x-2">
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className="text-yellow-400 text-2xl">★</span>
                            ))}
                        </div>
                        <p className="text-2xl">4.5</p>
                        <p className="text-gray-400">From our 108 users</p>
                    </div>
                    {/* Write Review Button */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="flex justify-between items-center w-full">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black"
                            >
                                Write your Review
                            </motion.button>

                            {/* Filter button positioned to the right */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="mt-4 px-6 py-2 border border-white text-white rounded-full hover:bg-yellow-400 hover:text-black flex items-center space-x-2 ml-auto"
                            >
                                <span>Filter</span>
                                <ChevronDownIcon className="h-5 w-5 text-white" />
                            </motion.button>
                        </div>
                    </div>
                </div>



                {/* Reviews Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            className="border border-gray-700 p-4 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className="text-yellow-400">★</span>
                                ))}
                            </div>
                            <p className="text-gray-300">{review.text}</p>
                            <p className="mt-4 text-sm text-gray-400">
                                By {review.author}
                                <br />
                                On: {review.date} | {review.views} Views
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black"
                    >
                        View More
                    </motion.button>
                </div>
            </div>




            <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
                <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-6">
                    {/* Text Section */}
                    <div className="flex-1">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Mahindra XUV700 <span className="text-yellow-400">Related Videos</span>
                        </motion.h1>
                        <motion.div className="flex items-center justify-between space-x-7">
                            <motion.div
                                className="lg:w-1/2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img
                                    src="/pause.png" // Replace with actual car image URL
                                    alt="Mahindra XUV700"
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>

                            <motion.p
                                className="text-gray-400 text-sm md:text-base leading-relaxed"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Mahindra XUV700 2022 has videos of its detailed review, pros & cons, comparison & variant explained, test drive experience, features, specs, interior & exterior details, and more. Watch our latest Hindi video of Mahindra XUV700 to know price, safety features & more.
                            </motion.p>
                        </motion.div>

                    </div>

                    {/* Play Button and Car Image Section */}
                    <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/car6.png" // Replace with actual car image URL
                        alt="Mahindra XUV700"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
