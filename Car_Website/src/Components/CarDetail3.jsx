// import React from "react";
// import { motion } from "framer-motion";

// const CarDetail3 = () => {
//     return (
//         <div className="relative bg-gradient-to-b from-black to-gray-900 text-white py-12 px-6 md:px-16 lg:px-32">
//             {/* Background Gradient */}
//             <div className="absolute inset-0">
//                 <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
//                 <div className="absolute inset-0">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 1440 320"
//                         className="w-full h-64 opacity-30"
//                     >
//                         <path
//                             fill="#4f46e5"
//                             fillOpacity="0.8"
//                             d="M0,32L1440,96L1440,320L0,320Z"
//                         ></path>
//                     </svg>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
//                 {/* Text Content */}
//                 <motion.div
//                     className="lg:w-1/2 space-y-4"
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <h1 className="text-3xl md:text-4xl font-bold mb-4">
//                         Mahindra XUV700 Price
//                     </h1>
//                     <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                         The price of Mahindra XUV700 starts at Rs. 13.18 Lakh and goes up to Rs. 24.58 Lakh. Mahindra XUV700 is offered in 23 variants - the base model of XUV700 is MX and the top variant Mahindra XUV700 AX7 Diesel AT Luxury Pack AWD which comes at a price tag of Rs. 24.58 Lakh.
//                     </p>
//                 </motion.div>

//                 {/* Car Image */}
//                 <motion.div
//                     className="lg:w-1/2"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     <img
//                         src="/car-image.png" // Replace with actual car image URL
//                         alt="Mahindra XUV700"
//                         className="w-full h-auto object-contain"
//                     />
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default CarDetail3;


import React from "react";
import { motion } from "framer-motion";

const CarDetail3 = () => {
    return (
        <div className="relative bg-gradient-to-b from-black to-gray-900 text-white py-12 px-6 md:px-16 lg:px-32">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                style={{
                    backgroundImage: "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjBfM2RfbW9kZXJuX3dhdmVfY3VydmVfYWJzdHJhY3RfaGFsZnRvbmVfZ3JhZGllbl8xZTJhY2M3Mi1jZTU3LTQ0NjItOGQzNS1lOTI4YzI5NzcxMTdfMS5qcGc.jpg')", // Replace with your image URL or import path
                }}
            ></div>

            {/* Overlay for Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <motion.div
                    className="lg:w-1/2 space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Mahindra XUV700 Price
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        The price of Mahindra XUV700 starts at Rs. 13.18 Lakh and goes up to Rs. 24.58 Lakh. Mahindra XUV700 is offered in 23 variants - the base model of XUV700 is MX and the top variant Mahindra XUV700 AX7 Diesel AT Luxury Pack AWD which comes at a price tag of Rs. 24.58 Lakh.
                    </p>
                </motion.div>

                {/* Car Image */}
                <motion.div
                    className="lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/car-image.png" // Replace with actual car image URL
                        alt="Mahindra XUV700"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default CarDetail3;
