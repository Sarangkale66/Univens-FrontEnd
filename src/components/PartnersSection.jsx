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
      {/* <h5
        className="text-xl sm:text-2xl text-center mt-12 md:text-3xl lg:text-4xl font-medium mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}
>
        Our Valued Collaborators
      </h5> */}
      <p className="text-center text-sm sm:text-base font-medium uppercase tracking-wide text-gray-400 my-8">
        Our Experts Worked With
      </p>

      <div
        ref={containerRef}
        className="flex justify-center items-center whitespace-nowrap"
      >
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
