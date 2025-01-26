const Hero = () => {
  return (
    <div
      id="features"
      className="w-full max-w-[1260px] min-h-screen mx-auto flex flex-col items-center gap-12 px-6 py-20 bg-gradient-to-r text-white"
    >
      {/* Hero Heading Section */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Struggling to Find the Right Solutions for Your Business?
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-[800px] mx-auto">
          As an entrepreneur, your time is precious. We understand the frustration
          of searching for reliable solutions—waiting for responses, navigating
          complex processes, and getting lost in a sea of options. At Univen, we make
          it simple: request the service you need, and we’ll connect you with the
          right experts to get things done.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[720px] h-[220px] sm:h-[320px] md:h-[405px] relative rounded-lg overflow-hidden shadow-2xl group">
          {/* Video Element */}
          <video
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src="/src/assets/Proper Video.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="your-thumbnail-image.jpg"
            aria-label="Introduction video about Univen services"
          />
          {/* Video Overlay for Aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
