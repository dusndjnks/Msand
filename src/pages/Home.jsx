import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import BlogPost from "../components/Blogs";
import Reviews from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
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
  const [showForm, setShowForm] = useState(false);

  const heroImages = [hero6, hero2, hero1, hero3];

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
      description: "Naturally sourced sand ideal for plastering and brickwork...",
    },
    {
      title: "M-Sand",
      image: msand,
      description: "Crushed stone sand specially manufactured for load-bearing concrete mixes...",
    },
    {
      title: "P-Sand",
      image: psand,
      description: "Finely graded plastering sand with ultra-smooth particles...",
    },
    {
      title: "Rockdust",
      image: rockdust,
      description: "High-grade stone powder used as a compactable base material...",
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
        <link rel="preload" as="image" href={hero6} type="image/webp" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 5000 }} loop className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Hero Slide showing construction sand delivery image ${idx + 1}`}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
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

      {/* Other sections remain the same, just update image tags with better alt and loading="lazy" */}

      {/* Example: About section image */}
      <img
        src={sands6}
        alt="Team of certified sand suppliers in Kerala"
        className="rounded-xl shadow-xl w-full h-auto object-cover"
        loading="lazy"
      />

      {/* Example: Featured Products */}
      {featuredProducts.map((product, index) => (
        <img
          key={index}
          src={product.image}
          alt={`${product.title} - ${product.description.slice(0, 60)}...`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ))}

      {/* Your other content remains unchanged */}
      <ServicesSection />
      <BlogPost />
      <Reviews />
    </div>
  );
};

export default Home;
