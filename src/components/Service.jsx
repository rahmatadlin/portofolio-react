import React, { useState } from "react";
import useStore from '../store/store'; // Adjust the path if needed


const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Service = () => {
  const { theme } = useStore(); // Access the theme from Zustand
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  const handleReadMoreClick = (id) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <div
      className={`py-20 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      id="service"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 ${
                expandedServiceId === service.id ? "h-auto" : "h-40"
              } ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
            >
              <div
                className={`text-right text-2xl font-bold text-transparent bg-clip-text ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-green-600 to-blue-400"
                    : "bg-gradient-to-r from-green-400 to-blue-500"
                }`}
              >
                {service.id}
              </div>
              <h3
                className={`mt-2 text-2xl font-bold text-transparent bg-clip-text ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-green-400 to-blue-500"
                    : "bg-gradient-to-r from-green-600 to-blue-400"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-2 ${expandedServiceId === service.id ? "block" : "hidden"} ${
                  theme === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {service.description}
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleReadMoreClick(service.id);
                }}
                className={`mt-4 inline-block cursor-pointer ${
                  theme === "dark"
                    ? "text-green-400 hover:text-blue-500"
                    : "text-green-600 hover:text-blue-700"
                }`}
              >
                {expandedServiceId === service.id ? "Show Less" : "Read More"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
