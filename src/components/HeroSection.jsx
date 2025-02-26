import Slide from "./Slide";

const HeroSection = () => {
  return (
    <div className="text-center relative py-2 pb-10 px-10 flex-grow flex flex-col mt-16 items-center bg-cover bg-center h-screen justify-center gap-8" >
    <button className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#ffffff23] rounded-3xl px-5 py-1.5 cursor-default border border-white" >Business simplified</button>
    <h2 className="w-[80vw] md:text-[3.5rem] leading-[3.7rem] z-[10000] tracking-[2px]">
      Grow your business with trusted solutions from reliable experts.
    </h2>
    <div className="h-[50vh] w-[100vw] sticky">
    <Slide/>
    </div>
    </div>
  );
};

export default HeroSection;
