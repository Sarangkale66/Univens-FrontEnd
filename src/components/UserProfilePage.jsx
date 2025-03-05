import React, { useState, useEffect, useRef, useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import LogAni from './LogAni';
import { Tooltip } from "react-tooltip";
import { logout } from "../api/AuthAPI"
import { toast, ToastContainer } from "react-toastify"
import { AppContext } from '../contextAPI/AppContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const UserProfilePage = () => {
  const { user, setUser } = useContext(AppContext);
  const [ notification, setNotification ] = useState([]);

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

      setTimeout(()=>{
        navigate("/");
      },5000);
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
  const notificationRef = useRef(null);
  const navLinkRef = useRef([]);

  const handleNotification = (e)=>{
    setExpanded((prev) => !prev);
    if (notificationRef.current) {
      if (expanded) {
        notificationRef.current.classList.remove("rounded-sm"); 
        notificationRef.current.classList.add("rounded-full");
        e.target.classList.remove("text-black","h-fit","w-fit");
        e.target.classList.add("ri-notification-line"); 
        gsap.to(notificationRef.current, {
          width: "2rem",
          minHeight: "2rem",
          maxHeight:"2rem",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        e.target.classList.remove("ri-notification-line"); 
        e.target.classList.add("text-black","h-7","w-7");
        notificationRef.current.classList.remove("rounded-full"); 
        notificationRef.current.classList.add("rounded-sm"); 
        gsap.to(notificationRef.current, {
          width: "75%",
          minHeight: "75%",
          maxHeight:"75%",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }
  }

  const [expanded, setExpanded] = useState(false);

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
        <div ref={bgRef} className="bg-[#00ccdb] w-full md:w-[40%] pt-6 text-white flex flex-col items-center justify-center relative">
        <i onClick={handleLogout} className="w-fit ri-logout-box-line px-2 py-1 hover:text-black hover:bg-white rounded-full absolute right-0 top-0 m-3 cursor-pointer" 
        data-tooltip-id="profile-logout"
        data-tooltip-content="Logout"></i>
        <Tooltip id="profile-logout" isOpen={true}/>
        <i
        className="ri-notification-line absolute z-50 top-0 left-0  p-2 text-center hover:text-black transition-colors m-3 rounded-full cursor-pointer"
        data-tooltip-id="notification"
        data-tooltip-content="Notifications"
        onClick={handleNotification}
        onMouseEnter={() => { if (!expanded && notificationRef.current) notificationRef.current.style.backgroundColor = "white";}}
        onMouseLeave={() => { if (!expanded && notificationRef.current) notificationRef.current.style.backgroundColor = "transparent";}}
      ></i>
      <Tooltip id="notification" className='z-[60]' isOpen={!expanded}/>

      <div
        ref={notificationRef}
        className="left-0 top-0 m-3 flex overflow-hidden flex-col p-2 pb-3 items-center justify-between text-black mt-4 absolute h-8 rounded-full w-8 z-40 transition-colors"
      >
        
        {expanded && <div className='h-full w-full'>
          <button className='absolute right-0 top-0 mr-6 mt-1.5 px-1 scale-10 bg-white rounded-full '
          ><i className="ri-refresh-line"></i></button>
          <div className='h-5 w-5 fixed rounded-full flex items-center justify-center bg-white'>
            <i className='ri-close-line'></i>
          </div>
          <div className='h-full w-full  overflow-y-auto'>
            <ul className='h-12 mt-6 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
            <ul className='h-12 mt-1 mb-1 rounded-sm w-full bg-slate-200'></ul>
          </div>
        </div> }
       
      </div>
      

          <div ref={w40Ref} className="w-15 h-15 rounded-full overflow-hidden border-4  shadow-md  md:mb-4">
          <LazyLoadImage
              src={user?.image||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"}
              alt="Lazy loaded example"
              effect="blur"
              height="100%"
              width="100%"
              className="w-full h-full object-cover block p-0 m-0"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 ref={h1Ref} className="text-2xl font-semibold text-center md:text-left">{user?.fullname}</h1>
          <p ref={pRef} className="text-lg text-slate-200 text-center md:text-left">{user?.role}</p>
          <div className='flex md:flex-col m-4 gap-0 w-full'>
            <hr />
            <NavLink
              ref={(ref) => { navLinkRef.current.push(ref) }}
              to="/User/edit"
              className={({ isActive }) => (!isActive ? 'text-white px-4 py-2 rounded-sm text-center w-full' : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-sm text-center w-full ')}
            >
              <div>
                <i className="ri-user-3-fill mr-1"></i>
                <span className='hidden md:inline'>Profile</span>
              </div>
            </NavLink>
            <hr />
            <NavLink
              ref={(ref) => { navLinkRef.current.push(ref) }}
              to="/User/team"
              className={({ isActive }) => (!isActive ? 'text-white px-4 py-2 rounded-sm text-center w-full' : 'bg-gray-200 text-gray-800 px-4 py-2 rounded-sm text-center w-full')}
            >
              <div>
              <i className="ri-group-fill mr-1"></i>
                <span className='hidden md:inline'>Team</span>
              </div>
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
