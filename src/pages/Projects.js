import { motion } from "framer-motion";

const projects = [
  { 
    title: "To-Do List App", 
    description: "A simple app to manage daily tasks.", 
    image: "https://via.placeholder.com/300", 
    link: "#", 
    github: "#" 
  },
  { 
    title: "Calculator", 
    description: "A functional calculator built with React.", 
    image: "https://via.placeholder.com/300", 
    link: "#", 
    github: "#" 
  },
  { 
    title: "Rock-Paper-Scissors Game", 
    description: "A fun interactive game.", 
    image: "https://via.placeholder.com/300", 
    link: "#", 
    github: "#" 
  },
  { 
    title: "Amazon Website Replica", 
    description: "A front-end replica of Amazon.", 
    image: "https://via.placeholder.com/300", 
    link: "#", 
    github: "#" 
  }
];

const Projects = () => {
  return (
    <div className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href={project.link} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Live Demo</a>
              <a href={project.github} className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">GitHub</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
