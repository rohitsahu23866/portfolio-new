import React from "react";

const Card = ({ title, description, link, image, technologies }) => {
  return (
    <div
      className="w-full max-w-sm bg-gray-900/80 border border-gray-700/50 
      rounded-lg shadow-lg backdrop-blur-md transition-all duration-300 
      hover:scale-105 hover:border-gray-400 p-4 flex flex-col items-center 
      text-center gap-4 relative"
    >
      {/* Project Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/fallback.png"; // optional fallback image
          }}
        />
      </div>

      {/* Title & Description */}
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-gray-300 text-sm px-2">{description}</p>

      {/* Technologies Used */}
      <div className="flex flex-wrap gap-3 text-lg text-gray-400 justify-center">
        {technologies.map((icon, idx) => (
          <span key={idx} className="hover:text-white transition">
            {icon}
          </span>
        ))}
      </div>

      {/* View Project Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-blue-400 font-medium border border-blue-400 px-3 py-1.5 rounded-md 
        transition-all duration-300 hover:bg-blue-400 hover:text-black text-sm"
      >
        View Project →
      </a>
    </div>
  );
};

export default Card;
