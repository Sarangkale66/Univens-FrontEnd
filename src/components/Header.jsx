import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import React, { useRef, forwardRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AppContext } from "../contextAPI/AppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

gsap.registerPlugin(TextPlugin);

const Header = forwardRef((props, ref) => {
  const headerRef = useRef();
  const buttonRef = useRef();
  const [btn,setBtn] = useState(null);
  const navigate = useNavigate();

  const { user } = useContext(AppContext);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

     const storedUser = JSON.parse(localStorage.getItem("user-info"));
     if(storedUser){
      setBtn({...storedUser})
     }
     
  }, []);

  return (
    <div className="fixed w-screen px-10 md:px-0 z-[1000000]">
      <header className="flex flex-wrap justify-between items-center py-5 px-4 md:px-52">
        <h1 ref={headerRef} className="text-lg md:text-xl">Univens</h1>
        <button onClick={()=>{ navigate("/User") }} ref={buttonRef} className={`${!btn && "bg-[#295AAD] cursor-normal"} rounded-full text-white py-2 px-4`}>
          { btn ? (<div className="w-10 h-10 rounded-full overflow-hidden border-4 shadow-md mb-4">
            <img src={btn.image} alt="" className="w-full h-full object-cover" 
             data-tooltip-id="profile-image"
             data-tooltip-content={btn.name}
            />
            <LazyLoadImage
              src={user?.image}
              alt="Lazy loaded example"
              effect="blur"
              height="100%"
              width="100%"
              className="w-full h-full object-cover block p-0 m-0"
              referrerPolicy="no-referrer"
              data-tooltip-id="profile-image"
              data-tooltip-content={btn.name}
            />
            <Tooltip id="profile-image" />
          </div>) :  "Login"  }
        </button>
      </header>
    </div>
  );
});

export default Header;