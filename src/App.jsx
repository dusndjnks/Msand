import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { FaWhatsapp } from "react-icons/fa";
import AboutUs from "./pages/About";
import BlogPage from "./pages/Blog";

function App() {
  return (
    <div className="App relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/917837888666?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20sand%20supply%20services.%20Could%20you%20please%20share%20more%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

export default App;
