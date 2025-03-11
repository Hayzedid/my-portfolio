import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white px-6">
      {/* Animated Name */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="text-blue-400">Azeez Idris Oluwasegun</span>
      </motion.h1>

      {/* Passion / Description */}
      <motion.p 
        className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate <span className="text-blue-400">Front-End  Developer</span> and <span className="text-blue-400">Software Engineering Enthusiast</span> who loves building scalable and user-friendly applications.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div 
        className="flex space-x-4"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 1 }}
      >
        <Link 
          to="/projects" 
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-semibold transition"
        >
          View My Work
        </Link>
        <Link 
          to="/contact" 
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-white text-lg font-semibold transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;

  