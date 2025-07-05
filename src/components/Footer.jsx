import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative py-8 text-center text-white"
      style={{
        background: "radial-gradient(circle at center, #1e293b, #0f172a)",
        boxShadow: "0px -2px 20px rgba(0, 255, 255, 0.3)",
      }}
    >
      <div className="container mx-auto">
        {/* Name & Role with Sliding Effect */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text drop-shadow-md"
        >
          Vishwas Sengar
        </motion.h2>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-gray-300 text-lg font-semibold"
        >
          Fullstack Web Developer
        </motion.p>

        {/* Social Links with Slide-in Effect */}
        <div className="flex justify-center mt-4 space-x-6">
          {[
            { icon: <FaGithub />, link: "https://github.com/Vishwas7803" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vishwas-sengar-6b8182253" },

          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-3xl font-bold"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              whileHover={{
                scale: 1.3,
                rotate: 5,
                textShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright with Fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-6 text-sm text-gray-300 font-bold"
        >
          © {new Date().getFullYear()} Vishwas Sengar. All Rights Reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
