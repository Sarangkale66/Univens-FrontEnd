import React, { useRef, useEffect, useState, useContext } from 'react'
import gsap from 'gsap';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { getUserUpdate } from '../api/UserAPI';
import { toast } from 'react-toastify';
import  { AppContext } from '../contextAPI/AppContext'

const UserHome = () => {

  const [additionalData, setAdditionalData] = useState({
      dob: '',
      phoneNumber: '',
      websiteLink: '',
      role: '',
      companyName:'',
      address:'',
    });

    const { user, setUser } = useContext(AppContext);

    const navigate = useNavigate();
    const {register, handleSubmit } = useForm({ defaultValues:additionalData }); 
  
  
    const handleAdditionalSubmit = async(data) => {
      console.log(data);
      
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(data.phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }
  
      const dob = new Date(data.dob);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      if (age < 13) {
        alert('You must be at least 13 years old to register');
        return;
      }
  
      if (data.websiteLink) {
        try {
          new URL(data.websiteLink);
        } catch (e) {
          alert('Please enter a valid website URL');
          return;
        }
      }

      try{
        const storedUser = JSON.parse(localStorage.getItem("user-info"));
        const token = storedUser?.token;
        const result = await getUserUpdate(data,token);
        const { email, fullname, image, role, phoneNumber, companyName, address, websiteLink, dob, gender } = result.data.user;
        const isCompleted = result.data.isCompleted;
        const userInfo = { email, fullname, image, token, role, phoneNumber, companyName, address, websiteLink, dob, isCompleted, gender };
  
        localStorage.setItem("user-info", JSON.stringify(userInfo));
        
        navigate("/User/edit");
        
      }catch(err){
        toast("Internal server issue");
        console.log(err);
      }

    };

  const bgRef = useRef(null);

  useEffect(() => {
    gsap.from(bgRef.current, { y: 10, opacity: 0, duration: 0.5, delay: 0.2 });

    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);

    if(userData?.isCompleted){
      navigate('/User/edit')
    }
    
  },[]);

  return (
    <div ref={bgRef} className="p-6 h-full w-full border-gray-300">
      <div className="w-full relative">
        <button
          className="px-4 py-2 text-white rounded-full fixed right-0 top-0"
          onClick={() => navigate("/User/edit")}
        >
          <i className="ri-close-line text-2xl"></i>
        </button>
        <h2 className="text-xl md:text-2xl text-white font-bold mb-6 text-center">
          <i className="ri-edit-box-line mr-3"></i>Complete Your Profile
        </h2>
        <form className="w-[75%] mx-auto" onSubmit={handleSubmit(handleAdditionalSubmit)}>
          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Date of Birth:</label>
            <input
              type="date"
              {...register("dob")}
              className="w-full bg- px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base"
              max={new Date(new Date().setFullYear(new Date().getFullYear() - 13))
                .toISOString()
                .split("T")[0]}
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Phone Number:</label>
            <input
              type="tel"
              {...register("phoneNumber", { pattern: /^\d{10}$/ })}
              className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base"
              placeholder="10-digit number"
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Website (Optional):</label>
            <input
              type="url"
              {...register("websiteLink")}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base"
              placeholder="https://example.com"
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Role:</label>
            <input
              type="text"
              {...register("role")}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base "
              placeholder="Software Engineer"
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Company Name (Optional):</label>
            <input
              type="text"
              {...register("companyName")}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base "
              placeholder="eg. Univens"
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Address:</label>
            <input
              type="text"
              {...register("address")}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base "
              placeholder="eg. Navi Mumbai Maharashtra"
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Gender:</label>
            <select
              {...register("gender")}
              style={{ filter: "invert(1)" }}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base "
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mb-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out text-xl md:text-2xl font-bold shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserHome