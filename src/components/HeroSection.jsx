import Slide from "./Slide";

const HeroSection = () => {
  return (
    <div className="text-center relative py-2 pb-10 px-6 sm:px-10 flex-grow flex flex-col
                    mt-12 sm:mt-16 items-center bg-cover bg-center h-screen
                    justify-center gap-4 sm:gap-5">

      {/* Business Simplified Button */}
      <button className="mt-2 sm:mt-4 text-[#dbdbe2] text-sm sm:text-base md:text-lg
                         z-[10000] bg-[#ffffff23] rounded-3xl px-4 sm:px-5 py-1 sm:py-1.5
                         cursor-default border border-white">
        Business Simplified
      </button>

      {/* Responsive Heading with Adjusted Spacing */}
      <h2 className="w-[90vw] sm:w-[80vw] md:w-[60vw]
                     text-lg sm:text-2xl md:text-[3.5rem]
                     leading-[1.3] sm:leading-[1.4] md:leading-[3.7rem]
                     z-[10000] tracking-wide text-white">
        Grow your business with trusted solutions <br className="hidden sm:block" />
        from reliable experts.
      </h2>

      {/* Responsive Slider Section */}
      <div className="mt-4 sm:mt-6 h-[40vh] sm:h-[50vh] w-[90vw] sm:w-[85vw] md:w-[65vw] lg:w-[60vw]
                      rounded-3xl px-4 sm:px-5 py-1.5 border-white shadow-md">
        <Slide />
      </div>
    </div>
  );
};

export default HeroSection;
