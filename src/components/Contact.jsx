import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Contact Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mt-4"
        >
          Have a project to discuss or simply want to chat? Feel free to get in touch!
        </motion.p>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { icon: <FaEnvelope className="text-red-400 text-3xl" />, title: "Email", link: "mailto:vishwassengar0@gmail.com", color: "hover:shadow-red-400" },
            { icon: <FaLinkedin className="text-blue-400 text-3xl" />, title: "LinkedIn", link: "https://www.linkedin.com/in/vishwas-sengar-6b8182253", color: "hover:shadow-blue-400" },
            { icon: <FaGithub className="text-gray-400 text-3xl" />, title: "GitHub", link: "https://github.com/Vishwas7803", color: "hover:shadow-gray-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gray-800 p-5 rounded-lg shadow-lg flex items-center gap-4 transition ${item.color}`}
            >
              {item.icon}
              <div>
                <h4 className="text-lg font-semibold">
                  <a href={item.link} target="_blank" className="text-gray-400 hover:underline">
                    {item.title}
                  </a>
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Start a Conversation
          </h3>

          <form className="mt-6 space-y-4">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-md shadow-lg hover:shadow-blue-400 transition"
            >
              Start a Conversation
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;