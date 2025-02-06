import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PartnersSection = () => {
  const containerRef = useRef(null);
  const logos = [
    "Nickelodeon_2023_logo.svg",
    "disney.svg",
    "pocket-fm-seeklogo.svg",
    "kuku-fm-svgrepo-com.svg",
    "bigfm.png",
  ];

  useGSAP(() => {
    const container = containerRef.current;
    if (container) {
      const logoElements = container.querySelectorAll("img");
      const totalWidth = Array.from(logoElements).reduce(
        (acc, logo) => acc + logo.offsetWidth + 10, // Adjust margin
        0
      );

      container.style.width = `${totalWidth * 2}px`;

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
      tl.to(container, {
        x: -totalWidth,
        duration: 10,
      });

      return () => tl.kill(); // Clean up on unmount
    }
  }, []);

  return (
    <div className="relative w-full md:w-1/2 overflow-hidden py-10 mx-auto">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-12">
        Our Valued Collaborators
      </h1>

      <div className="relative w-full md:w-1/2 overflow-hidden mx-auto">
        <p className="text-center text-sm sm:text-base font-medium uppercase tracking-wide text-gray-400 my-8">
          Our Partners Worked With
        </p>

        <div
          ref={containerRef}
          className="flex items-center whitespace-nowrap relative"
          style={{ willChange: "transform" }} // Performance boost
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={`/logo/${logo}`}
              alt={logo}
              className="h-10 mx-5 md:h-12 opacity-80 hover:opacity-100 cursor-pointer"
              style={{
                width: "30%",
                aspectRatio: "3 / 2",
                objectFit: "contain",
                ...(index % 5 !== 4 && { filter: "invert(1)" }),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
