// import React from "react";
// import { motion } from "framer-motion";

// const CarDetail4 = () => {
//   const variants = [
//     {
//       name: "XUV700 MX",
//       engine: "1999 cc, Manual, Petrol",
//       price: "Rs.13.18 Lakh*",
//       waiting: "More than 2 months waiting",
//     },
//     {
//       name: "XUV700 MX Diesel",
//       engine: "2198 cc, Manual, Diesel",
//       price: "Rs.13.70 Lakh*",
//       waiting: "More than 2 months waiting",
//     },
//     {
//       name: "XUV700 AX3",
//       engine: "1999 cc, Manual, Petrol",
//       price: "Rs.15.28 Lakh*",
//       waiting: "More than 2 months waiting",
//     },
//   ];

//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="mb-6"
//       >
//         <h1 className="text-3xl font-bold border-b-2 border-orange-500 inline-block pb-2">
//           Car Variants
//         </h1>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="space-y-4"
//       >
//         {variants.map((variant, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="bg-gray-800 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">{variant.name}</h2>
//               <p className="text-sm text-gray-400">{variant.engine}</p>
//               <p className="text-sm text-orange-500">{variant.waiting}</p>
//             </div>
//             <div className="flex flex-col md:flex-row items-center md:gap-6 mt-4 md:mt-0">
//               <span className="text-lg font-semibold text-orange-500">
//                 {variant.price}
//               </span>
//               <button className="mt-2 md:mt-0 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
//                 View Offers
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="mt-6 text-center"
//       >
//         <button className="text-orange-500 font-semibold hover:underline">
//           View More ↓
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default CarDetail4;


// import React from "react";
// import { motion } from "framer-motion";

// const CarDetail4 = () => {
//   const variants = [
//     {
//       name: "XUV700 MX",
//       engine: "1999 cc, Manual, Petrol",
//       price: "Rs.13.18 Lakh*",
//       waiting: "More than 2 months waiting",
//     },
//     {
//       name: "XUV700 MX Diesel",
//       engine: "2198 cc, Manual, Diesel",
//       price: "Rs.13.70 Lakh*",
//       waiting: "More than 2 months waiting",
//     },
//     {
//       name: "XUV700 AX3",
//       engine: "1999 cc, Manual, Petrol",
//       price: "Rs.15.28 Lakh*",
//       waiting: "More than 2 months waiting",
//     },
//   ];

//   const mileageData = [
//     { fuel: "Diesel", transmission: "Manual", arai: "15.0 kmpl", city: "17.0 kmpl" },
//     { fuel: "Diesel", transmission: "Automatic", arai: "17.19 kmpl", city: "16.57 kmpl" },
//     { fuel: "Petrol", transmission: "Manual", arai: "13.0 kmpl", city: "15.0 kmpl" },
//     { fuel: "Petrol", transmission: "Automatic", arai: "11.0 kmpl", city: "13.0 kmpl" },
//   ];

//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       {/* Car Variants Section */}
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="mb-6"
//       >
//         <h1 className="text-3xl font-bold border-b-2 border-orange-500 inline-block pb-2">
//           Car Variants
//         </h1>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="space-y-4"
//       >
//         {variants.map((variant, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="bg-gray-800 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between"
//           >
//             <div>
//               <h2 className="text-lg font-semibold">{variant.name}</h2>
//               <p className="text-sm text-gray-400">{variant.engine}</p>
//               <p className="text-sm text-orange-500">{variant.waiting}</p>
//             </div>
//             <div className="flex flex-col md:flex-row items-center md:gap-6 mt-4 md:mt-0">
//               <span className="text-lg font-semibold text-orange-500">
//                 {variant.price}
//               </span>
//               <button className="mt-2 md:mt-0 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
//                 View Offers
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Mileage Section */}
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="mt-10"
//       >
//         <h2 className="text-3xl font-bold mb-2">Mahindra XUV700 Mileage</h2>
//         <p className="text-gray-400 mb-4">
//           The claimed ARAI mileage: <br />
//           The claimed ARAI mileage for the automatic variants:
//         </p>
//         <div className="overflow-x-auto">
//           <table className="w-full text-left text-gray-400">
//             <thead className="bg-gray-700 text-gray-300">
//               <tr>
//                 <th className="px-4 py-2">Fuel Type</th>
//                 <th className="px-4 py-2">Transmission</th>
//                 <th className="px-4 py-2">ARAI Mileage</th>
//                 <th className="px-4 py-2">City Mileage</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mileageData.map((data, index) => (
//                 <tr key={index} className="border-b border-gray-600">
//                   <td className="px-4 py-2">{data.fuel}</td>
//                   <td className="px-4 py-2">{data.transmission}</td>
//                   <td className="px-4 py-2">{data.arai}</td>
//                   <td className="px-4 py-2">{data.city}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CarDetail4;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline";

const CarDetail4 = () => {
  const [activeTab, setActiveTab] = useState("All Variants");

  // Sample data for variants
  const variants = [
    {
      name: "XUV700 MX",
      engine: "1999 cc, Manual, Petrol",
      waiting: "More than 2 months waiting",
      price: "Rs. 13.18 Lakh*",
    },
    {
      name: "XUV700 MX Diesel",
      engine: "2198 cc, Manual, Diesel",
      waiting: "More than 2 months waiting",
      price: "Rs. 13.70 Lakh*",
    },
    {
      name: "XUV700 AX3",
      engine: "1999 cc, Manual, Petrol",
      waiting: "More than 2 months waiting",
      price: "Rs. 15.28 Lakh*",
    },
  ];
  const mileageData = [
    { fuel: "Diesel", transmission: "Manual", arai: "15.0 kmpl", city: "17.0 kmpl" },
    { fuel: "Diesel", transmission: "Automatic", arai: "17.19 kmpl", city: "16.57 kmpl" },
    { fuel: "Petrol", transmission: "Manual", arai: "13.0 kmpl", city: "15.0 kmpl" },
    { fuel: "Petrol", transmission: "Automatic", arai: "11.0 kmpl", city: "13.0 kmpl" },
  ];


  return (
    <>
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen px-6 py-12">
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Mahindra XUV700 Variants</h1>
        <p className="text-gray-400 mt-2">
          Choose from the available models and explore offers.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 text-sm md:text-base font-medium border-b border-gray-700 pb-2 mb-6">
        {["All Variants", "Diesel Version", "Petrol Version", "Automatic Version"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
            } hover:text-yellow-400 transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Variant Details */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {variants.map((variant, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            {/* Variant Info */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold">{variant.name}</h3>
              <p className="text-gray-400 text-sm">{variant.engine}</p>
              <p className="text-gray-500 text-xs">{variant.waiting}</p>
            </div>

            {/* Price and Offer */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div>
                <p className="text-yellow-400 font-semibold">{variant.price}</p>
                <p className="text-xs text-gray-400">Get On Road Price*</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2"
              >
                <span>View Offers</span>
                <ChevronRightIcon className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* View More */}
      <motion.div
        className="flex justify-center mt-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="text-yellow-400 text-sm flex items-center space-x-1 hover:text-yellow-300">
          <span>View More</span>
          <ChevronDownIcon className="h-5 w-5" />
        </button>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <h2 className="text-3xl font-bold mb-2">Mahindra XUV700 Mileage</h2>
        <p className="text-gray-400 mb-4">
          The claimed ARAI mileage: <br />
          The claimed ARAI mileage for the automatic variants:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-400">
            <thead className="bg-gray-700 text-gray-300">
              <tr>
                <th className="px-4 py-2">Fuel Type</th>
                <th className="px-4 py-2">Transmission</th>
                <th className="px-4 py-2">ARAI Mileage</th>
                <th className="px-4 py-2">City Mileage</th>
              </tr>
            </thead>
            <tbody>
              {mileageData.map((data, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="px-4 py-2">{data.fuel}</td>
                  <td className="px-4 py-2">{data.transmission}</td>
                  <td className="px-4 py-2">{data.arai}</td>
                  <td className="px-4 py-2">{data.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
    
    </>
  );
  
};

export default CarDetail4;

