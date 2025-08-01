import React from "react";
import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img5 from "../assets/about5.jpeg";
import img4 from "../assets/about4.jpg";
import sandsupplier from "../assets/sandsupplier.mp4";

const AboutUs = () => {
  return (
    <main className="bg-light text-text-base font-sans">
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[65vh] overflow-hidden">
        <video
          src={sandsupplier}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-display font-semibold text-center leading-snug">
            Reliable Sand Supply <br /> for Every Construction Need
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
          Who We Are
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-text-light mb-4">
          We are South Kerala's trusted supplier of quality River Sand and M-Sand for residential, commercial, and infrastructure projects. Backed by years of experience and a reliable team, we ensure timely delivery, verified quality, and transparent pricing.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-text-light">
          Whether you're building a dream home or managing large-scale infrastructure, we have the logistics, manpower, and material to support your goals with precision and efficiency.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {[img1, img2, img4].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="rounded-xl shadow-md hover:shadow-xl transition duration-300 object-cover w-full h-64 lg:h-80"
          />
        ))}
      </section>

      {/* What We Do Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4 md:px-6"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-8">
            What We Do
          </h2>
          <ul className="space-y-4 text-lg md:text-xl font-medium text-light">
            <li>✔️ Supply premium River Sand, M-Sand & Rockdust</li>
            <li>✔️ On-site delivery using our owned truck fleet</li>
            <li>✔️ Ethical sourcing from certified quarries & riverbeds</li>
            <li>✔️ Full-scale support for housing to highway projects</li>
            <li>✔️ Consistent operations across all South Kerala districts</li>
          </ul>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="max-w-7xl mx-auto py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-heading text-primary mb-6">
          Our Commitment
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-text-light mb-4">
          We believe every construction deserves consistent, certified material. That’s why we source only from authorized depots and quarries—ensuring proper loading, safe transportation, and strict quality checks at every stage.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-text-light">
          Our logistics team works hand-in-hand with customers to meet timelines, reduce material waste, and support long-term success.
        </p>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serving <span className="text-[#742731]">All South Kerala</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From urban centers to rural sites — our trucks reach you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coverage List */}
            <div className="bg-white md:p-8 px-3 py-5 rounded-xl shadow-md h-full flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our Coverage Area
              </h3>
              <ul className="grid grid-cols-2 sm:gap-x-4 gap-y-4 flex-grow">
                {[
                  "Trivandrum",
                  "Kollam",
                  "Pathanamthitta",
                  "Alappuzha",
                  "Kottayam",
                ].map((district, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 text-base lg:text-lg px-2 py-1 rounded hover:bg-[#742731]/5 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#742731] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium text-gray-800">{district}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-[#742731] text-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Ready to Order?</h3>
              <p className="text-gray-200 mb-8">
                Get a free quote today. We'll reach out within 30 minutes to finalize your delivery.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+91 7837888666"
                  className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-100 text-[#742731] font-bold px-6 py-4 rounded-lg transition duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  CALL NOW: 78378 88666
                </a>
                <a
                  href="https://wa.me/917837888666?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20sand%20supply%20services.%20Could%20you%20please%20share%20more%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-lg transition duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  WHATSAPP ENQUIRY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
