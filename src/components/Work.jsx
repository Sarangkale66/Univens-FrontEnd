import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkTogether() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-in"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="w-[80vw]  text-white py-16 px-4 md:px-16 mx-auto ">
      <div className=" text-center fade-in relative z-10">
        <button className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#000E23] rounded-3xl px-3 py-1.5 cursor-default" style={{ fontFamily: 'Roboto, sans-serif' }}>Business Models to Connect Over</button>
        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-2 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>How We Work Together</h5>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Whether you need a one-time solution or ongoing support, we’ve got you covered. Choose the business model that works for you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 items-center fade-in">
        <div>
          <img
            src="https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg?auto=compress&cs=tinysrgb&w=600"  // A high-quality teamwork image from Unsplash
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-lg shadow-lg fade-in">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9.75L8.5 12l2.75 2.25M15.5 12H8.5m11.25 7.5H4.25a2 2 0 01-2-2V6.25a2 2 0 012-2h15.5a2 2 0 012 2V17.5a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Contract-Based Work</h3>
            </div>
            <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">
              Get the expertise you need with the long-term commitment.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg fade-in">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V6.75a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 6.75v1.5m9 0H7.5m9 0a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0116.5 20.25h-9A2.25 2.25 0 015.25 18V10.5A2.25 2.25 0 017.5 8.25m0 0V6.75"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Project-Based Work</h3>
            </div>
            <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">
              From building a website to launching a new marketing campaign, get it done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}