import React, { useEffect, useState } from 'react'
import "../App.css"

const ProgressBar = () => {
  const [progressWidth,setProgressWidth]=useState(0);

  const handleScroll=(e)=>{
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    const scrollPercentage = ( scrollY/(documentHeight - windowHeight))*100;
    setProgressWidth(scrollPercentage);
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[])

  return (
    <div id='progress-container' style={{
      height:"4px",
      width:"100%",
      position:"fixed",
      top:"0",
      left:"0",
      right:"0",
      zIndex:100
    }}>
        <div className="loader-bar" style={{
          height:"1%",
          width:`${progressWidth}%`
        }}></div>
    </div>
  )
}

export default ProgressBar;
