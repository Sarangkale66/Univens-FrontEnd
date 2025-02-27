import React, { useState } from 'react';

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
    profilePhoto: 'https://via.placeholder.com/150',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <div className="h-screen bg-[#010E1A] flex items-center justify-center w-screen p-3">
      <div className="w-full h-full max-w-6xl bg-[aliceblue] rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Left Column: Profile Photo and Basic Info */}
        <div className="bg-[#295AAD] p-6 text-white flex flex-col items-center justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <img src={user.profilePhoto} alt="" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-semibold text-center md:text-left">{user.name}</h1>
          <p className="text-lg text-center md:text-left">{user.role}</p>
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="mt-6 w-[130px] bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            {isEditMode ? 'Cancel' : 'Edit Profile'}
          </button>
          {isEditMode && (
            <button
              onClick={handleSave}
              className="mt-2 bg-green-500 w-[130px] text-[white] py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Save Changes
            </button>
          )}
        </div>

        {/* Middle Column: Editable Fields */}
        <div className="p-6 space-y-6 border-l border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
          {['name', 'number', 'dob', 'email', 'address','role'].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-semibold mb-2 capitalize">{field.replace('_', ' ')}</label>
              {isEditMode ? (
                <input
                  type={field === 'dob' ? 'date' : 'text'}
                  name={field}
                  value={user[field]}
                  onChange={handleInputChange}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              ) : (
                <p className="text-gray-600">{user[field]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Team Members */}

        <div className="p-6 border-l border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Team Members</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {user.teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
