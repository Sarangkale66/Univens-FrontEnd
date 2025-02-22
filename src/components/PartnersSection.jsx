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
    "Colors.svg",
    "Jio_Star_India_Private_Limited.svg",
    "MTV_Logo.svg",
    "Network_18_Logo.svg",
    "Viacom_18.svg"
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
            ref={handleRef}
            src={`/logo/${logo}`}
            alt={logo}
            className="h-10 mx-5 md:h-12 opacity-80 hover:opacity-100 cursor-pointer"
            style={{
              width: "10%",
              aspectRatio: "3 / 2",
              objectFit: "contain",
              ...((index % 5 !== 4) && { filter: "invert(1)" }),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;