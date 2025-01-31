import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
    <div className="text-center py-2 pb-10 px-10 flex-grow flex flex-col mt-16 items-center bg-cover bg-center" >
      <button className="mt-4 text-white text-base md:text-lg z-[1] border border-white rounded-3xl px-3 py-1 cursor-default" >Business simplified</button>
  <h2
  className="text-center font-bold mt-4 z-[1] text-3xl sm:text-4xl md:text-5xl leading-tight"
  style={{
    fontFamily: "Roboto, sans-serif",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  }}
>
  Focus on what matters, grow your business with <br className="hidden md:block" />
  trusted solutions from reliable experts.
</h2>
    </div>
    <Slider/>
    </>
  );
};

export default HeroSection;
