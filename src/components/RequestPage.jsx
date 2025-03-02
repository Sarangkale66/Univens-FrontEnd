import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const RequestPage = () => {
    const bgRef = useRef(null);

    useEffect(() => {
      gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
    }, []);

    return (
      <div ref={bgRef} className='p-6 border-l h-full w-full border-gray-300 bg-[aliceblue]'>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">RequestPage</h2>
      </div>
    )
}

export default RequestPage