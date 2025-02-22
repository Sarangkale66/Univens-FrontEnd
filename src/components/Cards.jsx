import { Assignment, Handshake, Star } from '@mui/icons-material';

const Cards = () => {
  return (
    <div
      id="process"
      className="w-full max-w-[1260px] mx-auto flex flex-col items-center gap-12 px-6 md:px-8 py-16 bg-gradient-to-r text-white "
    >
      <div className="w-[80vw] text-center relative z-10">
        <button className=" mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#000E23] rounded-3xl px-3 py-1.5 cursor-default" style={{ fontFamily:'Montserrat, sans-serif' }}>
          How It Works
        </button>
        <div className="flex justify-center">
        <img className="h-[25vh] w-screen opacity-[50%] object-fill top-0 bg-cover filter brightness-30 contrast-125  " src="/img5.avif" style={{ position: "absolute", zIndex: -10 }} alt=""/>
      </div>
        <h5 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-2 mb-6" style={{ fontFamily:'Montserrat, sans-serif' }}>
          Getting Started Is Easy
        </h5>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-[720px] mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          At Univen, we simplify your journey by connecting you with trusted
          solutions tailored to your business needs. It’s fast, effective, and
          stress-free.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-[10000]">
        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-3xl rounded-full mb-6">
            <Assignment />
          </div>
          <h5 className="text-xl sm:text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Tell Us What You Need
          </h5>
          <p className="text-sm sm:text-base text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            We'll take care of the rest. Whether it’s marketing, tech, or HR, tell us your challenge, and we’ll match you with the right solution.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-3xl rounded-full mb-6">
            <Handshake />
          </div>
          <h5 className="text-xl sm:text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Connect with an Expert
          </h5>
          <p className="text-sm sm:text-base text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our trusted experts are ready to help you. Expect tailored advice and comprehensive support.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-3xl rounded-full mb-6">
            <Star />
          </div>
          <h5 className="text-xl sm:text-2xl font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let Us Handle the Rest
          </h5>
          <p className="text-sm sm:text-base text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Once you’re matched, we take over and manage the execution, delivering exactly what you need, on time and on budget.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
