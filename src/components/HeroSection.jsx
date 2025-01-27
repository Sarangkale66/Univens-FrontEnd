import React from 'react';
import Typewriter from 'typewriter-effect';
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
    <div className="text-center py-5 px-10 flex-grow flex flex-col mt-24 items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/800x600')" }} >

      <h1 className='relative text-4xl text-gray-200'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Welcome to ')
              .typeString('Univens')
              .pauseFor(1000)
              .deleteChars(7)
              .typeString('<strong>Univens</strong>')
              .pauseFor(1000)
              .start();
          }}
          options={{
            cursor: '',
            delay: 100,
          }}
        />
      </h1>

      <h2 className="text-2xl md:text-4xl leading-relaxed mt-4 z-[10000]">
        Focus on what matters, grow your business with <br className="hidden md:block" /> trusted solutions from reliable experts.
      </h2>
      <p className="mt-4 text-gray-400 text-base md:text-lg z-[10000]" >Business simplified</p>
    </div>
    <Slider/>
    </> 
  );
};

export default HeroSection;
