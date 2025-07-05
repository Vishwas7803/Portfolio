import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Hover Glow Effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
          }}
          className="text-3xl font-extrabold text-white cursor-pointer drop-shadow-lg"
        >
          Vishwas.dev
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {["Home", "Projects"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#00d4ff" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg font-semibold text-white hover:text-blue-400 transition transform"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.1, color: "#00ff88" }} whileTap={{ scale: 0.9 }}>
            <a href="/contact" className="cursor-pointer text-lg font-semibold text-white hover:text-green-400 transition transform">
              Contact
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={30} className="text-white" /> : <FiMenu size={30} className="text-white" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-95 backdrop-blur-md py-6 text-center shadow-lg"
          >
            {["Home", "Projects"].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1, color: "#00d4ff" }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="block py-3 text-lg font-bold text-white hover:text-blue-400 transition transform"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.1, color: "#00ff88" }} whileTap={{ scale: 0.9 }}>
              <a
                href="/contact"
                className="block py-3 text-lg font-bold text-white hover:text-green-400 transition transform"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
