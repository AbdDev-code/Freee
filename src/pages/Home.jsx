import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRobot, FaThumbsUp } from "react-icons/fa";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const dataFunction = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://f-f-3.onrender.com/api/home');
      setData(response.data[0]);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFunction();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-20 text-2xl">
        Yuklanmoqda...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-20 text-2xl">
        Xatolik: {error}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <motion.div
      className="min-h-[65vh] bg-white/5 max-w-[90vw] mx-auto rounded-3xl backdrop-blur-xs text-white flex justify-center items-center px-4 md:px-8 py-8 md:py-12 shadow-lg z-40 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center w-full max-w-2xl md:max-w-[50vw] relative">
        {/* title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl 2xl:text-8xl font-bold mb-4 text-blue-500 relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
        >
          {data.title}
          <motion.span
            role="img"
            aria-label="wave"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute -top-12 right-4 sm:-top-14 sm:right-8 md:-top-20 md:right-12 text-4xl sm:text-5xl md:text-6xl"
          >
            👋
          </motion.span>
        </motion.h2>

        {/* p */}
        <p className="text-base sm:text-lg md:text-xl mb-6 text-yellow-500 px-2 sm:px-6 2xl:w-[800px] mx-auto">
          {data.desc}
        </p>

        {/* Robot icon */}
        <motion.div
          className="flex justify-center items-center mt-6 sm:mt-10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FaRobot className="text-blue-500 text-5xl sm:text-6xl md:text-7xl" />
          <span
            role="img"
            aria-label="rocket"
            className="absolute -top-10 right-4 sm:right-8 md:right-12 text-5xl sm:text-6xl md:text-7xl animate-bounce"
          >
            🚀
          </span>
        </motion.div>

        {/* Like icon */}
        <motion.div
          className="text-red-500 animate-pulse text-4xl sm:text-5xl absolute 2xl:-top-20 -top-10 left-1/5 -translate-x-1/2 sm:bottom-auto sm:left-10 sm:-top-6 sm:translate-x-0 -rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <FaThumbsUp />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
