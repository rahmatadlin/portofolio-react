import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import useStore from '../store/store'; // Adjust the path if needed


const About = () => {
  const { isDarkMode } = useStore();

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-20`} id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a dedicated full-stack developer, crafting intuitive and
              dynamic web applications with a keen eye for both frontend and
              backend innovation. My goal is to deliver smooth, high-performance
              user experiences that resonate across all platforms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className={`grow rounded-full h-2.5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'w-10/12' : 'w-9/12'}`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className={`grow rounded-full h-2.5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'w-11/12' : 'w-10/12'}`}
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className={`grow rounded-full h-2.5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <div
                    className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 ${isDarkMode ? 'w-11/12' : 'w-10/12'}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className={`text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500`}
                >
                  1+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className={`text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500`}
                >
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className={`text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500`}
                >
                  2+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
