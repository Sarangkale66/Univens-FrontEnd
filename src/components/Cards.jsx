const Cards = () => {
  return (
    <div
      id="process"
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 md:px-8 py-16 bg-gradient-to-r  text-white"
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
        <div className="flex flex-col items-center text-center p-8 bg-gray-950 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:translate-y-2 group">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-3xl rounded-full mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
            📋
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white opacity-100 group-hover:opacity-90 transition-opacity duration-300">
            Step 1: Tell Us What You Need
          </h3>
          <p className="text-sm md:text-base text-gray-300 opacity-100 group-hover:opacity-80 transition-opacity duration-300">
            We'll take care of the rest. Whether it’s marketing, tech, or HR, tell us your challenge, and we’ll match you with the right solution.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-8 bg-gray-950 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:translate-y-2 group">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-3xl rounded-full mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
            🤝
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white opacity-100 group-hover:opacity-90 transition-opacity duration-300">
            Step 2: Connect with an Expert
          </h3>
          <p className="text-sm md:text-base text-gray-300 opacity-100 group-hover:opacity-80 transition-opacity duration-300">
            Our trusted experts are ready to help you. Expect tailored advice and comprehensive support.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-8 bg-gray-950 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:rotate-2 hover:translate-y-2 group">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-900 text-3xl rounded-full mb-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
            ⭐
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white opacity-100 group-hover:opacity-90 transition-opacity duration-300">
            Step 3: Let Us Handle the Rest
          </h3>
          <p className="text-sm md:text-base text-gray-300 opacity-100 group-hover:opacity-80 transition-opacity duration-300">
            Once you’re matched, we take over and manage the execution, delivering exactly what you need, on time and on budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;