import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LinkedIn, GitHub, Twitter, CheckCircle } from "@mui/icons-material"; // Import Material Icons

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
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
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Ready to Solve Your Business Challenges?
        </h5>
        <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-300 max-w-[800px] mx-auto mb-8 opacity-80" style={{ fontFamily: 'Inter' }}>
          Get in touch with us now and start turning your ideas into action. Whether you need a quick fix or a comprehensive solution, we’ve got you covered.
        </p>
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-4 mb-8">
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 mb-8">
            <span className="inline-flex items-center space-x-2">
              <CheckCircle className="text-green-600" />
              <span>Customized Design</span>
            </span>

            <span className="inline-flex items-center space-x-2">
              <CheckCircle className="text-green-600" />
              <span>Ongoing Support</span>
            </span>

            <span className="inline-flex items-center space-x-2">
              <CheckCircle className="text-green-600" />
              <span>Fast Delivery</span>
            </span>
          </div>
        </div>
        <a
          href="#"
          className="px-6 py-3 bg-[#295AAD] block w-fit mx-auto text-white font-semibold rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Schedule Your Free Consultation
        </a>
      </section>

      <footer className="w-full py-6 px-4 relative bg-[#1E293B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 ml-5 style={{ fontFamily:'Montserrat, sans-serif' }}">Univens</h3>
            <p className="text-sm sm:text-base mb-6 ml-5 style={{ fontFamily:'inter' }}">
              Univens is here to help you grow your business with fast & reliable
              solutions. Let us take care of the details, so you can focus on what
              matters.
            </p>
            <a
              href="#"
              className="px-4 py-2 ml-5 bg-[#295AAD] block w-fit text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Contact Us →
            </a>
          </div>

          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 style={{ fontFamily:'Montserrat, sans-serif' }}">Join Our Community</h3>
            <p className="italic mb-4 style={{ fontFamily:'inter' }}">
              "Univens: Where Hustlers Turn Ideas into Reality."
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedIn className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="GitHub"
              >
                <GitHub className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="ml-5">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 style={{ fontFamily:'Montserrat, sans-serif' }}">Home</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <ul className="flex justify-center gap-4 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {showScroll && (
          <motion.button
            className="fixed z-[100000] bottom-8 right-8 bg-[#295AAD] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-500"
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
          >
            ↑
          </motion.button>
        )}
      </footer>
    </div>
  );
};

export default App;
