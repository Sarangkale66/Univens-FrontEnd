import React, { useState } from 'react'

const AdditionalDetails = () => {
  const [additionalData, setAdditionalData] = useState({
    dob: '',
    phone: '',
    website: '',
    role: '',
  });

  const handleAdditionalChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdditionalSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(additionalData.phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    const dob = new Date(additionalData.dob);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 13) {
      alert('You must be at least 13 years old to register');
      return;
    }

    if (additionalData.website) {
      try {
        new URL(additionalData.website);
      } catch (e) {
        alert('Please enter a valid website URL');
        return;
      }
    }

    console.log('Additional Details:', additionalData);
    alert('Signup Successful! 🎉');
  };

  return (
    <div className='w-full'>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
              Complete Your Profile
            </h2>
            <form className='w-full' onSubmit={handleAdditionalSubmit}>
              <div className="mb-6">
                <label className="block text-xl md:text-xl text-white">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={additionalData.dob}
                  onChange={handleAdditionalChange}
                  className="text-black w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-green-200  text-base"
                  required
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 13)).toISOString().split('T')[0]}
                />
              </div>
              <div className="mb-6 ">
                <label className="block text-xl text-white">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={additionalData.phone}
                  onChange={handleAdditionalChange}
                  className="text-black w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-green-200 text-base"
                  required
                  pattern="\d{10}"
                  placeholder="10-digit number"
                />
              </div>
              <div className="mb-6">
                <label className="block text-xl text-white">Website (Optional)</label>
                <input
                  type="url"
                  name="website"
                  value={additionalData.website}
                  onChange={handleAdditionalChange}
                  className="text-black w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-green-200 text-base"
                  placeholder="https://example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-xl text-white">Role:</label>
                <select
                  name="role"
                  value={additionalData.role}
                  onChange={handleAdditionalChange}
                  className="text-black w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-green-200 text-base"
                  required
                >
                  <option value="" disabled>Select Role</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#00ffffdd] text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out text-xl md:text-2xl font-bold shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
  )
}

export default AdditionalDetails