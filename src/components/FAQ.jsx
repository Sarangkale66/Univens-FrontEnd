import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={headerRef} className="text-center px-6 mb-12">
      <button className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#000E23] rounded-3xl px-3 py-1.5 cursor-default" style={{ fontFamily: 'Roboto, sans-serif' }}>FAQ</button>
      <h5 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Got Questions? We’ve Got Answers.
      </h5>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-[720px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
        Find answers to the most common questions about our services, process, and how we can help you.
      </p>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, toggle, index, searchTerm }) => {
  const faqRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      faqRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 85%",
        },
      }
    );
  }, [index]);

  const handleToggle = () => {
    toggle();
    const content = faqRef.current.querySelector(".faq-content");
    if (!isOpen) {
      gsap.to(content, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  };

  const highlightSearchTerm = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 text-gray-800 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div ref={faqRef} className="rounded-lg mb-4 overflow-hidden shadow-lg transition-all duration-300">
      <div onClick={handleToggle} className="flex justify-between items-center p-5 cursor-pointer bg-gray-950 hover:bg-gray-900 transition-colors duration-200">
        <p className="text-gray-300 text-lg sm:text-base">
          {highlightSearchTerm(question, searchTerm)}
        </p>
        <div
          className="text-blue-500 font-bold text-xl"
          style={{
            transform: `rotate(${isOpen ? "45deg" : "0deg"})`,
            transition: "transform 0.3s ease",
          }}
        >
          +
        </div>
      </div>
      <div
        className="faq-content bg-gray-700 px-6 py-4 text-gray-400 text-sm sm:text-base"
        style={{ height: 0, overflow: "hidden", opacity: 0 }}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const faqSectionRef = useRef(null);

  const faqs = [
    {
      question: "How quickly can I be matched with an expert?",
      answer:
        "Within 24 Hours. Once you submit your request, we’ll immediately connect you with the right person for the job.",
    },
    {
      question: "What industries do you support?",
      answer:
        "We support all industries. Whether you're in tech, marketing, HR, or beyond, our network covers a broad range of services. ",
    },
    {
      question: "Is there a long-term commitment?",
      answer:
        "You choose the service you need, and we handle it according to your preferences — simple and efficient",
    },
    {
      question: "Do you offer international support?",
      answer:
        "Yes, our services are available globally, catering to diverse time zones and languages.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    gsap.fromTo(
      faqSectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div ref={faqSectionRef} className="px-6 mb-10">
      {filteredFAQs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === index}
          toggle={() => toggleFAQ(index)}
          index={index}
          searchTerm={searchTerm}
        />
      ))}

      {filteredFAQs.length === 0 && (
        <p className="text-gray-400 text-center">No FAQs found.</p>
      )}
    </div>
  );
};

const FAQFooter = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div ref={footerRef} className="text-center px-6">
      <p className="text-gray-400 text-base mb-6">
        Still have a question?
      </p>
      <button className="bg-[#295AAD] text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300">
        Ask a Question
      </button>
    </div>
  );
};

const FAQ = () => (
  <div id="faq" className="text-white min-h-screen py-16 bg-[#010102] ">
    <div className="container w-[80vw] mx-auto relative z-10">
    <div className="flex justify-center">
        <img className="h-[25vh] w-screen opacity-[50%] object-fill top-0 bg-cover filter brightness-30 contrast-125  " src="/img5.avif" style={{ position: "absolute", zIndex: -10 }} alt=""/>
    </div>
      <FAQHeader />
      <FAQSection />
      <FAQFooter />
    </div>
  </div>
);

export default FAQ;
