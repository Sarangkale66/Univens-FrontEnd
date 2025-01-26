import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Comparison from './components/Comparison';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const ScrollRef = useRef(null);

  const handleScroll = (e) => {
    const { deltaY } = e;
    if (deltaY > 0) {
      gsap.to(ScrollRef.current, { y: -70, duration: 0.5 });
    } else {
      gsap.to(ScrollRef.current, { y: 0, duration: 0.5 });
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scroll-container">
<<<<<<< HEAD
      <div id='home'></div>
      <div className="loader-bar fixed top-0 left-0 w-0 h-1 bg-teal-500 z-50 transition-all duration-300 ease-in-out"></div>

      <div data-scroll-container className="tobg text-white font-sans min-h-screen flex flex-col">
        <Header />
        <div className="h-screen">
          <HeroSection />
          <PartnersSection />
        </div>
=======
      <div id="home"></div>
      <div data-scroll-container className="bg-gradient-to-b from-[#0a0a1a] to-black text-white font-sans min-h-screen flex flex-col">
        <Header ref={ScrollRef} />
        <HeroSection />
        <PartnersSection />
>>>>>>> 896e7e2d26498efac79667ba8f8ae999bed68a4c
        <TestimonialsSection />
        <Hero />
        <Cards />
        <Comparison />
        <Work />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
