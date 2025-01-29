import React, { useEffect, useRef } from 'react';
import { Close, Check } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
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
        <p className="text-sm sm:text-base font-medium uppercase tracking-widest text-gray-400">
          Why Choose Univens
        </p>
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Univens vs Other Agencies
        </h5>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-[720px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Discover why Univens is the trusted choice for businesses looking for tailored solutions, seamless processes, and expert-driven results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
        {/* Other Agencies Card */}
        <div className="flex flex-col p-8 bg-gray-950 rounded-xl shadow-xl relative overflow-hidden fade-in">
          <h5 className="text-xl sm:text-2xl font-semibold text-center mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Other Agencies
          </h5>
          <ul className="space-y-6">
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl text-red-600">
                <Close />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Lengthy onboarding processes delay project initiation.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl text-red-600">
                <Close />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Generic solutions fail to meet unique client needs.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl text-red-600">
                <Close />
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
              <div className="flex items-start justify-center text-3xl text-green-600">
                <Check />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Instant access to experts to start solving problems right away.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl text-green-600">
                <Check />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tailored solutions designed for your specific business needs.
              </p>
            </li>
            <li className="flex items-start gap-6">
              <div className="flex items-start justify-center text-3xl text-green-600">
                <Check />
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                Streamlined processes with no unnecessary hurdles or delays.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
