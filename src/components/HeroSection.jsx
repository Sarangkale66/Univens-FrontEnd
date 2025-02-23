import Slide from "./Slide";

const HeroSection = () => {
  return (
    <div className="text-center relative py-2 pb-10 px-10 flex-grow flex flex-col mt-16 items-center bg-cover bg-center h-screen justify-center gap-8" >
    <button className="mt-2 sm:mt-4 text-[#dbdbe2] text-sm sm:text-base md:text-lg
                         z-[10000] bg-[#ffffff23] rounded-3xl px-4 sm:px-5 py-1 sm:py-1.5
                         cursor-default border border-white">
        Business Simplified
      </button>
      <h2 className="w-[90vw] sm:w-[80vw] md:w-[60vw]
                     text-lg sm:text-2xl md:text-[3.5rem]
                     leading-[1.3] sm:leading-[1.4] md:leading-[3.7rem]
                     z-[10000] tracking-wide text-white">
        Scale your business with powerful solutions <br className="hidden sm:block" />
        crafted by trusted experts.

      </h2>
    <div className="h-[50vh] w-[100vw] sticky">
    <Slide/>
    </div>
    </div>
  );
};

export default HeroSection;
