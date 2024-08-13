import React from "react";
import useStore from "../store/store"; // Adjust the path if needed

const Navbar = () => {
  const { isDarkMode, toggleMode } = useStore();

  const handleConnectClick = () => {
    const phoneNumber = "+628111662298"; // Example: '+1234567890'
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank"); // Open the URL in a new tab
  };

  return (
    <nav
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } px-8 md:px-16 lg:px-24`}
    >
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Rahmat Adlin</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        <button
          onClick={toggleMode}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        </div>
        <button
          onClick={handleConnectClick}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
