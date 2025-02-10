import Slide from "./Slide";

const HeroSection = () => {
  return (
    <div className="h-screen">
    <div className="text-center py-2 pb-10 px-10 flex-grow flex flex-col mt-16 items-center bg-cover bg-center" >
      <button className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#ffffff23] rounded-3xl px-3 py-1.5 cursor-default" >Business simplified</button>
      <h2 className="text-2xl md:text-4xl leading-relaxed mt-4 z-[10000] tracking-[5px]">
        Focus on what matters,<strong> grow your business </strong>with <br className="hidden md:block" /> trusted solutions from reliable experts.
      </h2>
    </div>
    <Slide/>
    </div>
  );
};

export default HeroSection;
