import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setCurrentPage }) => {
  const links = ["home", "about", "contact", "blog", "privacy"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-xs text-blue-500 flex justify-between items-center px-6 md:px-8 py-4 shadow-lg z-50 rounded-full w-full max-w-[90vw]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold"
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <span className="text-blue-500">F</span>
          <span className="text-gray-400">&</span>
          <span className="text-yellow-400">F</span>
        </motion.h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 ml-8 text-yellow-400">
          <ul className="flex gap-8">
            {links.map((link, i) => (
              <motion.a
                href={`/${link === "home" ? "" : link}`}
                onClick={() => {
                  setCurrentPage(link);
                  setMenuOpen(false);
                }}
                key={link}
                className="cursor-pointer capitalize relative group transition-all"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeInOut" }}
              >
                {link}
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-blue-500 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 group-hover:after:left-0 group-hover:after:w-full after:transition-all after:duration-300" />
              </motion.a>
            ))}
          </ul>

          <motion.div
            className="p-3 bg-blue-500 rounded-full cursor-pointer shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <a href="https://t.me/FollowersForFreeBot" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-white text-xl" />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <motion.div
            className="p-3 bg-blue-500 rounded-full cursor-pointer shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <a href="https://t.me/fullstackdeveloperfirst" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-white text-xl" />
            </a>
          </motion.div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-yellow-400 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
  {menuOpen && (
    <>
      {/* Full screen backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/30 backdrop-blur-3xl z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 flex flex-col justify-center items-center bg-white/10 backdrop-blur-3xl p-6 gap-6 text-yellow-300 text-xl font-medium z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Exit button (top-right) */}
        <button
          className="absolute top-10 right-10 text-yellow-300 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Menu links */}
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:bg-blue-500 px-6 py-3 rounded-full capitalize hover:text-black transition list-none"
            onClick={() => {
              setCurrentPage(link);
              setMenuOpen(false);
            }}
          >
            {link}
          </li>
        ))}
      </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;
