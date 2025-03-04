import React, { useState, useRef, useEffect, useContext } from 'react';
import gsap from 'gsap';
import { FaPlus } from 'react-icons/fa';
import { getTeamMembers, searchEmail } from '../api/UserAPI';
import { useForm } from "react-hook-form";
import { AppContext } from '../contextAPI/AppContext';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const UserTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const { user } = useContext(AppContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handleAddMember(data);
    setTeamMembers([...teamMembers, data]);
  };

  const [newMember, setNewMember] = useState({ name: '', role: '', profilePhoto: '', isMember: false });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef(null);
  const bgRef = useRef(null);
  const plusIconRef = useRef(null);
  const bg = useRef(null);
  let cardRef = useRef([]);
  const [ user1, setUser1 ] = useState(null);

  useEffect(() => {
    const animate = () => {
      gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
      gsap.from(plusIconRef.current, { rotate: "180deg", delay: 0.1 });
  
      if (cardRef) {
        const tl = gsap.timeline();
        tl.to(cardRef.current, { rotate: -5, duration: 0.5, transformOrigin: "top center" })
          .to(cardRef.current, { rotate: 4, duration: 0.5, transformOrigin: "top center" })
          .to(cardRef.current, { rotate: -1, duration: 0.5, transformOrigin: "top center" })
          .to(cardRef.current, { rotate: 0.5, duration: 0.5, transformOrigin: "top center" })
          .to(cardRef.current, { rotate: 0, duration: 0.5, transformOrigin: "top center" });
      }
    };
  
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
      console.log(teamMembers);
    };
  
    animate();
    fetchTeamMembers();
  }, []);

  const openMemberModal = (member) => {
    gsap.from(modalRef.current,{ opacity: 0, duration: 1 });
    setSelectedMember(member);
  };

  const handleAddMember = (data) =>{
    console.log(data);
    
    newMember.isInvited=true;
    setTeamMembers([...teamMembers,{  }]); 
    setIsDialogOpen(false); 
  }

  const closeMemberModal = () => {
    gsap.to(modalRef.current, { opacity: 0, duration: 0.3, onComplete: () => setTimeout(() => setSelectedMember(null), 100) });
    setIsDialogOpen(false);
  };

  const editMember = (index) => {
    const updatedName = prompt('Edit Name:', teamMembers[index].name);
    if (updatedName) {
      const updatedMembers = [...teamMembers];
      updatedMembers[index] = { ...updatedMembers[index], name: updatedName };
      setTeamMembers(updatedMembers);
    }
  };

  const deleteMember = (index) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
    closeMemberModal();
  };

  const handleSelection = async()=>{
    setTeamMembers([...teamMembers, user1]); 
    setUser1(null);
    setIsDialogOpen(false); 
  }

  const handleRefresh = ()=>{

  }

  return (
  
    <div ref={bgRef} className="p-6  h-full w-full bg-opacity-50 text-white relative bg-slate-800">
      <h2 className="text-2xl font-bold mb-6 text-center"><i className="ri-group-fill mr-3"></i>Team Members</h2>
      <button onClick={handleRefresh} className='absolute right-0 top-0 mr-6 mt-6 scale-150'
        data-tooltip-id="team-refresh"
        data-tooltip-content="Refresh"
      ><i class="ri-refresh-line"></i></button>
      <Tooltip id="team-refresh" />
      {( teamMembers.length ? (<div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} 
          className="bg-black shadow-sm shadow-[#008da3] bg-opacity-20 rounded-lg p-4 flex flex-col items-center relative cursor-pointer" 
          onClick={() => openMemberModal(member)}
          ref={(e)=>{
            cardRef.current.push(e);
          }}
          >
            <LazyLoadImage
              src={member?.image?.startsWith("//")
                ? `https:${member.image}`
                : member?.image||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"}
              alt="Lazy loaded example"
              effect="blur"
              width="50%"
              className="h-full w-full object-cover block p-0 m-0 rounded-full"
              referrerPolicy="no-referrer"
            />
            {/* <img src={member?.image||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"} loading='lazy' alt={member.fullname} className="w-20 object-contain h-20 rounded-full border mb-2" /> */}
            <h2 className="text-xl font-semibold text-center">
            {member?.isMember && <img src="/global-svgrepo-com.svg" loading="eager|lazy" alt="univens member" className='absolute left-[-1%] top-[-1%] w-10 h-10 scale-50' />}
            {member?.isInvited && <p className='bg-green-700 px-3 py-1 absolute right-[-1%] top-[-1%] scale-50'>invited</p>}
              {member.fullname}
            </h2>
            <p className="text-gray-300 text-center">{member.role || "role not mentioned"}</p>
            <i className="ri-pushpin-fill absolute  -top-2 left-1/2"></i>
          </div>
        ))}
      </div> ): ( 
        <div className='h-full w-full flex items-start justify-center text-center'>Invite Your Friends and start working with Univens</div>
       ) )}

      {selectedMember && (
        <div ref={modalRef} className="fixed inset-0 flex items-center justify-center bg-opacity-50" onClick={closeMemberModal}>
        <div  className="bg-[#00125b] p-6 rounded shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
          <h3 className="text-lg font-semibold text-center mb-2">{selectedMember.fullname}</h3>
          <img src={selectedMember.image} alt={selectedMember.fullname} className="w-24 h-24 rounded-full bg-black mx-auto mb-2 object-contain" /> 
          <p className="text-gray-500 mb-2 text-center">{selectedMember.role||"role not mentioned"}</p>
          {selectedMember.isMember && <img src="/global-svgrepo-com.svg" alt="univens member" className='absolute left-[0%] top-[0%] w-10 h-10 scale-50' />}
          <div className='h-full w-full flex flex-col justify-start'>
            <p><span className='font-bold'>Company Name:</span> {selectedMember.companyName||"Not Mentioned"} </p>
            {selectedMember.dob && (<p><span className='font-bold'>Date of Birth:</span> {new Date(selectedMember.dob).toISOString().split("T")[0]||"Not Mentioned"}</p>)}
            <p><span className='font-bold'>Email:</span> {selectedMember.email||"Not Mentioned"}</p>
            <p><span className='font-bold'>Gender:</span> {selectedMember.gender||"Not Mentioned"}</p>
            <p><span className='font-bold'>Address:</span>  {selectedMember.address||"Not Mentioned"}</p>
            <p><span className='font-bold'>Phone:</span> {selectedMember.phoneNumber||"Not Mentioned"}</p>
            <p><span className='font-bold'>Website Link:</span>
              { selectedMember.websiteLink ? (<a href={selectedMember.websiteLink} target="_blank" rel="noopener noreferrer" ><i className="ml-3 cursor-pointer ri-link"></i></a>)
              :"Not Mentioned"}</p>
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <div className='flex justify-between w-full'>
            <button className="mt-2 px-1 bg-gray-200 text-blue-500 rounded-full" onClick={() => editMember(teamMembers.findIndex(m => m.fullname === selectedMember.fullname))}><i className="ri-edit-2-line"></i></button>
            <button className="mt-2 px-1 bg-gray-200 text-red-500 rounded-full" onClick={() => deleteMember(teamMembers.findIndex(m => m.fullname === selectedMember.fullname))}><i className="ri-delete-bin-6-line"></i></button>
          </div>
          </div>
          <button className="absolute top-0 right-0 m-4 px-1 text-gray-500 bg-white rounded-full" onClick={closeMemberModal}><i className="ri-close-line text-2xl"></i></button>
        </div>
      </div>
      )}

      <button 
        ref={plusIconRef} 
        className="fixed bottom-5 right-5 bg-[#00c0b0] text-white p-4 rounded-full shadow-lg" 
        onClick={() => setIsDialogOpen(true)}
        onMouseEnter={(e) => gsap.to(e.currentTarget, { rotate: 45, duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.currentTarget, { rotate: 0, duration: 0.3 })}
        >
        <FaPlus size={24} />
      </button>

      {isDialogOpen && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-[#1a1a1a] text-white p-6 rounded shadow-lg w-96 relative">
          <h2 className="text-xl font-semibold mb-4">Add New Member</h2>

          <label htmlFor="searchMem">Member already exists in UNIVENS!</label>
          <input
            type="text"
            id="searchMem"
            placeholder="Search member by email"
            className="text-white my-2 outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10"
            onChange={async(e)=>{
              const email = e.target.value;
              if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
                if(user1) setUser1(null);
                return;
              } 
              if(user.email === email){
                toast("Enter Your Friends Email");
                return;
              }
              
              if(teamMembers.find((key)=>{ return key.email===email;  })){
                toast("team member already added");
                return;
              } 

              try{
                const storedUser = JSON.parse(localStorage.getItem("user-info"));
                const token = storedUser?.token;
                const response = await searchEmail(email,token);
                const u = response.data.user;
                u.isInvited=true;
                u.isMember=true;
                setUser1(u);
              }catch(err){}
            }}
          />

          {user1 && (<div onClick={handleSelection} className="h-fit w-fit text-sm px-3 py-2 hover:bg-slate-900 bg-zinc-700 absolute z-50 flex items-center justify-center cursor-pointer rounded-sm">
            <div className="w-9 h-9 rounded-full overflow-hidden border-4 shadow-md mr-2">
            <LazyLoadImage
                src={user1?.image?.startsWith("//")
                ? `https:${user1.image}`
                : user1?.image||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRR8brJpXF3vGjGa6wg-2z3Xo_OqJL2G3vg&s"}
              alt="Lazy loaded example"
              effect="blur"
              width="100%"
              className="h-full w-full object-cover block p-0 m-0 rounded-full"
              referrerPolicy="no-referrer"
            />
            </div>
            <span>{`${user1?.fullname} ${user1?.role && `(${user1?.role})`}`}</span>
          </div>)}

          

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm md:text-base">
              <span className="px-2 text-white bg-[#1a1a1a]">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10 my-1 mt-2"
              {...register("name")}
            />

            <input
              type="text"
              placeholder="Role"
              className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10 my-1"
              {...register("role")}
            />

            <input
              type="email"
              placeholder="Email address"
              className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10 my-1"
              {...register("email")}
            />

            <button type="submit" className="w-full bg-blue-500 text-white p-2 my-2 rounded">
              <i className="ri-send-plane-fill ml-2"></i> Invite
            </button>
          </form>

          <button className="absolute top-0 right-0 m-4 px-4 py-2 text-white rounded-full" onClick={closeMemberModal}>
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
      </div>
      )}

    </div>
  );
};

export default UserTeam;