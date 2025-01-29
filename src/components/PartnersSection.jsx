import { useRef } from "react";
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

  const handleRef = (ref) => {
    if (ref && !logoRefs.current.includes(ref)) {
      logoRefs.current.push(ref);
    }
  };

  useGSAP(() => {
    if (logoRefs.current.length && containerRef.current) {
      const totalWidth = logoRefs.current.reduce(
        (acc, logo) => acc + logo.offsetWidth + 2,
        0
      );

      const wrapper = containerRef.current;
      wrapper.style.width = `${totalWidth * 2}px`;

      return gsap.to(wrapper, {
        x: -totalWidth,
        duration: 10,
        ease: "linear",
        repeat: -1,
      });
    }
  }, [logos]);

  return (
    <div className="relative w-full md:w-1/2 overflow-hidden py-10 mx-auto">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-12">
      Our Valued Collaborators
      </h1>
      <div
        ref={containerRef}
        className="flex justify-center items-center whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            ref={handleRef}
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
  );
};

export default PartnersSection;
