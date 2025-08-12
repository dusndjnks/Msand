import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

import riversand from "../assets/riversand.webp";
import msand from "../assets/m-sand.webp";
import psand from "../assets/p-sand.webp";
import bluemetal20 from "../assets/20mm-bluemetal.webp";
import bluemetal6 from "../assets/6mmbluemetal.webp";
import rockdust from "../assets/rockdust.webp";
import rockrubble from "../assets/product3.webp";

import row3 from "../assets/row3.webp"
import row2 from "../assets/row2.webp"
import row1 from "../assets/row1.webp"
import sands1 from "../assets/goldensands (1).webp"

const products = [
  {
    title: 'River Sand',
    description: 'Naturally available sand used for brick work, RCC, and other construction. Washed and filtered for superior quality.',
    image: riversand,
    uses: ['Concrete mixing', 'Brickwork', 'Plastering']
  },
  {
    title: 'M-Sand (Manufactured Sand)',
    description: 'High-quality crushed stone sand with perfect gradation, ideal for concrete and construction applications.',
    image: msand,
    uses: ['Concrete production', 'RCC works', 'Flooring']
  },
  {
    title: 'P-Sand (Plastering Sand)',
    description: 'Ultra-fine sand specially processed for smooth plaster finishes with excellent workability.',
    image: psand,
    uses: ['Wall plastering', 'Interior finishes', 'Putty mixing']
  },
  {
    title: '20mm Blue Metal',
    description: 'Premium quality coarse aggregate for concrete mixes and road construction with excellent compaction.',
    image: bluemetal20,
    uses: ['Concrete foundations', 'Road base', 'Drainage systems']
  },
  {
    title: '6mm Blue Metal',
    description: 'Smaller aggregate size perfect for precast concrete, tiles, and finishing applications.',
    image: bluemetal6,
    uses: ['Tile fixing', 'Terrazzo flooring', 'Decorative concrete']
  },
  {
    title: 'Rock Dust',
    description: 'Fine crushed stone powder ideal for compaction and as a base material for various construction needs.',
    image: rockdust,
    uses: ['Filling material', 'Base preparation', 'Landscaping']
  },
  {
    title: 'Rock Rubble',
    description: 'Durable and versatile aggregate for foundation works, landscaping, and erosion control with excellent strength.',
    image: rockrubble,
    uses: ['Retaining walls', 'Road embankments', 'Decorative features', 'Drainage systems']
  }
];

const qualityImages = [riversand, msand, bluemetal20];

const Product = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductClick = (productTitle) => {
    setSelectedProduct(productTitle);
    setFormData(prev => ({
      ...prev,
      product: productTitle
    }));
    setShowForm(true);
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Enhanced validation
  if (!formData.name.trim() || !formData.phone.trim()) {
    alert("Please fill in all required fields (Name and Phone)");
    return;
  }

  try {
    // Show loading state (you could add a state variable for this)
    // setSubmitting(true);
    
    // Using cors mode to actually get the response
    const response = await fetch("https://script.google.com/macros/s/AKfycbxx6HXwsXLZc3WEySLVXyfkTuPKAO9JXXdM0cMAliKBc9UxblUGJ9n13xolxOr9MqPe/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString()
    });

    // If using CORS mode, you can check response
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const result = await response.json();
    
    if (result.result !== "success") {
      throw new Error(result.message || "Form submission failed");
    }

    alert("Thank you for your enquiry! We will contact you soon.");
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      product: '',
      message: ''
    });
    setShowForm(false);
    
  } catch (error) {
    console.error("Submission error:", error);
    alert(`There was an error: ${error.message}. Please try again or contact us directly at ${contactPhone}`);
  } finally {
    // setSubmitting(false);
  }
};



  return (
    <div className="bg-[#f8f5f2] text-gray-800 font-sans">
      {/* Spacer for Navbar */}
      <div className="h-20 bg-white"></div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#742731] to-[#9a3a47] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Golden Sands & Aggregates</h1>
          <p className="text-xl md:text-2xl opacity-90">High-quality sand and aggregates supplied across South Kerala</p>
        </div>
      </section>

      {/* Products Grid - Redesigned to match rock rubble section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#742731] mb-3">Our Premium Products</h2>
          <div className="w-20 h-1 bg-[#742731] mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Quality construction materials for all your building needs
          </p>
        </div>

<div className="space-y-12">
  {products.map((product, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
    >
      {/* Left Side - Image */}
      <div className="md:w-1/2 h-80 md:h-[400px] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover scale-110"
          loading="lazy"
        />
      </div>


      {/* Right Side - Text */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#742731] ">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-6">
          {product.description}
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Common Uses
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          {product.uses.map((use, i) => (
            <li key={i}>{use}</li>
          ))}
        </ul>

        <button
          onClick={() => handleProductClick(product.title)}
          className="w-full md:w-auto bg-[#742731] hover:bg-[#5a1e26] text-white py-3 px-6 rounded-md transition-colors"
        >
          Enquire Now
        </button>
      </div>
    </motion.div>
  ))}
</div>
      </section>

      {/* Enquiry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#742731]">Product Enquiry</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#742731]"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#742731] hover:bg-[#5a1e26] text-white py-2 px-4 rounded-md transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#742731] mb-3">Quality Assurance</h2>
          <div className="w-20 h-1 bg-[#742731] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            All our materials undergo rigorous quality testing to ensure they meet industry standards.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full">
          {[
            { title: "Purity", value: "100%", image: row1 },
            { title: "Govt. Approved", value: "GST Invoice", image: row2 },
            { title: "Silt Content", value: "< 3%", image: row3 },
            { title: "Delivery", value: "On-Time", image: sands1 },
          ].map((item, index) => (
            <div key={index} className="relative w-full h-[280px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
                <div className="text-xl font-bold">{item.value}</div>
                <div className="text-sm">{item.title}</div>
              </div>
            </div>
          ))}
        </div> 
        <br />
      </section>  

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#742731] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Order Your Construction Materials?</h2>
          <p className="text-lg opacity-90 mb-8">
            Contact us today for the best quality sand and aggregates in Kerala.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+917837888666"
              className="bg-white text-[#742731] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/917837888666?text=Hi%2C%20I%27m%20interested%20in%20ordering%20construction%20materials."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#742731] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.38 0 0 5.38 0 12a11.93 11.93 0 0 0 1.64 6L0 24l6.25-1.63A11.9 11.9 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.92 9.92 0 0 1-5.08-1.37l-.36-.21-3.7.96.99-3.6-.23-.37A9.9 9.9 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.44-7.55c-.3-.15-1.79-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.36.23-.66.08a8.15 8.15 0 0 1-2.4-1.48 9.01 9.01 0 0 1-1.67-2.07c-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53s-.68-1.65-.93-2.28c-.24-.6-.49-.52-.68-.53l-.58-.01c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.24 3.1c.15.2 2.13 3.26 5.17 4.57.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.09 1.79-.73 2.04-1.44.25-.7.25-1.3.17-1.44-.08-.14-.27-.22-.56-.36z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;