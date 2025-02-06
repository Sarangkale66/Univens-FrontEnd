import React, { useEffect, Suspense, lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
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

const Hero = lazy(() => import('./components/Hero'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));

function App() {
  const handleSelection = (e) => e.preventDefault();

    const { data, isLoading, isError, error } = useQuery({
      queryKey: ['serverConnection'],
      queryFn: async () => {
        const response = await axios.get('http://localhost:8080/');
        return response.data;
      },
      retry: true, 
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), 
      onSuccess: (data) => {
        console.log("Connected:", data);
      },
      onError: (error) => {
        console.error("Error:", error);
      },
    });

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
