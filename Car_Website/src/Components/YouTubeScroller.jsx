import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing right shift icon

const YouTubeScroller = () => {
  const scrollRef = useRef(null);

  const videoIds = [
    "3JZ_D3ELwOQ", // Example YouTube video IDs
    "3JZ_D3ELwOQ",
    "3JZ_D3ELwOQ",
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-black ">
      <div className="relative w-full max-w-7xl">
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="overflow-x-scroll flex gap-6 scrollbar-hide"
        >
          {videoIds.map((videoId, index) => (
            <div
              key={index}
              className="flex-none w-[350px] sm:w-[400px] h-[250px] sm:h-[300px] bg-black rounded-lg"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>

        {/* Right Shift Icon */}
        <button
          onClick={handleScroll}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default YouTubeScroller;
