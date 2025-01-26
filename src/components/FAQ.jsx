import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQHeader = () => {
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
    <div ref={headerRef} className="text-center px-4 mb-12">
      <p className="text-blue-400 text-sm uppercase tracking-wide">
        Frequently Asked Questions
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
        Got Questions? We’ve Got Answers.
      </h1>
      <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
        Discover everything you need to know about our services, processes, and
        what makes us stand out.
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
        duration: 0.5,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 90%",
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
        <span key={i} className="bg-yellow-300 text-gray-800">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      ref={faqRef}
      className="bg-gray-800 rounded-lg mb-4 overflow-hidden shadow-lg"
    >
      <div
        onClick={handleToggle}
        className="flex justify-between items-center p-4 cursor-pointer"
      >
        <p className="text-gray-300 text-sm sm:text-base font-semibold">
          {highlightSearchTerm(question, searchTerm)}
        </p>
        <div
          className="text-blue-400 font-bold text-lg"
          style={{
            transform: `rotate(${isOpen ? "45deg" : "0deg"})`,
            transition: "transform 0.3s ease",
          }}
        >
          +
        </div>
      </div>
      <div
        className="faq-content bg-gray-700 px-4 py-2 text-gray-400 text-sm sm:text-base"
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
        "We strive to match you with the perfect expert within 24–48 hours.",
    },
    {
      question: "What industries do you support?",
      answer:
        "We support a wide range of industries, including technology, healthcare, and finance.",
    },
    {
      question: "Is there a long-term commitment?",
      answer:
        "No, there’s no long-term commitment. You can scale up or down based on your needs.",
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
    <div ref={faqSectionRef} className="px-4 mb-10">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ List */}
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

      {/* No Results Found */}
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
    <div ref={footerRef} className="text-center px-4">
      <p className="text-gray-400 text-sm sm:text-base mb-4">
        Still have a question?
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
        Ask a Question
      </button>
    </div>
  );
};

const FAQ = () => (
  <div id="faq" className="text-white min-h-screen py-12 bg-gray-900">
    <div className="container mx-auto">
      <FAQHeader />
      <FAQSection />
      <FAQFooter />
    </div>
  </div>
);

export default FAQ;
