import React from "react";
import HeroImage from "../assets/hero-image.png";
import useStore from '../store/store'; // Adjust the path if needed

const Hero = () => {
  const { isDarkMode } = useStore();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} text-center py-16`}>
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{"  "}
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-green-400 to-blue-500' : 'from-green-600 to-blue-400'}`}>
          Rahmat Adlin Pasaribu
        </span>
        , Full-Stack Developer
      </h1>
      <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          onClick={handleScrollToContact}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <a
          href="/CV-Rahmat Adlin Pasaribu.pdf"
          download="CV-Rahmat Adlin Pasaribu.pdf"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
