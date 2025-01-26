import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Comparison from "./components/Comparison";
import Work from "./components/Work";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateScrollPosition = () => {
      const currentScrollPosition = lenis.scroll;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollHeight(totalHeight);
      setScrollPosition(currentScrollPosition);
    };

    lenis.on('scroll', updateScrollPosition);

    const onScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onScroll);
    };

    requestAnimationFrame(onScroll);

    return () => {
      lenis.destroy();
      gsap.ticker.remove();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (scrollHeight > 0) {
      const progress = (scrollPosition / scrollHeight) * 100;
      gsap.to('.loader-bar', {
        width: `${progress}%`,
        duration: 0.1, 
      });
    }
  }, [scrollPosition, scrollHeight]);

  return (
    <div className="scroll-container">
      <div id='home'></div>
      <div className="loader-bar fixed top-0 left-0 w-0 h-1 bg-teal-500 z-50 transition-all duration-300 ease-in-out"></div>

      <div data-scroll-container className="tobg text-white font-sans min-h-screen flex flex-col">
        <Header />
        <div className="h-screen">
          <HeroSection />
          <PartnersSection />
        </div>
        <TestimonialsSection />
        <Hero/>
        <Cards />
        <Comparison />
        <Work/>
        <FAQ/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
