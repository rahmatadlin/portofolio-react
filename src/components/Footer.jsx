import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useStore from '../store/store'; // Adjust the path if needed

const Footer = () => {
  const { isDarkMode } = useStore(); // Access the dark mode state from Zustand

  return (
    <footer
      className={`py-8 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Rahmat
            </h3>
            <p
              className={`text-gray-400 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full-Stack Developer based in Indonesia, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className={`w-full p-2 rounded-l-lg ${
                  isDarkMode ? "bg-gray-800 border-gray-600" : "bg-gray-200 border-gray-300"
                } focus:outline-none focus:border-green-400`}
              />
              <button
                type="submit"
                className={`bg-gradient-to-r ${
                  isDarkMode ? "from-green-400 to-blue-500" : "from-green-500 to-blue-600"
                } text-white px-4 py-2 rounded-r-lg`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className={`border-t ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          } pt-4 flex flex-col md:flex-row justify-between items-center`}
        >
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &copy; {new Date().getFullYear()} Rahmat. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rahmat-adlin-pasaribu/"
              className={`${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rahmatadlin"
              className={`${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Privacy
            </a>
            <a
              href="#"
              className={`${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
