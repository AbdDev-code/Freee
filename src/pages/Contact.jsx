import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://f-f-3.onrender.com/api/contact');
      console.log(response);
      setData(response.data[0]); // Contact ma'lumotini olamiz
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="text-white text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">Error: {error}</div>;

  return (
    <motion.div
      className="min-h-[65vh] max-w-[90vw] mx-auto rounded-3xl flex justify-center items-center bg-white/5 backdrop-blur-md text-white py-10 px-4 sm:px-6 md:px-10"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-8">
        
        {/* Sarlavha */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-blue-400 flex items-center justify-center gap-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"Contact Us"} {/* Contact sarlavhasi */}
          <span className="text-4xl sm:text-5xl animate-bounce">📞</span>
        </motion.h2>

        {/* Aloqa ma'lumotlari */}
        <motion.div
          className="space-y-4 text-yellow-300 text-base sm:text-lg"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data?.number && (
            <a
              href={`tel:${data.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 hover:text-blue-400 transition-colors duration-300"
            >
              <FaPhoneAlt /> <span>{data.number}</span>
            </a>
          )}

          {data?.email && (
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope /> <span>{data.email}</span>
            </a>
          )}

          {data?.address && (
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt /> <span>{data.address}</span>
            </div>
          )}
        </motion.div>

        {/* CTA - Telegram uchun tugma */}
        <motion.div
          className="text-white/80 text-base sm:text-lg px-2 sm:px-10 leading-relaxed space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            Have questions or need support? We’re here to help! You can reach out
            directly via Telegram or send us an email — we usually respond within
            24 hours.
          </p>

          <a
            href="https://t.me/fullstackdeveloperfirst"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
          >
            <FaTelegramPlane className="text-xl" />
            Message us on Telegram
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
