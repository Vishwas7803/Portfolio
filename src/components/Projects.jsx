import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { image } from "framer-motion/client";

const projects = [
  {
    title: "Todo List",
    description: "A responsive task manager with a smooth UI and API integration.",
    image: image3,
    link: "https://todo-git-main-vishwas7803s-projects.vercel.app/",
  },
  {
    title: "Calculator",
    description: "A web app for students to calculate sum easily.",
    image: image1,
    link: "https://calculator-git-main-vishwas7803s-projects.vercel.app/",
  },
  {
    title: "ChatBot",
    description: "A web app for students to calculate their CPI easily.",
    image: image2,
    link: "https://chatly-pi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-purple-900 via-indigo-800 to-cyan-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-orange-300 to-pink-400 text-transparent bg-clip-text"
        >
          Work Portfolio
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { delay: 0.3, staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-600 transition-all duration-300 
              hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover rounded-lg mb-4 border border-gray-500 shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-cyan-400">{project.title}</h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              
              {/* View Project Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-5 py-2 rounded-lg shadow-lg transition hover:scale-105 hover:shadow-2xl"
                whileHover={{ y: -3 }}
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
