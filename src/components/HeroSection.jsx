import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
      <div className="text-center py-6 sm:py-10 md:py-16 px-6 sm:px-10 md:px-16 flex-grow flex flex-col mt-8 items-center bg-cover bg-center">
        {/* Button */}
        <button className="mt-4 text-white text-sm sm:text-base md:text-lg z-[1] border border-white rounded-3xl px-6 sm:px-8 py-3 cursor-pointer">
          Business Simplified
        </button>

        {/* Heading */}
        <h2
          className="text-center font-medium mt-4 z-[1] leading-relaxed tracking-wide sm:tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          style={{
            fontFamily: "Montserrat, sans-serif",
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

      {/* Slider */}
      <Slider />
    </>
  );
};

export default HeroSection;
