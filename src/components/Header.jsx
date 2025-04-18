import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useRef, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

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

  const  navigate = useNavigate();

  return (
    <div className="fixed w-screen px-10 md:px-0 z-[1000000]">
      <header className="flex flex-wrap justify-between items-center py-5 px-4 md:px-52">
        <h1 ref={headerRef} className="text-lg md:text-xl">Univens</h1>
        <button ref={buttonRef} onClick={() => window.open("https://wa.me/9172725217", "_blank")} className="bg-[#295AAD] rounded-full text-white py-2 px-4">
          Contact Us
        </button>
      </header>
    </div>
  );
});

export default Header;