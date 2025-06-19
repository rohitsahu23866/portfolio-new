import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center p-5 gap-6 md:gap-10 w-full">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white">Let's Connect</h2>

      {/* Social Links */}
      <div className="flex gap-5 md:gap-6">
        <a
          href="https://www.linkedin.com/in/susheel-sahu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/rohitsahu23866"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:susheelsahu2308@gmail.com"
          className="text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1Yh34Nk7rqodkh1ZbVa0T1rlsKsyxXUrr/view"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white border border-gray-600 px-4 py-2 rounded-lg text-sm md:text-base transition transform hover:scale-105 hover:border-white"
      >
        📄 Download Resume
      </a>
    </div>
  );
};

export default Contact;
