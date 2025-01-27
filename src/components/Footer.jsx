import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="flex flex-col min-h-screen text-white font-sans">
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Ready to Solve Your Business Challenges?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Contact us today to start crafting your solutions. Whether you need a
          quick fix or a comprehensive solution, we’ve got you covered and
          customized.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
              ✔
            </span>
            <span>Customized Design</span>
          </span>

          <span className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
              ✔
            </span>
            <span>Ongoing Support</span>
          </span>

          <span className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
              ✔
            </span>
            <span>Fast Delivery</span>
          </span>
        </div>
        <a
          href="#"
          className="px-6 py-3 bg-[#295AAD] block w-fit mx-auto text-white font-semibold rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Schedule Your Free Consultation
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 ml-5">Univens</h3>
            <p className="text-sm mb-6 ml-5">
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

          {/* Middle Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
            <p className="italic mb-4">
              "Univens: Where Hustlers Turn Ideas into Reality."
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.243c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.243h-3v-4.5c0-1.08-.882-1.96-1.96-1.96h-.08c-1.08 0-1.96.88-1.96 1.96v4.5h-3v-9h3v1.36c.88-.88 2.16-1.36 3.36-1.36h.08c2.42 0 4.4 1.98 4.4 4.4v4.6z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="GitHub"
              >
                {/* GitHub Icon */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.405 1.021.006 2.048.139 3.006.405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.767.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.22v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="Twitter"
              >
                {/* Twitter Icon */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.203-4.92 4.917 0 .386.045.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.725-.666 1.561-.666 2.457 0 1.694.863 3.188 2.175 4.065-.802-.026-1.555-.246-2.214-.615v.062c0 2.367 1.685 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.615-.031-.916-.088.631 1.953 2.445 3.376 4.604 3.415-1.68 1.319-3.809 2.104-6.102 2.104-.394 0-.779-.023-1.17-.067 2.179 1.396 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.014-.632.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="ml-5">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
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

        {/* Legal Links */}
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

        {/* Back to Top Button */}
        {showScroll && (
          <motion.button
            className="fixed bottom-8 right-8 bg-[#295AAD] text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
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