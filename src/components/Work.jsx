import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="mb-10 text-center px-4" ref={headerRef}>
      <p className="text-blue-400 text-sm uppercase">Business Models to Connect Over</p>
      <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
        How We Work Together
      </h1>
      <p className="text-gray-400 text-sm sm:text-base">
        Whether you need a one-time solution or ongoing support, we’ve got you
        covered. Choose the business model that works for you.
      </p>
    </div>
  );
};

const ImageSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div className="mb-10 flex justify-center px-4" ref={imageRef}>
      <img
        src="team-working.jpg"
        alt="Team working together"
        className="rounded-lg w-full max-w-xs sm:max-w-md md:max-w-xl shadow-lg"
      />
    </div>
  );
};

const Card = ({ title, description, icon, cardRef }) => (
  <div
    className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-blue-500 hover:shadow-xl"
    ref={cardRef}
  >
    <div className="w-10 h-10 flex items-center justify-center mb-4">
      <svg
        className="w-10 h-10 text-blue-500 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={icon}
        />
      </svg>
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);

const CardSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
      {[
        {
          title: "Contract-Based Work",
          description: "Get the expertise you need with the long-term commitment.",
          icon: "M12 4.5v15m7.5-7.5h-15",
        },
        {
          title: "Project-Based Work",
          description:
            "From building a website to launching a new marketing campaign, get it done.",
          icon: "M3 10l3-3m0 0l3 3m-3-3v12",
        },
      ].map((card, index) => (
        <Card
          key={index}
          {...card}
          cardRef={(el) => (cardsRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

const Work = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      background: "linear-gradient(to bottom, #1a202c, #2d3748, #4a5568)",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="text-white min-h-screen py-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto">
        <Header />
        <ImageSection />
        <CardSection />
      </div>
    </div>
  );
};

export default Work;
