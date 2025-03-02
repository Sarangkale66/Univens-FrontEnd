import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaPlus } from 'react-icons/fa';

const UserTeam = () => {
  const [teamMembers, setTeamMembers] = useState([
    { name: 'Alice', role: 'Frontend Developer', profilePhoto: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isMember: true },
    { name: 'Bob', role: 'Backend Developer', profilePhoto: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isMember: false },
    { name: 'Charlie', role: 'UI/UX Designer', profilePhoto: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isMember: false },
    { name: 'David', role: 'DevOps Engineer', profilePhoto: 'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isMember: true },
  ]);

  const [newMember, setNewMember] = useState({ name: '', role: '', profilePhoto: '', isMember: false });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const modalRef = useRef(null);
  const bgRef = useRef(null);
  const plusIconRef = useRef(null);
  const bg = useRef(null);
  let cardRef = useRef([]);

  useEffect(() => {
    gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
    gsap.from(plusIconRef.current,{ rotate:"180deg", delay:0.1  })
    const tl = gsap.timeline();
    tl.to(cardRef.current, { rotate: -5, duration: 0.5, transformOrigin: "top center" })
    tl.to(cardRef.current, { rotate: 4, duration: 0.5, transformOrigin: "top center" })
    tl.to(cardRef.current, { rotate: -1, duration: 0.5, transformOrigin: "top center" })
    tl.to(cardRef.current, { rotate: 0.5, duration: 0.5, transformOrigin: "top center" })
    tl.to(cardRef.current, { rotate: 0, duration: 0.5, transformOrigin: "top center" })
  }, []);

  const openMemberModal = (member) => {
    gsap.from(modalRef.current,{ opacity: 0, duration: 1 });
    setSelectedMember(member);
  };

  const handleAddMember = () =>{
    setTeamMembers([...teamMembers, newMember]); 
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

  return (
    <div ref={bgRef} className="p-6  h-full w-full bg-opacity-50 text-white relative">
      <h2 className="text-2xl font-bold mb-6 text-center">Team Members</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} 
          className="bg-black shadow-sm shadow-[#008da3] bg-opacity-20 rounded-lg p-4 flex flex-col items-center relative cursor-pointer" 
          onClick={() => openMemberModal(member)}
          ref={(e)=>{
            cardRef.current.push(e);
          }}
          >
            {member.isMember && <img src="/global-svgrepo-com.svg" alt="univens member" className='absolute left-0 top-0 w-10 h-10 m-1 z-30  scale-50' />}
            <img src={member.profilePhoto} alt={member.name} className="w-20 object-contain h-20 rounded-full border mb-2" />
            <h2 className="text-xl font-semibold text-center">{member.name}</h2>
            <p className="text-gray-300 text-center">{member.role}</p>
            <i className="ri-pushpin-fill absolute  -top-2 left-1/2"></i>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div ref={modalRef} className="fixed inset-0 flex items-center justify-center bg-opacity-50" onClick={closeMemberModal}>
        <div  className="bg-[#00125b] p-6 rounded shadow-lg w-96 text-center relative" onClick={(e) => e.stopPropagation()}>
          <h3 className="text-lg font-semibold mb-2">{selectedMember.name}</h3>
          <img src={selectedMember.profilePhoto} alt={selectedMember.name} className="w-24 h-24 rounded-full bg-black mx-auto mb-2 object-contain" /> 
          <p className="text-gray-500 mb-2">{selectedMember.role}</p>
          {selectedMember.isMember && <img src="/global-svgrepo-com.svg" alt="univens member" className='absolute left-0 top-0 w-10 h-10 m-1  scale-50' />}
          <div className='flex justify-center gap-4 mt-4'>
            <div className='flex justify-between w-full'>
            <button className="mt-2 px-1 bg-gray-200 text-blue-500 rounded-full" onClick={() => editMember(teamMembers.findIndex(m => m.name === selectedMember.name))}><i className="ri-edit-2-line"></i></button>
            <button className="mt-2 px-1 bg-gray-200 text-red-500 rounded-full" onClick={() => deleteMember(teamMembers.findIndex(m => m.name === selectedMember.name))}><i className="ri-delete-bin-6-line"></i></button>
          </div>
          </div>
          <button className="absolute top-0 right-0 m-4 px-1 text-gray-500 bg-white rounded-full" onClick={closeMemberModal}><i className="ri-close-line text-2xl"></i></button>
        </div>
      </div>
      )}

      <button 
        ref={plusIconRef} 
        className="fixed bottom-5 right-5 bg-[#004700] text-white p-4 rounded-full shadow-lg" 
        onClick={() => setIsDialogOpen(true)}
        onMouseEnter={(e) => gsap.to(e.currentTarget, { rotate: 45, duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.currentTarget, { rotate: 0, duration: 0.3 })}
        >
        <FaPlus size={24} />
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-95">
          <div className="bg-[#1a1a1a] text-white p-6 rounded shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
                <label for="searchMem">Member already exist in UNIVENS!</label>
                <input type="text" id='searchMem' placeholder="Search member By email" className="text-white my-2 outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10" onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm md:text-base">
                  <span className="px-2 text-white bg-[#1a1a1a]">Or continue with</span>
                </div>
              </div>
            <input type="text" placeholder="Enter Full Name" className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10 my-1 mt-2" onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} />
            <input type="text" placeholder="Role" className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10 my-1" onChange={(e) => setNewMember({ ...newMember, role: e.target.value })} />
            <input type="email" placeholder="Email address" className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10 my-1" onChange={(e) => setNewMember({ ...newMember, profilePhoto: e.target.value })} />
            <button className="w-full bg-blue-500 text-white p-2 my-2 rounded" onClick={handleAddMember}>Invite</button>
            <button className="absolute top-0 right-0 m-4 px-4 py-2 text-white bg-black rounded-full" onClick={closeMemberModal}><i className="ri-close-line text-2xl"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTeam;