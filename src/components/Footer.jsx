import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full flex flex-col items-center text-center bg-starry text-gray-300 py-6 px-4">
      {/* Navigation Links */}
      <div className="flex gap-6 text-sm md:text-base mb-4">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>

      {/* Social Links */}
      <div className="flex gap-5 mb-4">
        <a href="https://www.linkedin.com/in/susheel-sahu" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="text-gray-400 hover:text-white transition transform hover:scale-110" />
        </a>
        <a href="https://github.com/rohitsahu23866" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="text-gray-400 hover:text-white transition transform hover:scale-110" />
        </a>
        <a href="mailto:susheelsahu2308@gmail.com">
          <FaEnvelope size={24} className="text-gray-400 hover:text-white transition transform hover:scale-110" />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="border border-gray-600 text-white rounded-xl py-2 px-5 transition-all hover:border-white hover:opacity-90 hover:scale-105 mb-4"
      >
        Back to Top ↑
      </button>

      {/* Copyright */}
      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Susheel Sahu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
