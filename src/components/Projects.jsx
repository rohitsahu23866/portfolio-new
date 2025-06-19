import React, { useState } from "react";
import Card from "./Card";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Resume Builder SaaS",
    description:
      "A full-stack resume builder with React, TipTap, Tailwind CSS, and Flask backend for server-side PDF generation. Supports templates, rich formatting, and real-time preview.",
    link: "https://resume-builder-saas-delta.vercel.app/",
    image: "/assets/proj4.png", // Make sure this exists in public/assets/
    technologies: [
      <FaReact key="react" />,
      <SiTailwindcss key="tailwind" />,
      <FaPython key="python" />,
    ],
  },
  {
    title: "Calendar Scheduler",
    description:
      "A sleek calendar-based task scheduler with daily, weekly, and monthly views. Built with React and Tailwind, optimized for productivity.",
    link: "https://calendar-scheduler-alpha.vercel.app/",
    image: "/assets/proj3.png",
    technologies: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />],
  },
  {
    title: "Note-it",
    description:
      "A secure note-taking app built with the MERN stack. Features JWT auth, Markdown support, and CRUD functionality for managing your personal notes.",
    link: "https://notes-app-frontend-pquo.onrender.com/",
    image: "/assets/proj2.png",
    technologies: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
    ],
  },
  {
    title: "Employee Task Management System",
    description:
      "Role-based task management with separate dashboards for admin and employees. Built using MERN stack and optimized for team task coordination.",
    link: "https://employee-management-system-plum-ten.vercel.app/",
    image: "/assets/proj1.png",
    technologies: [
      <FaReact key="react" />,
      <FaNodeJs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
    ],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="flex flex-col items-center py-10 px-6 md:px-12 gap-10">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>

      {projects.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 px-6 py-2 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-400 hover:text-black transition-all"
        >
          {showAll ? "See Less ▲" : "See More ▼"}
        </button>
      )}
    </div>
  );
};

export default Projects;
