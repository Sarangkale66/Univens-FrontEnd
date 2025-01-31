import React, { useEffect } from "react";

const Bgeffect = () => {
  return (
    <div className="flex justify-center">
      <img className="h-[30vh] w-[50vw] opacity-[40%] object-fill top-0 bg-cover filter brightness-30 contrast-125  " src="../public/img2.jpg" style={{ position: "absolute", zIndex: -10 }} alt=""/>
    </div>
  );
};

export default Bgeffect;