import React, { useEffect, Suspense, lazy } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import Cards from './components/Cards';
import Comparison from './components/Comparison';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AnimatedLoader from './components/AnimatedLoader';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = import.meta.env.VITE_API_URL;
const Hero = lazy(() => import('./components/Hero'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
import { initGA, logPageView } from "./gtag";

function App() {
  const handleSelection = (e) => e.preventDefault();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    document.addEventListener('selectstart', handleSelection);
    
    initGA();
    logPageView();
    
    return () => {
      lenis.destroy();
      document.removeEventListener('selectstart', handleSelection);
    };
  }, []);

  return (
      <div className="scroll-container pb-0">
        <div
          data-scroll-container
          className="bg-[#010102] text-white font-sans min-h-screen flex flex-col pb-0"
        >
          <div className="BG w-full overflow-hidden relative">
            <div className="glow-quarter"></div>
            <div className="glow-inner"></div>
            <Header />
            <HeroSection />
          </div>
            <PartnersSection />
          <Suspense fallback={<AnimatedLoader />}>
            <TestimonialsSection />
          </Suspense>
          <Suspense fallback={<AnimatedLoader />}>
            <Hero />
          </Suspense>
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