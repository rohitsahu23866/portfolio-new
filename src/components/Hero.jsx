import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center px-6 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 text-center md:text-left w-full md:w-[650px]">
        {/* Profile Image */}
        <img
          className="w-36 h-36 md:w-44 md:h-44 rounded-full shadow-[0_0_5px_2px_rgb(0,191,255)]"
          src="/assets/pic.png"
          alt="Profile"
        />

        {/* Text Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            Hi, I'm <span className="text-blue-500">Susheel Sahu</span>
            <span className="inline-block waving-hand">👋</span>
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold mt-1 text-gray-900 dark:text-gray-200">
            Full-Stack Web Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
