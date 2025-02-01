import React, { useEffect, useRef } from 'react';
import { Star, Bolt } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Comparison = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll('.fade-in'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      id="comparison"
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 md:px-8 py-16 text-white"
      ref={sectionRef}
    >
      <div className="text-center fade-in">
       <button
            className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#000E23] rounded-3xl px-3 py-1.5 cursor-default"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
          Why Choose Univens
          </button>
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Why Entrepreneurs Choose Univens
        </h5>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-[720px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          We don’t just solve problems—we get things done. Univens gives you access to a trusted network of experts in every area of your business. From tech to marketing to HR, we streamline your journey with reliable solutions. No more stress. Just results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Other Agencies Card */}
        <div className="flex flex-col p-8 bg-gray-950 rounded-xl shadow-xl relative overflow-hidden fade-in">
          <h5 className="text-xl sm:text-2xl font-semibold text-center mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Agencies
          </h5>
          <ul className="space-y-6">
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl sm:text-4xl text-gray-500 drop-shadow-lg">
                <Star />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Lengthy onboarding processes delay project initiation.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl sm:text-4xl text-gray-500 drop-shadow-lg">
                <Star />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Generic solutions fail to meet unique client needs.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl sm:text-4xl text-gray-500 drop-shadow-lg">
                <Star />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Bureaucratic hurdles complicate collaboration and results.
              </p>
            </li>
          </ul>
        </div>

        {/* Univens Card */}
        <div className="flex flex-col p-8 bg-gray-950 rounded-xl shadow-xl relative overflow-hidden fade-in">
          <h5 className="text-xl sm:text-2xl font-semibold text-center mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Univens
          </h5>
          <ul className="space-y-6">
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl sm:text-4xl text-blue-500 drop-shadow-xl">
                <Bolt />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Instant Access to Experts – Stop searching. Start solving with experts you can trust.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl sm:text-4xl text-blue-500 drop-shadow-xl">
                <Bolt />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tailored Solutions, Every Time – Get exactly what you need, when you need it.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl sm:text-4xl text-blue-500 drop-shadow-xl">
                <Bolt />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                No Complex Processes – We make business support simple and straightforward.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
