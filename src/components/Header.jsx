import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import {React, useEffect, useRef, forwardRef } from 'react';
import { Link } from 'react-scroll';


const Header = forwardRef((props, ref) => {
  const headerRef = useRef();
  const buttonRef = useRef();
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
    <div className="fixed w-screen z-20">
    <header className="flex flex-wrap justify-between items-center py-5 px-4 md:px-52">
      <h1 ref={headerRef} className="text-lg md:text-xl">Univens</h1>
      <nav ref={ref} className="mt-4 md:mt-0">
        <ul className="flex flex-wrap gap-2 space-x-2 md:space-x-6 border-slate-500 rounded-full py-3 px-2 border overflow-hidden">
          {['home', 'testimonials', 'features', 'process', 'comparison', 'faq'].map((item, index) => (
            <li key={item} ref={(el) => (navItemsRef.current[index] = el)}>
              <Link     
                to={item}
                smooth={true}
                duration={500}
                className="text-white hover:text-blue-500 bg-blue-500 hover:bg-slate-50 rounded-full py-2 px-3 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        ref={buttonRef}
        className="mt-4 md:mt-0 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Contact Us
      </button>
    </header>
  </div>
  );
});

export default Header;
