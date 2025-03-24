import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Introduction */}
      <motion.p
        className="text-lg text-gray-300 max-w-2xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hi, I'm a passionate Full-Stack Developer and Software Engineer who loves building  
        intuitive, user-friendly, and scalable applications. I specialize in front-end development  
        and enjoy crafting beautiful and responsive user interfaces. 🚀
      </motion.p>

      {/* Technologies Section */}
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Technologies I Use</h3>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-md">React</span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-md">JavaScript</span>
          <span className="bg-purple-500 text-white px-4 py-2 rounded-md">Tailwind CSS</span>
          <span className="bg-red-500 text-white px-4 py-2 rounded-md">HTML & CSS</span>
          <span className="bg-yellow-500 text-white px-4 py-2 rounded-md">TypeScript</span>
          <span className="bg-indigo-500 text-white px-4 py-2 rounded-md">Node.js</span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
