import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import LogAni from './LogAni';
import { Tooltip } from "react-tooltip";
import { logout } from "../api/AuthAPI"
import { toast, ToastContainer } from "react-toastify"
import { AppContext } from '../contextAPI/AppContext';

const UserProfilePage = () => {
  const { user, setUser } = useContext(AppContext);

  const navigate = useNavigate();
 
  const handleLogout = async ()=>{
    try {
      const storedUser = JSON.parse(localStorage.getItem("user-info"));
      const token = storedUser?.token;
  
      if (token) {
        await logout(token);
      }
  
      localStorage.removeItem("user-info");
      toast.success("✅ Logged out successfully!", { position: "top-center" });
      navigate("/");
    } catch (error) {
      toast.error(`❌ Logout failed: ${error.response?.data?.message || "Something went wrong."}`, {
        position: "top-center",
      });
    }
  }

  const bgRef = useRef(null);
  const w40Ref = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const navLinkRef = useRef([]);

  useEffect(() => {
    gsap.from(bgRef.current, { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(w40Ref.current, { opacity: 0, duration: 1, delay: 0.7 });
    gsap.from(h1Ref.current, { opacity: 0, duration: 1, delay: 0.9 });
    gsap.from(pRef.current, { opacity: 0, duration: 1, delay: 1.1 });
    gsap.from(navLinkRef.current, { opacity: 0, duration: 1, delay: 1.3, stagger:0.1 });

    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);
    setUser(userData);
  }, []);

  return (
    <div className='relative min-h-screen w-full'>
      <LogAni particle={35}/>
      <ToastContainer style={{ zIndex: 100000000000 }} position="top-center" />
    <div className="h-screen absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-screen p-3 overflow-y-scroll">
      <div className="w-full h-full max-w-6xl rounded-lg md:overflow-hidden flex flex-col md:flex-row">
        <div ref={bgRef} className="bg-[#00ccdb] w-full md:w-[40%] p-6 text-white flex flex-col items-center justify-center relative">
        <i onClick={handleLogout} className="w-fit ri-logout-box-line absolute right-0 md:left-0 top-0 m-3 cursor-pointer" 
        data-tooltip-id="profile-logout"
        data-tooltip-content="Logout"></i>
        <Tooltip id="profile-logout" isOpen={true}/>
          <div ref={w40Ref} className="w-30 h-30 rounded-full overflow-hidden border-4  shadow-md mb-4">
            <img src={user?.image} alt="" className="w-full h-full object-cover" />
          </div>
          <h1 ref={h1Ref} className="text-2xl font-semibold text-center md:text-left">{user?.fullname}</h1>
          <p ref={pRef} className="text-lg text-center md:text-left">{user?.role}</p>
          <div className='flex md:flex-col m-4 gap-0 w-full'>
            <hr />
            <NavLink
              ref={(ref) => { navLinkRef.current.push(ref) }}
              to="/User/edit"
              className={({ isActive }) => (!isActive ? 'text-white px-4 py-2 rounded-sm text-center w-full' : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-sm text-center w-full')}
            >
              Profile
            </NavLink>
            <hr />
            <NavLink
              ref={(ref) => { navLinkRef.current.push(ref) }}
              to="/User/team"
              className={({ isActive }) => (!isActive ? 'text-white px-4 py-2 rounded-sm text-center w-full' : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-sm text-center w-full')}
            >
              Team
            </NavLink>
            <hr />
            <hr />
            <NavLink
              ref={(ref) => { navLinkRef.current.push(ref) }}
              to="/User/request"
              className={({ isActive }) => (!isActive ? 'text-white px-4 py-2 rounded-sm text-center w-full' : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-sm text-center w-full')}
            >
              Requests
            </NavLink>
            <hr />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default UserProfilePage;
