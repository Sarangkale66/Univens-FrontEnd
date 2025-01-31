import React, { useEffect } from "react";

const Bgeffect = () => {
  return (
    <div className="flex justify-center">
      <img className="h-[25vh] w-screen opacity-[50%] object-fill top-0 bg-cover filter brightness-30 contrast-125  " src="../public/img5.avif" style={{ position: "absolute", zIndex: -10 }} alt=""/>
    </div>
  );
};

export default Bgeffect;