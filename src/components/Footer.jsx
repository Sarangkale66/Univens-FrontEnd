import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen text-white font-sans w-full">
      <section className="text-center py-16 px-4 sm:px-8 md:px-12">
        <h5
          className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          'Customized Design' With 'Customized Solutions'
        </h5>
        <p
          className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-300 max-w-[800px] mx-auto mb-8 opacity-80"
          style={{ fontFamily: "Inter" }}
        >
          Get in touch with us now and start turning your ideas into action.
          Whether you need a quick fix or a comprehensive solution, we’ve got
          you covered.
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mb-8">
          {["Customized Design", "Ongoing Support", "Fast Delivery"].map(
            (item, index) => (
              <span key={index} className="inline-flex items-center space-x-2">
                <CheckCircleIcon className="text-green-600" />
                <span>{item}</span>
              </span>
            )
          )}
        </div>
        <a
          href="https://calendly.com/teamunivens/30min"
          className="px-6 py-3 bg-[#295AAD] block w-fit mx-auto text-white font-semibold rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Schedule Your Free Consultation
        </a>
      </section>

      <footer className="w-full py-6 px-4 relative bg-[#1E293B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 ml-5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Univens
            </h3>
            <p
              className="text-sm sm:text-base mb-6 ml-5"
              style={{ fontFamily: "Inter" }}
            >
              Univens is here to help you grow your business with fast &
              reliable solutions. Let us take care of the details, so you can
              focus on what matters.
            </p>
            <a
              href="http://wa.me/919172725217"
              className="px-4 py-2 ml-5 bg-[#295AAD] block w-fit text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Contact Us →
            </a>
          </div>

<div className="text-center">
  <h3
    className="text-xl sm:text-2xl font-bold mb-4"
    style={{ fontFamily: "Montserrat, sans-serif" }}
  >
    Join Our Community
  </h3>
  <p className="italic mb-4" style={{ fontFamily: "Inter" }}>
    "Univens: Where Hustlers Turn Ideas into Reality."
  </p>
  <div className="flex justify-center space-x-4">
    {[
      { icon: <LinkedInIcon />, link: "https://www.linkedin.com/company/teamunivens/", label: "LinkedIn" },
      { icon: <WhatsAppIcon />, link: "http://wa.me/919172725217", label: "WhatsApp" },
      { icon: <InstagramIcon />, link: "https://www.instagram.com/teamunivens", label: "Instagram" },
    ].map((social, index) => (
      <a
        key={index}
        href={social.link}
        className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        aria-label={social.label}
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>
          <div className="ml-5">
            <h3
              className="text-xl sm:text-2xl font-bold mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Home
            </h3>
            <ul className="space-y-2">
              {["About", "Services", "Success Stories", "Contact"].map(
                (link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <ul className="flex justify-center gap-4 text-sm text-gray-400">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(
              (policy, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {policy}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {showScroll && (
          <motion.button
            className="fixed z-[100000] bottom-8 right-8 bg-[#295AAD] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-500"
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
            aria-label="Scroll to Top"
          >
            ↑
          </motion.button>
        )}
      </footer>
    </div>
  );
};

export default App;
