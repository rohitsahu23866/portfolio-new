import React, { useState } from "react";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const techStack = [
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React.js" },
    { icon: <SiRedux className="text-purple-400" />, name: "Redux" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaPython className="text-yellow-300" />, name: "Python" },
    { icon: <FaAws className="text-orange-400" />, name: "AWS" },
    { icon: <SiDocker className="text-blue-300" />, name: "Docker" },
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? techStack : techStack.slice(0, 8);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-semibold text-white mb-8">My Tech-Stack</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-6">
        {visibleSkills.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 
            bg-transparent rounded-xl shadow-md 
            border border-gray-500 transition transform hover:scale-110"
          >
            <div className="text-6xl">{tech.icon}</div>
            <p className="mt-3 text-lg text-gray-300 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="text-sm text-cyan-400 hover:text-white border border-cyan-400 px-4 py-2 rounded transition"
      >
        {showAll ? "See Less ▲" : "See More ▼"}
      </button>
    </div>
  );
};

export default Skills;
