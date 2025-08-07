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
import hero6 from "../assets/hero5.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import riversand from "../assets/riversand.webp";
import msand from "../assets/m-sand.webp";
import psand from "../assets/p-sand.webp";
import rockdust from "../assets/rockdust.webp";
import sands6 from "../assets/goldensands (5).webp";

const Home = () => {
  const aboutRef = useRef(null);
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
      description: "Crushed stone sand for high-strength concrete mixes."
    },
    {
      title: "P-Sand",
      image: psand,
      description: "Finely graded sand for smooth wall plastering and tiling."
    },
    {
      title: "Rockdust",
      image: rockdust,
      description: "Stone powder used as a compactable base and soil conditioner."
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-beige text-dark">

      <Helmet>
        <title>Kerala's Trusted Sand Supplier | Govt Approved</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <section className="relative min-h-[70vh] sm:min-h-screen w-full overflow-hidden">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 5000 }} loop className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              {loading ? (
                <Skeleton height="100%" width="100%" />
              ) : (
                <img src={img} alt={`Sand delivery slide ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-center px-4">
            Kerala's Premium Sand Supplier
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <motion.section ref={aboutRef} className="pt-20 pb-16 bg-white" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            {loading ? (
              <Skeleton height={300} />
            ) : (
              <img src={sands6} alt="Sigma Sand suppliers in Kerala" loading="lazy" className="rounded-xl shadow-xl w-full h-auto object-cover" />
            )}
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-4">About Our Company</h2>
            <p className="text-base sm:text-lg text-dark mb-4">We supply premium quality sand for construction and plastering across five districts in Kerala.</p>
            <p className="text-base sm:text-lg text-dark mb-4">Every order includes full documentation – GST and geology pass.</p>
            <ul className="text-sm sm:text-base space-y-2 text-dark">
              <li>✔ Serving: Trivandrum, Kollam, Alappuzha, Pathanamthitta, Kottayam</li>
              <li>✔ Geology pass and GST bill provided</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <ServicesSection />

      {/* Product Section */}
      <motion.section className="py-16 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2">Premium Construction Sands</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">Graded and processed for top-quality plastering, RCC, and filling.</p>
            </div>
            <a href="/products" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-medium text-sm sm:text-base">Explore All Products</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  {loading ? (
                    <Skeleton height="100%" />
                  ) : (
                    <img src={product.image} alt={`${product.title} - construction sand`} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm sm:text-base text-gray-700">{product.description}</p>
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
yyy