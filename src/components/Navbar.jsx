import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[12vh] w-full flex items-center justify-start px-6 md:px-12 bg-starry backdrop-blur-md">
      {/* Name on the left */}
      <h1 className="text-xl md:text-2xl font-semibold text-white">
        Susheel Sahu
      </h1>
    </nav>
  );
};

export default Navbar;
