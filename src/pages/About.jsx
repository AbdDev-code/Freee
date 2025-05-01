import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import logo from "../assets/logo.jpg";

const AboutUs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataFunction = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://f-f-3.onrender.com/api/about'); // proxy orqali ishlaydi
      setData(response.data[0]); // ma'lumotni to'g'ri olamiz
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFunction();
  }, []);

  if (loading) return <div className="text-white text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">Error: {error}</div>;

  return (
    <motion.div
      className="min-h-[65vh] bg-white/5 max-w-[90vw] mx-auto rounded-3xl backdrop-blur-xs text-white flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-8 sm:py-10 shadow-lg z-50 gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Matn qismi */}
      <motion.div
        className="w-full md:w-1/2 space-y-4 text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 flex items-center justify-center md:justify-start gap-2">
          {data?.title}
          <span className="text-4xl sm:text-5xl animate-bounce inline-block">🚀</span>
        </h2>

        <p className="text-yellow-400 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0">
          {data?.desc1}
        </p>

        <p className="text-white/80 text-sm sm:text-base md:text-lg px-2 sm:px-0">
          {data?.desc2}
          <span className="inline-block animate-spin ml-2">🌟</span>
        </p>
      </motion.div>

      {/* Rasm qismi */}
      <motion.div
        className="w-2/3 sm:w-1/2 md:w-1/3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.img
          src={data?.img && data.img.trim() !== "" ? data.img : logo}
          alt="About Us"
          className="rounded-2xl sm:rounded-3xl w-full object-cover shadow-md"
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
