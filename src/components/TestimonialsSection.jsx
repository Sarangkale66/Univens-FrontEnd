import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Raj Warma",
    position: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    feedback:
      "Univens connected us with the right marketing experts at the perfect time. They made our growth seamless",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "Scale-up Founder",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    feedback: "We got exactly what we needed—no fuss, no delay. Univens just works!",
    rating: 4,
  },
  {
    name: "Michael Brown",
    position: "Tech Entrepreneur!",
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    feedback:
      "Univens helped us scale rapidly while keeping costs in check. Their expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Emily White",
    position: "E-commerce CEO.",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    feedback:
      "We couldn’t be happier with the results. Univens understands our business and always delivers above expectations.",
    rating: 5,
  },
  {
    name: "Rock Warner",
    position: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    feedback:
      "The team at Univens provided us with tailored solutions that were practical, effective, and transformative for our company.",
    rating: 5,
  },
  {
    name: "Anni Mava",
    position: "Business Director.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    feedback:
      "Univens’ attention to detail and commitment to our success made all the difference. They’ve been a true partner.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-3 text-yellow-500 text-xl">
    {[...Array(5)].map((_, index) =>
      index < rating ? <MdStar key={index} /> : <MdStarOutline key={index} />
    )}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gradient-to-r from-Gunmetal-900 text-white shadow-lg rounded-2xl p-6 text-center border border-gray-800 hover:shadow-xl transition-shadow duration-300">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      loading="lazy"
      className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-gray-800"
    />
    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
    <p className="text-gray-400 text-sm">{testimonial.position}</p>
    <p className="text-gray-300 mt-3">"{testimonial.feedback}"</p>
    <StarRating rating={testimonial.rating} />
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 h-screen flex items-center justify-center flex-col relative pt-10">
        <img className="h-[25vh] w-screen opacity-[50%] object-fill top-1/2 left-0 transform translate-y-full bg-cover filter brightness-30 contrast-125 z-[1]" src="/img5.avif" alt=""/>
        <button
          className="mt-4 text-[#dbdbe2] text-base md:text-lg bg-[#000E23] rounded-3xl px-3 py-1.5 cursor-default" style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          Testimonials
        </button>
        <div className="container mx-auto text-center z-[10]">
          <h5
           className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-2 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            What Our Clients Are Saying
          </h5>
          <p className="text-gray-400 text-xs text-center md:text-base mb-10 z-[4]">
            Discover the experiences and success stories of our clients working
            with Univens.
          </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30} 
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1000} 
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
