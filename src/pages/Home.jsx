// Home.jsx
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import BlogPost from "../components/Blogs";
import Reviews from "../components/Testimonials";
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';

import hero1 from "../assets/hero1.webp";
import hero6 from "../assets/hero5.webp"
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import riversand from "../assets/riversand.webp";
import msand from "../assets/m-sand.webp";
import psand from "../assets/p-sand.webp"
import rockdust from "../assets/rockdust.webp";
import sands6 from "../assets/goldensands (5).png"

const Home = () => {
  const aboutRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const heroImages = [hero6, hero2, hero1, hero3];

  const featuredProducts = [
    {
      title: "River Sand",
      image: riversand,
      description: "Naturally sourced sand ideal for plastering and brickwork."
    },
    {
      title: "M-Sand",
      image: msand,
      description: "Crushed stone sand specially manufactured for load-bearing concrete mixes."
    },
    {
      title: "P-Sand",
      image: psand,
      description: "Finely graded plastering sand for flawless wall finishing and tile laying."
    },
    {
      title: "Rockdust",
      image: rockdust,
      description: "Stone powder used as a compactable base material for paving and soil conditioning."
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-beige text-dark">

      <Helmet>
        <title>Kerala's Trusted Sand Supplier | Govt Approved</title>
        <meta name="description" content="Premium quality, government-approved sand delivered across Kerala." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sigma Sand Suppliers",
          "image": "https://www.sigmasand.in/assets/hero1.webp",
          "description": "Supplier of government-approved sand with GST and geology pass.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vadakottukavu, NH Road",
            "addressLocality": "Kallambalam",
            "addressRegion": "Kerala",
            "postalCode": "695605",
            "addressCountry": "IN"
          },
          "telephone": "+91-7837-888-666",
          "url": "https://www.sigmasand.in"
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 5000 }} loop className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              {loading ? (
                <Skeleton height="100%" width="100%" />
              ) : (
                <img src={img} alt={`Construction sand slide ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold drop-shadow-lg">
            Kerala's Premium Sand Supplier
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <motion.section ref={aboutRef} className="pt-24 pb-20 bg-white" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            {loading ? <Skeleton height={320} /> : <img src={sands6} alt="Sand supplier office and trucks" loading="lazy" className="rounded-xl shadow-xl w-full h-auto object-cover" />}
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">About Our Company</h2>
            <p className="text-lg text-dark mb-4">Located at Vadakottukavu, NH Road Kallambalam, we supply premium quality sand across five districts in Kerala.</p>
            <p className="text-lg text-dark mb-6">Our sand comes with documentation including geology pass and GST bill.</p>
            <ul className="space-y-3">
              <li className="flex items-start">✓ Serving: Trivandrum, Kollam, Alappuzha, Pathanamthitta, Kottayam</li>
              <li className="flex items-start">✓ Geology pass and GST bill provided</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <ServicesSection />

      {/* Product Section */}
      <motion.section className="py-20 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">Premium Construction Sands</h2>
              <div className="w-20 h-1 bg-primary mb-3" />
              <p className="text-gray-600 max-w-2xl">High-quality sands — graded and processed for plastering, RCC, and sub-layering needs.</p>
            </div>
            <a href="/products" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition shadow-md">Explore All Products</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-52 md:h-56 lg:h-64 overflow-hidden">
                  {loading ? (
                    <Skeleton height="100%" />
                  ) : (
                    <img src={product.image} alt={`${product.title} sand in Kerala`} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" />
                  )}
                </div>
                <div className="p-5">
                  <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <WhyChooseUs />

      <BlogPost />

      <Reviews />

    </div>
  );
};

export default Home;
