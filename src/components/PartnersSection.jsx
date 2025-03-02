import Marquee from "react-fast-marquee";

const PartnersSection = () => {
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
    "Viacom_18.svg",
    "",
  ];

  return (
    <div className="relative w-[90%] mx-auto">
      <p className="text-center text-lg font-semibold uppercase tracking-wide text-gray-500 my-10">
        Our Experts Worked With
      </p>
      <Marquee speed={60} gradient={false} >
        <div className="flex justify-center items-center space-x-8 sm:space-x-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={`/logo/${logo}`}
                alt={logo.replace(".svg", "").replace(".png", "").replace(/_/g, " ")}
                className="w-[60px] sm:w-[60px] md:w-[70px] lg:w-[100px] xl:w-[110px] h-auto object-contain opacity-90 hover:opacity-100 cursor-pointer transition-all duration-300"
                loading="lazy"
                onError={(e) => (e.target.style.display = "none")}
                style={{
                  ...(index % 5 !== 4 && { filter: "invert(1)" }) // Apply "invert(1)" only if index is NOT 4, 9, etc.
                }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PartnersSection;