import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Ajay Menon",
    location: "Trivandrum",
    review:
      "GoldenSands is our trusted partner for construction projects in Trivandrum. Consistent quality and timely delivery.",
  },
  {
    name: "Deepa Raj",
    location: "Kollam",
    review:
      "Their eco-friendly sand supply and quick logistics impressed us. Will definitely work with them again.",
  },
  {
    name: "Faisal K",
    location: "Pathanamthitta",
    review:
      "GoldenSands understands what a builder needs — reliability, quality, and communication.",
  },
  {
    name: "Sreejith V",
    location: "Kottayam",
    review:
      "Smooth service and responsive team. Highly recommend for anyone working on tight project deadlines.",
  },
  {
    name: "Reshma B",
    location: "Alappuzha",
    review:
      "Affordable rates and consistent quality make them our go-to sand supplier in the region.",
  },
  {
    name: "Nishad S",
    location: "Idukki",
    review:
      "Working with GoldenSands was seamless — from placing the order to final delivery.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-light font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark">
            Builders and developers across South Kerala trust us for quality and service.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          loop={true}
          className="pb-10"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 md:p-8 rounded-2xl flex flex-col gap-4 text-left shadow hover:shadow-lg border border-primary transition max-w-2xl mx-auto h-full">
                <p className="text-dark text-base italic leading-relaxed">
                  "{item.review}"
                </p>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-primary font-heading">
                    {item.name}
                  </h3>
                  <p className="text-dark text-sm">{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
