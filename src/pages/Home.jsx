import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import BlogPost from "../components/Blogs";
import Reviews from "../components/Testimonials";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import riversand from "../assets/riversand.webp";
import msand from "../assets/m-sand.webp";
import psand from "../assets/p-sand.webp"
import rockdust from "../assets/rockdust.webp";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ContactForm from "../components/ContactForm";
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const aboutRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const heroImages = [hero1, hero2, hero3];
  const aboutImage = "https://floridaindependent.com/wp-content/uploads/2020/11/Sand-Suppliers.jpg";

  const whyChooseUsItems = [
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>),
      title: "Certified Quality",
      description: "Government-approved materials meeting all industry standards"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
      title: "On-Time Delivery",
      description: "Guaranteed logistics with real-time tracking"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
      title: "Full Documentation",
      description: "Complete legal paperwork with every shipment"
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>),
      title: "Competitive Pricing",
      description: "Best market rates with volume discounts"
    }
  ];

  const featuredProducts = [
  {
    title: "River Sand",
    image: riversand,
    description: "Naturally sourced sand ideal for plastering and brickwork. Offers excellent binding strength, fine texture, and minimal impurities. Preferred for residential and commercial plaster finish jobs.",
  },
  {
    title: "M-Sand",
    image: msand,
    description: "Crushed stone sand specially manufactured for load-bearing concrete mixes. Free from silt and clay, M-Sand provides high compressive strength and uniform particle size, making it ideal for RCC and block works.",
  },
  {
    title: "P-Sand",
    image: psand,
    description: "Finely graded plastering sand with ultra-smooth particles for flawless wall finishing and tile laying. P-Sand ensures better cohesion, crack resistance, and superior workability for internal and external rendering.",
  },
  {
    title: "Rockdust",
    image: rockdust,
    description: "High-grade stone powder used as a compactable base material for paving, concrete sub-layers, and soil conditioning. Rockdust offers excellent compaction, improved load distribution, and is a sustainable alternative to traditional fillers.",
  },
];


  const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="font-sans bg-beige text-dark">
      <Helmet>
        <title>Kerala's Trusted Sand Supplier | Govt Approved</title>
        <meta name="description" content="Premium quality, government-approved sand delivered across Kerala. Includes GST bill & geology pass." />
        <meta name="keywords" content="Kerala sand supplier, government approved sand, construction sand, plastering sand, GST geology pass, Kallambalam sand" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 5000 }} loop className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img src={img} alt={`slide-${idx}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold drop-shadow-lg"
            >
              Kerala's Premium Sand Supplier
            </motion.h1>
          </div>
        </div>
      </section>

      {/* About */}
      <motion.section
        ref={aboutRef}
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-8"> {/* Increased padding */}
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img src={aboutImage} alt="About our company" className="rounded-xl shadow-xl w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">About Our Company</h2>
              <p className="text-lg text-dark mb-4">Located at Vadakottukavu, NH Road Kallambalam, we supply premium quality sand for construction and plastering across five districts in Kerala.</p>
              <p className="text-lg text-dark mb-6">Our government-approved sand comes with complete documentation including geology pass and GST bill for your peace of mind.</p>
              <div className="space-y-3">
                <div className="flex items-start"><CheckIcon /><span>Serving: Trivandrum, Kollam, Alappuzha, Pathanamthitta, Kottayam</span></div>
                <div className="flex items-start"><CheckIcon /><span>Geology pass and GST bill provided</span></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

     {/* Featured Products – Refined */}
<motion.section
  className="py-20 bg-light"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto px-6">
    {/* Title Row */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
          Premium Construction Sands
        </h2>
        <div className="w-20 h-1 bg-primary mb-3" />
        <p className="text-gray-600 max-w-2xl">
          Select from a curated range of high-quality sands — precisely graded and processed to meet the most demanding construction, plastering, and filling needs.
        </p>
      </div>
      <a
        href="/products"
        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium transition shadow-md whitespace-nowrap"
      >
        Explore All Products
      </a>
    </div>

    {/* Product Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          {/* Image */}
          <div className="relative h-52 md:h-56 lg:h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-end">
              <h3 className="text-lg font-semibold text-white drop-shadow-md">
                {product.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="p-5">
            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>



      {/* Why Choose Us */}
      <motion.section
        className="bg-dark py-20 font-sans"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-8"> {/* Increased padding */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-5/12 text-center">
              <h2 className="text-3xl md:text-4xl font-display text-light mb-6">Why <span className="text-primary">Choose Our</span> Sand</h2>
              <p className="text-neutral mb-8">Trusted by construction firms and contractors across Kerala for premium quality and reliable service.</p>
              <>
                {showForm && <ContactForm />}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-primary-dark text-light px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  Request Quote
                </motion.button>
              </>
            </div>

            <div className="md:w-7/12 space-y-6">
              {whyChooseUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex items-start p-5 bg-dark hover:bg-primary rounded-xl transition-colors border border-primary hover:border-accent/30 shadow-md"
                >
                  <div className="bg-primary/10 p-2 rounded-lg mr-5">
                    <div className="text-accent">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">{item.title}</h3>
                    <p className="text-neutral">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <BlogPost />
      <Reviews />

      {/* Final CTA */}
      <motion.section
        className="py-20 bg-primary text-light"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-8 text-center"> {/* Increased padding */}
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Order Quality Sand?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Contact us today for government-approved sand with complete documentation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917837888666" className="bg-accent hover:bg-accent/90 text-primary px-10 py-4 rounded-md font-heading font-medium text-lg">Call: +91 7837 888 666</a>
            <a href="https://www.google.com/maps/place/Vadakottukavu,+Kallambalam,+Kerala" target="_blank" rel="noopener noreferrer" className="border-2 border-light text-light hover:bg-light/10 px-10 py-4 rounded-md font-heading font-medium text-lg">Visit: Vadakottukavu, NH Road Kallambalam</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;