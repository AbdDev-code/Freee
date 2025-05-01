import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import ParticlesBg from "particles-bg";
const App = () => {
  // Sahifa holatini localStorage dan olish
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "home";
  });

  // Har safar sahifa o'zgarganda, localStorage ga yozamiz
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // Sahifani render qilish
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "blog":
        return <Blog />;
      case "privacy":
        return <Privacy />;
      
      default:
        return <Home />;
      
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white overflow-hidden">
      <ParticlesBg type="cobweb" bg={true} color="3B82F6" />

      {/* Navbar - unga sahifa o'zgartiruvchi funksiyani uzatamiz */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* Sahifa kontenti */}
      <main className="flex-grow pt-40 px-6 transition-all duration-700">
        {renderPage()}
      </main>

      {/* Footer - unga ham sahifa o'zgartiruvchi funksiyani uzatamiz */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
