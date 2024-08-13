import emailjs from "emailjs-com";
import React, { useState } from "react";
import useStore from "../store/store"; // Adjust the path if needed
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const { isDarkMode } = useStore(); // Access Zustand state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
        },
        (error) => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <div
      className={`py-20 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      id="contact"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                isDarkMode
                  ? "from-green-400 to-blue-500"
                  : "from-green-600 to-blue-400"
              } mb-4`}
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope
                className={`inline-block ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                } mr-2`}
              />
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                rahmatadlin210@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone
                className={`inline-block ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                } mr-2`}
              />
              <span>+628111662298</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt
                className={`inline-block ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                } mr-2`}
              />
              <span>Tangerang Selatan, Indonesia</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2 rounded border focus:outline-none
                    focus:border-green-400 ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 rounded border focus:outline-none
                  focus:border-green-400 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-gray-100 border-gray-300"
                  }`}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2 rounded border focus:outline-none
                  focus:border-green-400 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-gray-100 border-gray-300"
                  }`}
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className={`bg-gradient-to-r ${
                  isDarkMode
                    ? "from-green-400 to-blue-500"
                    : "from-green-600 to-blue-400"
                } text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full`}
              >
                Send
              </button>
            </form>
            {status && <p className="mt-4 text-center">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
