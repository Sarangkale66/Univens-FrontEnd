import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const NotificationSection = () => {

  const [ notification, setNotification ] = useState([]);

  return (
    <div className='h-full w-full'>
          <button className='absolute right-0 top-0 mr-6 mt-1.5 px-1 scale-10 bg-white '
          ><i className="ri-refresh-line"></i></button>
          <div className='h-5 w-5 fixed rounded-full flex items-center justify-center bg-white'>
            <i className='ri-close-line'></i>
          </div>
          <div className='h-full w-full overflow-y-auto'>
            <ul className="h-14 mt-6 mb-1 rounded-md w-full flex items-center bg-slate-100 px-4 shadow-sm">
              <i className="ri-megaphone-line text-lg text-blue-600 mr-2"></i>
              <p className="text-sm font-medium text-gray-800  overflow-ellipsis whitespace-nowrap max-w-40">Welcome to Univens🎉</p>
            </ul>
            <ul className="h-14 mt-1 mb-1 rounded-md w-full bg-slate-100 flex justify-between items-center px-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="text-sm">
                  <p className="text-gray-700">Invitation from</p>
                  <p className="font-bold text-black whitespace-nowrap overflow-hidden overflow-ellipsis max-w-40">
                    Sarang Rajesh Janardhan Kale
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <button className="text-md hover:scale-110 transition-transform">✅</button>
                <button className="text-md hover:scale-110 transition-transform">❌</button>
              </div>
            </ul>

            <ul className="h-auto w-full mt-1 mb-1 p-3 rounded-md bg-slate-100 shadow-sm border border-gray-200 flex items-start gap-3">
              <LazyLoadImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"
                alt="User"
                effect="blur"
                height={100}
                width={100}
                className=" h-10 w-10 rounded-full object-cover shadow-sm"
                referrerPolicy="no-referrer"
              />

              <div className="flex flex-col">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-black">Univens:&nbsp;</span>  
                  Hey! Welcome to Univens. Let me know if you need any help! 
                </p>
                <span className="text-xs text-gray-400 mt-1">2 min ago</span>
              </div>
            </ul>

            <ul className="h-auto mt-1 p-3 mb-1 rounded-md w-full flex items-center bg-yellow-100 border border-yellow-300 px-4 shadow-md">
              <i className="ri-fire-line text-xl text-yellow-600 mr-3"></i>
              <p className="text-sm font-semibold text-yellow-800">
                🎇✨ Wishing you a very Happy Diwali! May your life be filled with joy, prosperity, and endless light! 🪔🎆
              </p>
            </ul>

            <ul className="h-auto mt-1 p-3 rounded-md w-full flex items-center bg-pink-100 border border-pink-300 px-4 shadow-md">
              <i className="ri-palette-line text-xl text-pink-600 mr-3"></i>
              <p className="text-sm font-semibold text-pink-800">
                🎨✨ Wishing you a very Happy Holi! May your life be filled with colors, happiness, and endless joy! 🌈🎉
              </p>
            </ul>
            {/* <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul> */}
          </div>
        </div>
  )
}

export default NotificationSection
