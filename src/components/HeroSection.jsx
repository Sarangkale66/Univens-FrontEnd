import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
    <div className="text-center py-2 pb-10 px-10 flex-grow flex flex-col mt-16 items-center bg-cover bg-center" >
    <button className="mt-4 text-white text-base md:text-lg z-[1] border border-white rounded-3xl px-5 py-2 cursor-default">
  Business simplified
</button>

<h2
  className="text-center font-medium mt-4 z-[1] leading-relaxed tracking-wide sm:tracking-wider"
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontSize: "42px",
    lineHeight: "1.3",
    letterSpacing: "1px",
    fontWeight: "500",
    textDecoration: "none",
    textUnderlineOffset: "6px",
    textDecorationThickness: "2px",
    textDecorationSkipInk: "none",
    wordSpacing: "5px",
  }}
>
  Focus on what matters, grow your business with trusted solutions from reliable experts.
</h2>
    </div>
    <Slider/>
    </>
  );
};

export default HeroSection;
