import React, { useRef , useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import BlogPost from "../components/Blogs";
import Reviews from "../components/Testimonials";
import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp"
import hero3 from "../assets/hero3.webp"
import hero4 from "../assets/hero4.webp"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactForm from "../components/ContactForm"

const Home = () => {
  const aboutRef = useRef(null);
  const whyUsRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

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

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="font-sans bg-beige text-dark">
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
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold drop-shadow-lg">
              Kerala&apos;s Premium Sand Supplier
            </h1>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
      </section>

      <section className="bg-dark py-16 md:py-20 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-5/12 text-center">
              <h2 className="text-3xl md:text-4xl font-display text-light mb-6">Why <span className="text-primary">Choose Our</span> Sand</h2>
              <p className="text-neutral mb-8">Trusted by construction firms and contractors across Kerala for premium quality and reliable service.</p>
              <>
      {showForm && <ContactForm />}
      <button
        onClick={() => setShowForm(true)}
        className="bg-primary hover:bg-primary-dark text-light px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
      >
        Request Quote
      </button>
    </>
            </div>

            <div className="md:w-7/12 space-y-6">
              {whyChooseUsItems.map((item, index) => (
                <div key={index} className="flex items-start p-5 hover:bg-primary rounded-xl transition-colors border border-primary hover:border-accent/30">
                  <div className="bg-primary/10 p-2 rounded-lg mr-5">
                    <div className="text-accent">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">{item.title}</h3>
                    <p className="text-neutral">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogPost />
      <Reviews />

      <section className="py-20 bg-primary text-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Order Quality Sand?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Contact us today for government-approved sand with complete documentation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917837888666" className="bg-accent hover:bg-accent/90 text-primary px-10 py-4 rounded-md font-heading font-medium text-lg">Call: +91 7837 888 666</a>
            <a href="https://www.google.com/maps/place/Vadakottukavu,+Kallambalam,+Kerala" target="_blank" rel="noopener noreferrer" className="border-2 border-light text-light hover:bg-light/10 px-10 py-4 rounded-md font-heading font-medium text-lg">Visit: Vadakottukavu, NH Road Kallambalam</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
