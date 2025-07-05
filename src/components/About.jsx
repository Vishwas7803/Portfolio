import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const timeline = [
  { year: "2022 - Present", title: "B.Tech in CSE", place: "GLA University" },
];

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 88 },
  { name: "React", level: 92 },
  { name: "Node.js", level: 87 },
];

const About = () => {
  return (
    <section className="py-16 text-white relative overflow-hidden bg-gradient-to-br from-teal-800 via-indigo-900 to-purple-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent)] opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* About Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          I'm Vishwas Sengar, a Fullstack Web Developer passionate about building high-performance web applications,
          solving complex problems, and designing seamless user experiences using modern technologies.
        </motion.p>

        {/* Timeline Section */}
        <div className="mt-12 space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow-xl flex items-center gap-6 border-l-4 border-blue-500 hover:bg-gray-700 transition duration-200"
            >
              <FaGraduationCap className="text-blue-400 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.place}</p>
                <span className="text-blue-400 font-semibold">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl font-bold text-center mt-16 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h3>

        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: `${skill.level}%` }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="bg-gray-800 rounded-full overflow-hidden shadow-lg"
            >
              <div className="flex justify-between px-4 py-2 text-sm font-semibold text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div
                className="h-2 bg-gradient-to-r from-blue-400 to-purple-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg flex items-center gap-6 border-b-4 border-green-500 hover:bg-gray-700 transition duration-200">
            <FaLaptopCode className="text-green-400 text-3xl" />
            <span className="text-lg text-gray-300">Fullstack Web Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
