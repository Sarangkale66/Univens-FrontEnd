const Hero = () => {
  return (
    <div
      id="features"
      className="w-full max-w-[1260px] min-h-screen mx-auto flex flex-col items-center gap-12 px-6 py-20 bg-[#010102] text-white"
    >
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight transition-transform transform hover:scale-105 hover:text-blue-200">
          Struggling to Find the Right Solutions for Your Business?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-[800px] mx-auto mb-8 opacity-80 transition-opacity duration-500 hover:opacity-100">
          As an entrepreneur, your time is precious. We know the frustration of searching for reliable
          solutions—waiting for responses, navigating complex processes, and getting lost in a sea of
          options. At Univens, we make it simple: request the service you need, and we’ll connect you
          with the right experts to get things done.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[720px] sm:max-w-[960px] md:max-w-[1260px] h-[220px] sm:h-[320px] md:h-[405px] relative rounded-lg overflow-hidden shadow-2xl group">
          <video
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-in-out"
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Introduction video about Univen services"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;