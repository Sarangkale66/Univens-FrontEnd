import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PartnersSection = () => {
  const containerRef = useRef(null);
  const logoRefs = useRef([]);
  const logos = [
    "Nickelodeon_2023_logo.svg",
    "disney.svg",
    "pocket-fm-seeklogo.svg",
    "kuku-fm-svgrepo-com.svg",
    "bigfm.png",
  ];

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const totalWidth = container.scrollWidth / 2;

      gsap.to(container, {
        x: -totalWidth,
        duration: 12,
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className="relative w-full md:w-2/3 lg:w-1/2 overflow-hidden mx-auto">
   <button
  className="mt-4 text-[#dbdbe2] text-base md:text-lg z-[10000] bg-[#000E23] rounded-3xl px-6 py-2 cursor-pointer font-medium  my-8 text-xs sm:text-sm md:text-base tracking-wider transition-all duration-300 mx-auto block"
  style={{ fontFamily: 'Montserrat, sans-serif' }}
>
  Our Experts Have Worked With
</button>

      <div ref={containerRef} className="flex flex-nowrap items-center">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={`/logo/${logo}`}
            alt={logo.replace(".svg", "").replace(".png", "")}
            className="h-10 mx-4 md:h-12 opacity-80 hover:opacity-100 cursor-pointer transition-all duration-300"
            loading="lazy"
            style={{
              width: "12%",
              aspectRatio: "3 / 2",
              objectFit: "contain",
              filter: index % 5 !== 4 ? "invert(1)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
