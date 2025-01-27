import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import {React, useEffect, useRef, forwardRef } from 'react';
import { Link } from 'react-scroll';


const Header = forwardRef((props, ref) => {
  const headerRef = useRef();
  const buttonRef = useRef();
  const animationRef = useRef(null);
  const navItemsRef =useRef([]);

  const updateButtonColor = (percentage) => {
    const color = `rgb(${Math.min(255, percentage * 2)}, ${Math.max(0, 255 - percentage * 2)}, 0)`;
    buttonRef.current.style.backgroundColor = color;
  };

  useGSAP(()=>{
    gsap.from(headerRef.current,{
      scale:0,
      opacity:0,
      duration:1
    });
    
    gsap.from(navItemsRef.current,{
      delay:0.8,
      stagger:0.05,
      y:-50,
      opacity:0
    })
    
    gsap.from(buttonRef.current,{
      scale:0,
      opacity:0,
      duration:1
    });
  })

  return (
    <div className="fixed w-screen z-20 px-10 md:px-0">
    <header className="flex flex-wrap justify-between items-center py-5 px-4 md:px-52">
      <h1 ref={headerRef} className="text-lg md:text-xl">Univens</h1>
      <nav ref={ref} className="hidden md:flex md:justify-center md:items-center">
        <ul className="flex flex-wrap gap-1">
          {['home', 'testimonials', 'features', 'process', 'comparison', 'faq'].map((item, index) => (
            <li key={item} ref={(el) => (navItemsRef.current[index] = el)} className="flex justify-center items-center">
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="flex justify-center items-center px-5 py-3 text-white font-bold text-center cursor-pointer hover:scale-75"
                style={{
                  transform: "skew(-20deg)",
                  borderRadius: "1px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  border: "1px solid #3d3d3d",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        ref={buttonRef}
        className="bg-[#295AAD] text-white py-2 px-4 rounded-sm"
      >
        Contact Us
      </button>
    </header>
  </div>
  );
});

export default Header;
