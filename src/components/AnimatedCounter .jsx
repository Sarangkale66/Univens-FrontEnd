import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ title ,value, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div className={`${className} bg-slate-800  shadow-lg rounded-lg w-full sm:w-64 p-4 flex flex-col sm:flex-row md:flex-col items-center text-white border border-gray-700 gap-3`}> 
    <div className="flex gap-1 items-center w-full justify-between sm:justify-center md:flex-col">
      <h2 className="text-lg font-medium text-gray-400">{title}</h2>
      <div className="text-xl sm:text-2xl md:text-3xl font-bold md:mt-2">{value}</div>
    </div>
  </div>
  );
};

export default AnimatedCounter;