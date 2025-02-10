import Slide from "./Slide";

const HeroSection = () => {
  return (
    <>
    <div className="text-center py-2 pb-10 px-10 flex-grow flex flex-col mt-16 items-center bg-cover bg-center" >
      <button className="mt-4 text-white text-base md:text-lg z-[1] border border-white rounded-3xl px-3 py-1 cursor-default" >Business simplified</button>
      <h2 className="text-2xl md:text-4xl leading-relaxed mt-4 z-[1]">
        Focus on what matters, grow your business with <br className="hidden md:block" /> trusted solutions from reliable experts.
      </h2>
    </div>
    <Slide/>
    </>
  );
};

export default HeroSection;
