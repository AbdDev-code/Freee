import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserCheck } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Privacy = () => {
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [policyData, setPolicyData] = useState(null);
  const [disclaimerData, setDisclaimerData] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://f-f-3.onrender.com/api/privacy'); // Replace with your actual API endpoint
      console.log(response);
      setPrivacyData(response.data[0]); 
      setPolicyData(response.data[0].policy);
      setDisclaimerData(response.data[0].disclaimer);
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

  if (!privacyData) return <div className="text-white text-center py-10">No data available</div>;

  return (
    <motion.div
      className="2xl:min-h-[65vh] bg-white/5 max-w-[90vw] mx-auto rounded-3xl backdrop-blur-xs text-white flex justify-center items-center px-4 md:px-6 py-4 shadow-lg z-40 relative"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="text-left w-full max-w-2xl md:max-w-[50vw] relative text-sm sm:text-base space-y-3">
        
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-green-400"
          variants={item}
        >
          {privacyData.title} 🚀
        </motion.h2>

        {/* Policy Section */}
        <motion.h3 className="text-white font-semibold text-base" variants={item}>
          {privacyData.title}
        </motion.h3>

        <motion.ul className="list-disc ml-5 text-gray-300 space-y-1" variants={container}>
          {policyData.map((policyData) => (
            <motion.li key={policyData._id} variants={item}>
              <b>{policyData.title}:</b> {policyData.desc}
            </motion.li>
          ))}
        </motion.ul>

        {/* Disclaimer Section */}
        <motion.h3 className="text-white font-semibold text-base" variants={item}>
          Disclaimer
        </motion.h3>

        <motion.ul className="list-disc ml-5 text-gray-300 space-y-1" variants={container}>
          {disclaimerData.map((disclaimerItem) => (
            <motion.li key={disclaimerItem._id} variants={item}>
              <b>{disclaimerItem.title}:</b> {disclaimerItem.desc}
            </motion.li>
          ))}
        </motion.ul>

        {/* Icons */}
        <motion.div
          className="flex justify-between items-center pt-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.div
            className="text-green-400 text-2xl animate-pulse"
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            <FaShieldAlt />
          </motion.div>

          <motion.div
            className="text-blue-400 2xl:text-6xl text-xl rotate-12 animate-bounce"
            transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
          >
            <FaUserCheck />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Privacy;
