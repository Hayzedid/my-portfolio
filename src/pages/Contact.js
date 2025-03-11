import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <label className="block mb-2 text-lg">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
        />

        <label className="block mb-2 text-lg">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
        />

        <label className="block mb-2 text-lg">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="mt-6 flex space-x-4">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-2xl hover:text-blue-400"></i>
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-2xl hover:text-blue-400"></i>
        </a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
