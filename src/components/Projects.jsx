import React from "react";
import useStore from '../store/store'; // Adjust the path if needed
import employeeMSImage from "../assets/employee-ms.png";
import pintaraiImage from "../assets/pintar-ai.png";
import onlineStoreImage from "../assets/online-store.png";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 2,
    name: "Online Store + Admin",
    technologies: "Next JS, Typescript, Prisma ORM, Tailwind CSS",
    image: onlineStoreImage,
    github: "https://github.com/rahmatadlin/online-store-nextjs",
  },
  {
    id: 3,
    name: "Pintar AI",
    technologies: "Next JS, Typescript, Prisma ORM, Tailwind CSS",
    image: pintaraiImage,
    github: "https://github.com/rahmatadlin/Pintar-AI",
  },
];

const Projects = () => {
  const { isDarkMode } = useStore(); // Access the theme from Zustand

  return (
    <div
      className={`py-20 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
      id="project"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3
                className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {project.name}
              </h3>
              <p
                className={`text-gray-400 mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.technologies}
              </p>
              <a
                href={project.github}
                className={`inline-block bg-gradient-to-r ${
                  isDarkMode
                    ? "from-green-400 to-blue-500"
                    : "from-green-500 to-blue-600"
                } text-white px-4 py-2 rounded-full`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
