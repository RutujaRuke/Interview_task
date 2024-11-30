import React from "react";
import { motion } from "framer-motion";

const CarDetail5 = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-10">
        {/* Header Section */}
        {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
          Here’s some
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white">
          Expert Advice!
        </h2>
        <p className="text-sm md:text-lg mt-4 text-gray-400">
          With so many segment-first features, drivetrains, seating, and variant
          options, the XUV700 is trying to please everyone. But does it get the
          basics right to first get into your consideration?
        </p>
      </motion.div> */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center md:items-start md:justify-between"
        >
          {/* Left Text Section */}
          <div className="md:w-1/2 text-left md:pl-16">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
              Here’s some
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white">
              Expert Advice!
            </h2>
            <p className="text-sm md:text-lg mt-4 text-gray-400">
              With so many segment-first features, drivetrains, seating, and variant
              options, the XUV700 is trying to please everyone. But does it get the
              basics right to first get into your consideration?
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/car3.png"
              alt="Placeholder"
              className="w-full max-w-2xl object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>


        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex space-x-6 md:space-x-16 mt-8 text-lg font-semibold  md:ml-[-600px]"
        >
          <button className="text-orange-500 border-b-2 border-orange-500 pb-1">
            Exterior
          </button>
          <button className="hover:text-orange-500">Interior</button>
          <button className="hover:text-orange-500">Performance</button>
          <button className="hover:text-orange-500">Verdict</button>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 max-w-4xl text-gray-300 text-sm md:text-base leading-relaxed"
        >
          <p>
            While the platform is all-new, Mahindra has decided to retain the
            essence of the XUV500 in the 700's design. Paying homage to the 500
            are the new headlamps where the “C” shape is maintained by the LED
            DRLs. However, these pack an all-LED beam and the indicators are
            dynamic as well. Complementing these are more LEDs in the fog lamps,
            which also feature cornering lights. The headlamps flow in the slats
            of the grille which features an aggressive design. The bonnet too gets
            strong creases which add muscle to the front look for the 700. Safe to
            say, you won’t be confusing the XUV700 with anything on the road when
            you see one at night.
          </p>
        </motion.div>

        {/* Car Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative mt-8"
        >
          <img
            src="/car4.png" // Replace with actual image URL
            alt="Car"
            className="w-full max-w-lg mx-auto object-cover rounded-lg shadow-lg mb-[-30px] md:mb-[-45px]"
          />
          <div className=" md:ml-[-30px] top-[100px] md:top-[-300px] left-0 right-0 rounded-full md:w-[550px] h-[80px] md:h-[130px] bg-gradient-to-b from-white via-transparent to-transparent opacity-80 shadow-2xl"></div>

        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-[-20px] mb-[-40px]"
        >
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition-all">
            View More
          </button>




        </motion.div>
      </div>
      <div className="bg-black text-white min-h-screen px-8 py-16 font-sans">
      {/* Title Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/car5.png" // Replace with your image URL
            alt="Mahindra XUV700"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold">Pros <span className="font-normal font-thin">and </span> Cons</h1>
          <p className="text-xl mt-2">Take on Mahindra XUV700</p>
          <p className="text-lg mt-4">
            If you are in the market looking for any kind of SUV for your family, the XUV700 first gets all the basics right and then impresses you with its segment-first features.
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-500 w-full my-8"></div>

      {/* Content Sections */}
      <div className="">

      {/* <div className="grid md:grid-cols-2 gap-12"> */}
        {/* Pros Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        > <div className="grid md:grid-cols-2 gap-10">
          <h2 className="text-greenCustom text-green-500 text-3xl md:pl-16 font-bold mb-4">Absolutely Amazing</h2>
          <ul className="space-y-4 md:pr-16  text-lg">
            <li>• Road presence - Sheer size with a commanding stance and loads of visual appeal</li>
            <li>• Airy cabin - More spacious than the Alcazar and almost as roomy as the Safari</li>
            <li>• Capable powertrains - Effortlessly power the bulky XUV700</li>
            <li>• Unique feel-good features - Offers features missing from rivals</li>
          </ul>
          </div>
        </motion.div>
        <div className="border-t border-gray-500 w-full my-8"></div>


        {/* Cons Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-10">
          <h2 className="text-redCustom text-red-500 text-3xl font-bold md:pl-16 mb-4">Could Have Been Better</h2>
          <ul className="space-y-4 md:pr-16 text-lg">
            <li>• Not the quietest diesel - Drivetrain lash when using the throttle</li>
            <li>• Firm ride quality - Can get bothersome at low speeds</li>
            <li>• Last row ingress/egress - Absence of sliding second row makes it worse</li>
          </ul>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
    </div>
    </>
  );
};

export default CarDetail5;
