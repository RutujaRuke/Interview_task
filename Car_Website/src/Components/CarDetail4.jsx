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


import React from "react";
import { motion } from "framer-motion";

const CarDetail4 = () => {
  const variants = [
    {
      name: "XUV700 MX",
      engine: "1999 cc, Manual, Petrol",
      price: "Rs.13.18 Lakh*",
      waiting: "More than 2 months waiting",
    },
    {
      name: "XUV700 MX Diesel",
      engine: "2198 cc, Manual, Diesel",
      price: "Rs.13.70 Lakh*",
      waiting: "More than 2 months waiting",
    },
    {
      name: "XUV700 AX3",
      engine: "1999 cc, Manual, Petrol",
      price: "Rs.15.28 Lakh*",
      waiting: "More than 2 months waiting",
    },
  ];

  const mileageData = [
    { fuel: "Diesel", transmission: "Manual", arai: "15.0 kmpl", city: "17.0 kmpl" },
    { fuel: "Diesel", transmission: "Automatic", arai: "17.19 kmpl", city: "16.57 kmpl" },
    { fuel: "Petrol", transmission: "Manual", arai: "13.0 kmpl", city: "15.0 kmpl" },
    { fuel: "Petrol", transmission: "Automatic", arai: "11.0 kmpl", city: "13.0 kmpl" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Car Variants Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold border-b-2 border-orange-500 inline-block pb-2">
          Car Variants
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-4"
      >
        {variants.map((variant, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold">{variant.name}</h2>
              <p className="text-sm text-gray-400">{variant.engine}</p>
              <p className="text-sm text-orange-500">{variant.waiting}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-6 mt-4 md:mt-0">
              <span className="text-lg font-semibold text-orange-500">
                {variant.price}
              </span>
              <button className="mt-2 md:mt-0 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                View Offers
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mileage Section */}
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
  );
};

export default CarDetail4;
