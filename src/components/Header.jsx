import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useRef, forwardRef } from "react";

gsap.registerPlugin(TextPlugin);

const Header = forwardRef((props, ref) => {
  const headerRef = useRef();
  const buttonRef = useRef();

  useGSAP(() => {
    gsap.from(headerRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });
  }, []);

  return (
    <div className="fixed w-screen px-4 md:px-10 z-[2]">
      <header className="flex flex-wrap justify-between items-center py-5 md:py-6 px-4 md:px-1 mb-6">
        <h1
          ref={headerRef}
          className="text-xl sm:text-2xl md:text-3xl font-semibold font-montserrat"
        >
          Univens
        </h1>
        <button
          ref={buttonRef}
          className="bg-[#295AAD] text-white py-2 px-6 rounded-full text-sm sm:text-base md:text-lg"
        >
          Contact Us
        </button>
      </header>
    </div>
  );
});

export default Header;
