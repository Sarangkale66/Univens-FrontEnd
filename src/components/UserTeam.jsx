import React, { useState, useRef, useEffect, useContext } from 'react';
import gsap from 'gsap';
import { FaPlus } from 'react-icons/fa';
import { addTeamMember, getTeamMembers, removeMember, searchEmail } from '../api/UserAPI';
import { useForm } from "react-hook-form";
import { AppContext } from '../contextAPI/AppContext';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { sendEmail } from "../api/UserAPI";

const UserTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const { user, setUser } = useContext(AppContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    await sendEmail(data,user?.token)
    setIsDialogOpen(false); 
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const bgRef = useRef(null);
  const plusIconRef = useRef(null);
  let cardRef = useRef([]);
  const spinnerRef = useRef();
  const [ user1, setUser1 ] = useState(null);
  const slider = useRef(null);

  const fetchTeamMembers = async () => {
    const storedTeam = localStorage.getItem("teamMembers");
    
    if (storedTeam) {
      setTeamMembers(JSON.parse(storedTeam));
    } else {
      try {
        const result = await getTeamMembers(user.token);
        const team = result.data.team;
        setTeamMembers(team);
        
        localStorage.setItem("teamMembers", JSON.stringify(team));
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      }
    }
  };

  useEffect(() => {
    const animate = () => {
      gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
      gsap.from(plusIconRef.current, { rotate: "180deg", delay: 0.1 });
    };
  
    animate();
    fetchTeamMembers();
  }, []);

  const openMemberModal = (member) => {
    if(selectedMember) return;
    setSelectedMember(member);
    gsap.to(slider.current,{
      right:"0",
      duration:0.1,
      ease:"power2.out"
    });
  };

  const handleAddMember = (data) =>{
    setTeamMembers([...teamMembers, ...data]); 
    setIsDialogOpen(false); 

    const storedTeamMembers = JSON.parse(localStorage.getItem("teamMembers")) || [];

    const updatedTeamMembers = [...storedTeamMembers, ...data];

    localStorage.setItem("teamMembers", JSON.stringify(updatedTeamMembers));
  }

  const closeMemberModal = () => {
    gsap.to(slider.current,{
      right:"-100%",
      duration:0.1,
      ease:"linear",
      onComplete:()=>{
        setTimeout(() => {
          setSelectedMember(null)
        }, 100);
      }
    })
    
    setIsDialogOpen(false);
  };

  const deleteMember = async(index) => {
    try {
      const obj = teamMembers[index];
      const result = await removeMember(obj.memberId._id, obj.email, user?.token);

      const updatedMembers = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(updatedMembers);
      setUser({...user,teamLen:updatedMembers.length});

      localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
  
      closeMemberModal();
      toast.success(result.data.message);
    } catch (err) {
      toast.error("Failed to remove team member.");
    }
  };

  const handleSelection = async () => {
    try {
      
      const storedTeamMembers = JSON.parse(localStorage.getItem("teamMembers")) || [];
      
      const isMemberExists = storedTeamMembers.some(member => member.email === user1.email);
      
      if (isMemberExists) {
            toast.error("Member with this email already exists in the team.");
            return;
        }
        
        const result = await addTeamMember(user1, user?.token);
        
        localStorage.setItem("teamMembers", JSON.stringify(result.data.team));
        setUser({...user,teamLen:result.data.team.length});
        setTeamMembers(result.data.team);
        setUser1(null);
        setIsDialogOpen(false);
    } catch (err) {
        toast.error("Failed to add member");
    }
  };

  const handleRefresh = (e) => {
    const spinnerAnimation = gsap.to(spinnerRef.current,{ 
      duration:1,
      rotation: "+=360", 
      ease: "linear",
      repeat:-1
    }) 
    localStorage.removeItem("teamMembers");
    fetchTeamMembers();
    setTeamMembers([]);
    setTimeout(() => {
      spinnerAnimation.pause();
    }, 3000);
  };

  useEffect(() => {
    if (slider.current) {
      if (selectedMember) {
        slider.current.classList.remove('right-[-100%]');
        slider.current.classList.add('right-0');
      } 
    }else {
      slider.current.classList.remove('right-0');
      slider.current.classList.add('right-[-100%]');
      setTimeout(() => {
        setSelectedMember(null);
      }, 100);
    }
  }, [selectedMember]);


  const getPronoun = (gender) => {
    if (gender?.toLowerCase() === "male") return "him";
    if (gender?.toLowerCase() === "female") return "her";
    if (gender?.toLowerCase() === "other") return "them";
    return "";
  };

  return (
  
    <div 
      ref={bgRef} className="p-6  h-full w-full bg-opacity-50 text-white bg-slate-800 relative overflow-hidden"> 
        <div
          ref={slider}
          className={`absolute top-0 right-[-100%] h-full z-30 w-[75%] md:w-1/2 bg-slate-200 transition-all duration-300`}
        >
      <div className="p-6 relative h-full flex flex-col justify-center">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
          onClick={closeMemberModal}
        >
          <i className="ri-close-line text-2xl"></i>
        </button>
        <div className="text-center">
          <img
            src={selectedMember?.memberId?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"}
            alt={selectedMember?.fullname}
            className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-1 object-cover border-4 border-blue-500"
          />
          <div className='text-sm capitalize text-black font-semibold'> {getPronoun(selectedMember?.memberId?.gender )} </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{selectedMember?.fullname}</h3>
          <p className="text-gray-500 text-sm">{selectedMember?.role || "Role Not Mentioned"}</p>
        </div>
        {selectedMember?.memberId && (
          <img 
            src="/global-svgrepo-com.svg" 
            alt="univens member" 
            className='absolute top-2 left-2 w-10 h-10 opacity-80 invert scale-[65%]'
          />
        )}
        <div className='mt-4 space-y-2 text-gray-700'>
          <p><span className='font-semibold'>Company Name:</span> {selectedMember?.memberId?.companyName || "Not Mentioned"}</p>
          <p><span className='font-semibold'>Email:</span> {selectedMember?.email || "Not Mentioned"}</p>
          <p><span className='font-semibold'>Address:</span> {selectedMember?.memberId?.address || "Not Mentioned"}</p>
          <p><span className='font-semibold'>Phone:</span> {selectedMember?.memberId?.phoneNumber || "Not Mentioned"}</p>
          <p>
            <span className='font-semibold'>Website Link:</span>
            {selectedMember?.memberId?.websiteLink ? (
              <a
                href={selectedMember.memberId.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:underline"
              >
                Visit
              </a>
            ) : (
              " Not Mentioned"
            )}
          </p>
        </div>
        <div className='flex justify-between mt-5'>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 hover:bg-red-600 transition"
            onClick={() => deleteMember(teamMembers.findIndex(m => m.fullname === selectedMember?.fullname))}
          >
            <i className="ri-delete-bin-6-line"></i> Eliminate {getPronoun(selectedMember?.memberId?.gender )}
          </button>
        </div>
      </div>
    </div>
      <h2 className="text-2xl font-bold mb-6 text-center"><i className="ri-group-fill mr-3"></i>Team Members</h2>
      <button ref={spinnerRef} onClick={handleRefresh} className='absolute  right-0 top-0 mr-6 mt-6 scale-150'
        data-tooltip-id="team-refresh"
        data-tooltip-content="Refresh"
      ><i className="ri-refresh-line"></i></button>
      <Tooltip id="team-refresh" />
      {teamMembers.length ? (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => {
          const memberData = member.memberId || {}; 
          return (
            <div 
              key={index}
              className="bg-[#0F172A] shadow-sm shadow-[#ffffff] bg-opacity-40 rounded-xl p-5 flex flex-col items-center relative cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openMemberModal(member)}
              ref={(el) => (cardRef.current[index] = el)}
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <LazyLoadImage
                  src={memberData.image?.startsWith("//") 
                    ? `https:${memberData.image}` 
                    : memberData.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"}
                  alt="Lazy loaded example"
                  effect="blur"
                  className="w-full h-full object-cover block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {member.memberId && (
                <img
                  src="/global-svgrepo-com.svg"
                  loading="lazy"
                  alt="Univens member"
                  className="absolute top-2 left-2 w-8 h-8 opacity-80 scale-[40%] md:scale-[55%] "
                />
              )}

              {member.requestType === "pending" && (
                <p className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded-lg shadow-md">
                  Invited
                </p>
              )}

              <h2 className="text-lg font-semibold text-white mt-3">{member.fullname}</h2>
              <p className="text-gray-400 text-sm">{member.role || "Role Not Mentioned"}</p>

              <i className="ri-pushpin-fill absolute -top-2 left-1/2 "></i>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="h-full w-full flex items-start justify-center text-center text-gray-300">
        Invite Your Friends and start working with Univens
      </div>
    )}

      <button 
        ref={plusIconRef} 
        className="fixed bottom-5 right-5 shadow-teal-300 text-white p-4 rounded-full shadow-sm" 
        onClick={() => setIsDialogOpen(true)}
        onMouseEnter={(e) => gsap.to(e.currentTarget, { rotate: 45, duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.currentTarget, { rotate: 0, duration: 0.3 })}
        >
        <FaPlus size={24} />
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#008cbf] text-white p-6 rounded-2xl shadow-2xl w-96 relative">
            <button
              className="absolute top-4 right-4 text-white hover:text-red-400 transition"
              onClick={closeMemberModal}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
  
            <h2 className="text-2xl font-bold mb-3 text-center">Add New Member</h2>
  
            <label htmlFor="searchMem" className="block text-sm mb-2">
              Member already exists in UNIVENS!
            </label>
            <input
              type="text"
              id="searchMem"
              placeholder="Search member by email"
              className="w-full px-4 py-2 text-black text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none bg-white"
              onChange={async (e) => {
                const email = e.target.value;
                if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
                  if (user1) setUser1(null);
                  return;
                }
                if (user.email === email) {
                  toast("Enter Your Friend's Email");
                  return;
                }
                if (teamMembers.some((member) => member.email === email)) {
                  toast("Team member already added");
                  return;
                }
                try {
                  const token = user?.token;
                  const response = await searchEmail(email, token);
                  const u = response.data.user;
                  u.isInvited = true;
                  u.isMember = true;
                  u.message = `You are invited as a team member by ${user.fullname}`;
                  setUser1(u);
                } catch (err) {}
              }}
            />
  
            {user1 && (
              <div
                onClick={handleSelection}
                className="flex items-center absolute space-x-3 p-2 bg-zinc-700 hover:bg-slate-900 z-50 rounded-md cursor-pointer mt-2"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow ">
                  <LazyLoadImage
                    src={
                      user1?.image?.startsWith("//")
                        ? `https:${user1.image}`
                        : user1?.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"
                    }
                    alt="Profile"
                    effect="blur"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm">{`${user1?.fullname} ${user1?.role ? `(${user1.role})` : ""}`}</span>
              </div>
            )}
  
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-400"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded-lg text-sm">
                  Or continue with
                </span>
              </div>
            </div>
  
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="block text-sm ">
              Invite Member By Email
            </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none bg-[#010E1A] text-white"
                {...register("fullname")}
              />
  
              <input
                type="text"
                placeholder="Role"
                className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none bg-[#010E1A] text-white"
                {...register("role")}
              />
  
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-300 outline-none bg-[#010E1A] text-white"
                {...register("email")}
              />
  
              <button
                type="submit"
                className="w-full flex text-sm items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <i className="ri-send-plane-fill"></i> Invite
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserTeam;