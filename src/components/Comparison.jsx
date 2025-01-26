const Comparison = () => {
  return (
    <div
      id="comparison"
<<<<<<< HEAD
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 md:px-8 py-16 text-white"
=======
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 md:px-8 py-16 bg-gradient-to-r text-white"
>>>>>>> 896e7e2d26498efac79667ba8f8ae999bed68a4c
    >
      {/* Section Header */}
      <div className="text-center">
        <p className="text-sm sm:text-base font-medium uppercase tracking-widest text-gray-400">
          Why Choose Us
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6">
          Univens vs Other Agencies
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-[720px] mx-auto">
          Discover why Univens is the trusted choice for businesses looking for
          tailored solutions, seamless processes, and expert-driven results.
        </p>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
        {/* Other Agencies Card */}
        <div className="flex flex-col p-8 bg-gray-800 rounded-xl shadow-lg relative group overflow-hidden border border-gray-700 hover:border-purple-500 transition duration-300">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-transparent to-purple-800 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

          <h3 className="text-2xl font-semibold text-center mb-6 group-hover:text-purple-400 transition duration-300">
            Other Agencies
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-2xl rounded-full group-hover:bg-purple-500 transition duration-300">
                ✖️
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Lengthy onboarding processes delay project initiation.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-2xl rounded-full group-hover:bg-purple-500 transition duration-300">
                ✖️
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Generic solutions fail to meet unique client needs.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-2xl rounded-full group-hover:bg-purple-500 transition duration-300">
                ✖️
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Bureaucratic hurdles complicate collaboration and results.
              </p>
            </li>
          </ul>
        </div>

        {/* Univens Card */}
        <div className="flex flex-col p-8 bg-gray-800 rounded-xl shadow-lg relative group overflow-hidden border border-gray-700 hover:border-cyan-500 transition duration-300">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-transparent to-cyan-800 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

          <h3 className="text-2xl font-semibold text-center mb-6 group-hover:text-cyan-400 transition duration-300">
            Univens
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-2xl rounded-full group-hover:bg-cyan-500 transition duration-300">
                ✔️
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Instant access to experts to start solving problems right away.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-2xl rounded-full group-hover:bg-cyan-500 transition duration-300">
                ✔️
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Tailored solutions designed for your specific business needs.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-2xl rounded-full group-hover:bg-cyan-500 transition duration-300">
                ✔️
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Streamlined processes with no unnecessary hurdles or delays.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
