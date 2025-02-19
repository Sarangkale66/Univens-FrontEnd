const Hero = () => {
  return (
    <div
      id="features"
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 py-10 sm:py-20 bg-[#010102] text-white"
    >
      <div className="w-[80vw] text-center pb-5 relative z-10">
        <button className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#000E23] rounded-3xl px-3 py-1.5 cursor-default" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Features
        </button>
        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-2 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Struggling to Find the Right Solutions for Your Business?
        </h5>
        <p className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-300 max-w-[800px] mx-auto mb-8 opacity-80" style={{ fontFamily: 'Inter' }}>
          As an entrepreneur, your time is precious. We know the frustration of searching for reliable
          solutions—waiting for responses, navigating complex processes, and getting lost in a sea of
          options. At Univens, we make it simple: request the service you need, and we’ll connect you
          with the right experts to get things done.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[800px] sm:max-w-[720px] md:max-w-[760px] lg:max-w-[820px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] gap-0 rounded-lg overflow-hidden shadow-2xl relative">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Introduction video about Univen services"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
