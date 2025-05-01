import { motion } from "framer-motion";
import { FaRegClock, FaTag } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get("https://f-f-3.onrender.com/api/blog");
        setBlogPosts(response.data[0].cards); // Accessing the cards array in the response
        setLoading(false);
        console.log(response.data[0].cards);  
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className="w-[80vw] text-xl text-center mx-auto">Loading...</div>;
  }

  return (
    <motion.div
      className="min-h-[70vh] max-w-[90vw] mx-auto rounded-3xl px-4 sm:px-6 py-12 bg-white/5 backdrop-blur-md text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-6xl mx-auto text-center space-y-12">
        {/* Sarlavha */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 flex justify-center items-center gap-3"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Latest Blog Posts
          <span className="animate-bounce text-4xl sm:text-5xl">📝</span>
        </motion.h2>

        {/* Blog kartalar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post._id}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left flex flex-col gap-3">
                {/* Category badge & date */}
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <FaTag className="text-yellow-400" />
                    {post.status === "active" ? "Active" : "Inactive"}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegClock className="text-blue-300" />
                    {new Date(post.date).toLocaleDateString()} {/* Formatting date */}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/80 text-sm sm:text-base line-clamp-3">
                  {post.desc}
                </p>

                {/* Button */}
                <button className={`mt-2 ${post.status === "Active" ? "text-blue-400 hover:text-blue-500" : "text-pink-400 hover:text-pink-500"}   text-sm sm:text-base underline underline-offset-2`}>
                  {post.status === "Active" ? "Read More" : "Coming Soon"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
