import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-indigo-900 via-purple-800 to-black overflow-hidden"
    >
      {/* Animated Background Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent)]"
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Name with Flip Effect */}
        <motion.h1
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Hi, I'm <span className="text-white">Vishwas Sengar</span>
        </motion.h1>

        {/* Title with Scale-In Effect */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="mt-4 text-2xl md:text-3xl text-gray-300"
        >
          <Typewriter
            words={[
              "Fullstack Web Developer",
              "React & MERN Stack",
              "Crafting Exceptional Digital Experiences",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </motion.h2>

        {/* Buttons with Bouncing Hover Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-8 flex justify-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg transition-all"
          >
            View My Work
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/19SAVGUdvrc24BRIOLowJ8Vjjc07pxN5r/view?usp=sharing"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold border-2 border-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-all"
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;