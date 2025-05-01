import { motion } from "framer-motion";

const Footer = ({ setCurrentPage }) => (
  <motion.footer
    className="w-full rounded-2xl mb-5 max-md:my-10 bg-white/5 backdrop-blur-md text-center py-6 px-6 text-base md:text-lg text-white shadow-xl max-w-[90vw] mx-auto border border-white/10"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap text-center md:text-left">
      
      {/* Left Side - Text */}
      <p className="text-gray-400">
        © 2025 <span className="font-semibold text-blue-400">FreeFollowers</span> — Made with 
        <span className="inline-block animate-pulse mx-1">❤️</span> by <span className="text-yellow-400 font-semibold">F&F</span>
      </p>

      {/* Right Side - Links */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <a
          href="https://t.me/fullstackdeveloperfirst"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-yellow-400 transition-colors duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Telegram
        </a>

        <button
          onClick={() => setCurrentPage("privacy")}
          className="relative inline-block text-yellow-400 transition-colors duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Privacy Policy
        </button>

        <a
          href="https://t.me/FollowersForFreeBot"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-yellow-400 transition-colors duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Terms
        </a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
