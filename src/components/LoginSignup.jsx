import React, { useState } from 'react';
import LogAni from './LogAni';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // Step 1: Login/Signup, Step 2: Additional Details

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [additionalData, setAdditionalData] = useState({
    dob: '',
    phone: '',
    website: '',
    role: '',
  });

  // Handles change for login/signup form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles change for additional profile form fields
  const handleAdditionalChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (isLogin) {
      console.log('Logging in with:', formData);
      alert('Login Successful! ✅');
    } else {
      console.log('Signing up with:', formData);
      setStep(2);
    }
  };

  const handleAdditionalSubmit = (e) => {
    e.preventDefault();
    console.log('Additional Details:', additionalData);
    alert('Signup Successful! 🎉');
    setIsLogin(true);
    setStep(1);
  };

  return (
   <div className='relative h-[100vh] w-[100vw] '>
      <LogAni/>
    <div className="rounded-lg shadow-lg w-[25vw] h-[45vh] flex justify-center items-center flex-col absolute top-[27%] left-[38%] gap-10">
      {step === 1 ? (
        <>
          <h2 className="text-white text-5xl font-semibold text-center mb-6">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <form className='h-full w-full' onSubmit={handleSubmit}>
            <div className="mb-9">
              <label className="block text-2xl text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-9">
              <label className="block text-white text-2xl ">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-9">
                <label className="block text-white text-2xl ">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition duration-200 text-2xl "
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className="text-white text-2xl text-center mt-9">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <span
              onClick={() => {
                setIsLogin(!isLogin);
                setStep(1);
              }}
              className="text-[green] cursor-pointer hover:underline"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </span>
          </p>
        </>
      ) : (
    
        <div className='absolute top-[-9.9] '>
          <h2 className="text-white text-4xl font-semibold text-center ">
            Complete Your Profile
          </h2>
          <form className='h-full w-full mt-9' onSubmit={handleAdditionalSubmit}>
            <div className="mb-9">
              <label className="block text-2xl  text-white">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={additionalData.dob}
                onChange={handleAdditionalChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-9">
              <label className="block text-2xl  text-white">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={additionalData.phone}
                onChange={handleAdditionalChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-9">
              <label className="block text-2xl  text-white">Website (Optional):</label>
              <input
                type="url"
                name="website"
                value={additionalData.website}
                onChange={handleAdditionalChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-9">
              <label className="block text-2xl  text-white">Role:</label>
              <select
                name="role"
                value={additionalData.role}
                onChange={handleAdditionalChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Moderator">Moderator</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full text-2xl py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
    </div>
 
  );
}

export default LoginSignup;
