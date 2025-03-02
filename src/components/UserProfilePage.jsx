import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import LogAni from './LogAni';

const UserProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({
    name: 'omar',
    number: '+91 123-456-7890',
    dob: '2003-05-12',
    role: 'Software Engineer',
    email: 'omar@gmail.com',
    address: 'nagpur',
    teamMembers: ['member1', 'member3', 'member3', 'member4'],
    profilePhoto: 'https://images.unsplash.com/photo-1740428639827-79acb8f07709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  });

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
  }, []);

  return (
    <div className='relative min-h-screen w-full'>
      <LogAni particle={35}/>
    <div className="h-screen absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-screen p-3 overflow-y-scroll">
      <div className="w-full h-full max-w-6xl rounded-lg md:overflow-hidden flex flex-col md:flex-row">
        <div ref={bgRef} className="bg-[#003287] w-full md:w-[40%] p-6 text-white flex flex-col items-center justify-center">
          <div ref={w40Ref} className="w-40 h-40 rounded-full overflow-hidden border-4  shadow-md mb-4">
            <img src={user.profilePhoto} alt="" className="w-full h-full object-cover" />
          </div>
          <h1 ref={h1Ref} className="text-2xl font-semibold text-center md:text-left">{user.name}</h1>
          <p ref={pRef} className="text-lg text-center md:text-left">{user.role}</p>
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
