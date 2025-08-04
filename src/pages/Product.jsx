import React from 'react';
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

import row4 from "../assets/hero4.webp"
import row3 from "../assets/row3.webp"
import row2 from "../assets/row2.webp"
import row1 from "../assets/row1.webp"

import sands1 from "../assets/goldensands (1).webp"
import sands2 from "../assets/goldensands (2).webp"
import sands3 from "../assets/goldensands (3).webp"
import sands4 from "../assets/goldensands (4).webp"
import sands5 from "../assets/goldensands (5).webp"

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
  }
];

const qualityImages = [riversand, msand, bluemetal20];

const Product = () => {
  return (
    <div className="bg-[#f8f5f2] text-gray-800 font-sans">
      {/* Spacer for Navbar */}
      <div className="h-20 bg-white"></div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#742731] to-[#9a3a47] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Construction Materials</h1>
          <p className="text-xl md:text-2xl opacity-90">High-quality sand and aggregates supplied across South Kerala</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
            >
              <div className="relative h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{product.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-[#742731] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    Common Uses:
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {product.uses.map((use, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#742731] mr-2 mt-1">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

{/* Quality Assurance */}
<section className="py-16 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-[#742731] mb-3">Quality Assurance</h2>
    <div className="w-20 h-1 bg-[#742731] mx-auto"></div>
    <p className="max-w-2xl mx-auto mt-4 text-gray-600">
      All our materials undergo rigorous quality testing to ensure they meet industry standards.
    </p>
  </div>

  {/* Full-width 4 images with overlay points */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full">
    {[
      { title: "Purity", value: "100%", image: row1 },
      { title: "Govt. Approved", value: "GST Invoice", image: row2 },
      { title: "Silt Content", value: "< 3%", image: row3 },
      { title: "Delivery", value: "On-Time", image: row4 },
    ].map((item, index) => (
      <div key={index} className="relative w-full h-[280px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
          <div className="text-xl font-bold">{item.value}</div>
          <div className="text-sm">{item.title}</div>
        </div>
      </div>
    ))}
  </div>
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
