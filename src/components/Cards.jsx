const Cards = () => {
  return (
    <div
      id="process"
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 md:px-8 py-16 bg-gradient-to-r text-white"
    >
      {/* Section Header */}
      <div className="text-center">
        <p className="text-sm sm:text-base font-medium uppercase tracking-widest text-gray-400">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6">
          Getting Started Is Easy
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-[720px] mx-auto">
          At Univen, we simplify your journey by connecting you with trusted
          solutions tailored to your business needs. It’s fast, effective, and
          stress-free.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-3xl rounded-full mb-6">
            📋
          </div>
          <h3 className="text-xl font-semibold mb-4">Tell Us What You Need</h3>
          <p className="text-sm md:text-base text-gray-300">
            Whether it’s marketing, tech, or HR, share your challenge, and we’ll
            match you with the perfect solution.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-3xl rounded-full mb-6">
            🤝
          </div>
          <h3 className="text-xl font-semibold mb-4">Connect with an Expert</h3>
          <p className="text-sm md:text-base text-gray-300">
            Our trusted experts are ready to provide tailored advice and
            comprehensive support for your business needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-3xl rounded-full mb-6">
            ⭐
          </div>
          <h3 className="text-xl font-semibold mb-4">Let Us Handle the Rest</h3>
          <p className="text-sm md:text-base text-gray-300">
            Once you’re matched, we’ll manage the execution, delivering exactly
            what you need—on time and within budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
