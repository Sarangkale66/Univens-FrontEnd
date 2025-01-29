import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    text: "‘Univens connected us with the right marketing experts at the perfect time. They made our growth seamless.’",
    name: "Raj",
    role: "Startup Founder",
    image: "https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/Users%20DP/raj.jpg",
    rating: 5,
  },
  {
    text: "‘We got exactly what you needed—no fuss, no delay. Univens just works.’",
    name: "Priya",
    role: "Scale-up Founder",
    image: "https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/Users%20DP/priya.jpg",
    rating: 5,
  },
  {
    text: "‘Working with Univens was a game changer for our business. Their team truly understood our needs.’",
    name: "Emily",
    role: "Business Owner",
    image: "https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/Users%20DP/emily.jpg",
    rating: 5,
  },
  {
    text: "‘The level of professionalism and expertise at Univens exceeded our expectations. Highly recommend!’",
    name: "James",
    role: "CEO",
    image: "https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/Users%20DP/james.jpg",
    rating: 5,
  },
  {
    text: "‘Univens helped us streamline our processes, and the results speak for themselves.’",
    name: "Michael",
    role: "Operations Manager",
    image: "https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/Users%20DP/michele.jpg",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 seconds gap between slides
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonial = testimonialRef.current;
    if (testimonial) {
      // GSAP animation for more dynamic sliding effect with flowing motion
      gsap.fromTo(
        testimonial,
        {
          x: "100%", // Start offscreen to the right
          opacity: 0, // Start with zero opacity
          scale: 0.8, // Start slightly smaller for a subtle zoom-in effect
        },
        {
          x: "0%", // Move to the center
          opacity: 1, // Fade in the testimonial
          scale: 1, // End at normal size
          duration: 1.5, // Longer duration for a smooth effect
          ease: "power3.out", // Ease for a flowing movement
          stagger: 0.2, // Add slight stagger to elements like text
        }
      );
    }
    setIsLoading(false);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-12 h-screen flex items-center bg-gradient-to-b">
      <div className="container mx-auto text-center">
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
          What Our Clients Are Saying
        </h5>
        <p className="text-gray-400 text-sm md:text-base mb-10">
          Discover the experiences and success stories of our clients working with Univens.
        </p>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 border-4 border-t-4 border-blue-400 border-solid rounded-full animate-spin"></div>
          </div>
        )}

        <div
          ref={testimonialRef}
          className="mt-10 mx-auto p-6 md:p-10 rounded-lg max-w-lg md:max-w-2xl shadow-lg bg-[url('https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/Components/Component%201%20(1).png')] bg-cover bg-center"
        >
          <p className="text-lg md:text-xl italic mb-6 text-white">
            &ldquo;{testimonials[currentIndex].text}&rdquo;
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img
              src={`/bussinessPartners/${testimonials[currentIndex].image}`}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
