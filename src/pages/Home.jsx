import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import BlogPost from "../components/Blogs";
import Reviews from "../components/Testimonials";
import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp"

const Home = () => {
  const aboutRef = useRef(null);
  const whyUsRef = useRef(null);

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

  const heroImages = [
    hero1,
    hero2,
    "https://innewsweekly.com/wp-content/uploads/2020/11/Sand-Suppliers.jpg",
    "https://images.pexels.com/photos/25559745/pexels-photo-25559745.jpeg"
  ];

  const aboutImage = "https://floridaindependent.com/wp-content/uploads/2020/11/Sand-Suppliers.jpg";

  const whyChooseUsItems = [
    {
      title: "Government Approved",
      description: "Our sand meets all government quality standards for construction use"
    },
    {
      title: "Complete Documentation",
      description: "Every delivery comes with geology pass and GST bill for your records"
    },
    {
      title: "Wide Distribution",
      description: "Serving five districts with reliable and timely deliveries"
    },
    {
      title: "Quality Assurance",
      description: "Consistent quality that passes all construction material tests"
    }
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="font-sans bg-beige text-dark">
      
      <section className="relative h-screen w-full overflow-hidden">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="absolute inset-0 w-full h-full z-0"
      >
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold drop-shadow-lg">
            Kerala&apos;s Premium Sand Supplier
          </h1>
          {/* Optional button — remove if not needed */}
          <button className="mt-8 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={aboutImage}
                alt="About our company"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">About Our Company</h2>
              <p className="text-lg text-dark mb-4">
                Located at Vadakottukavu, NH Road Kallambalam, we supply premium quality sand for construction and plastering across five districts in Kerala.
              </p>
              <p className="text-lg text-dark mb-6">
                Our government-approved sand comes with complete documentation including geology pass and GST bill for your peace of mind.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckIcon />
                  <span>Serving: Trivandrum, Kollam, Alappuzha, Pathanamthitta, Kottayam</span>
                </div>
                <div className="flex items-start">
                  <CheckIcon />
                  <span>Geology pass and GST bill provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Why Choose Us?</h2>
            <p className="max-w-2xl mx-auto text-lg">
              What makes us the preferred choice for builders and developers.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl flex flex-col items-center text-center shadow hover:shadow-lg border border-primary"
              >
                <svg
                  className="mb-4 w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l2 2 4-4" />
                </svg>
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogPost />
      <Reviews />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Order Quality Sand?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact us today for government-approved sand with complete documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917837888666"
              className="bg-accent hover:bg-accent/90 text-primary px-10 py-4 rounded-md font-heading font-medium text-lg"
            >
              Call: +91 7837 888 666
            </a>
            <a
              href="https://www.google.com/maps/place/Vadakottukavu,+Kallambalam,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-light text-light hover:bg-light/10 px-10 py-4 rounded-md font-heading font-medium text-lg"
            >
              Visit: Vadakottukavu, NH Road Kallambalam
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
