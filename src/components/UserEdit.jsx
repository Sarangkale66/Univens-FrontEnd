import React, { useState, useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { useForm } from "react-hook-form";
import { getUserUpdate } from "../api/UserAPI";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextAPI/AppContext";

const UserEdit = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const {register, handleSubmit,reset } = useForm(); 

  const confirmSave = async(data) => {
    console.log(data);
    
    try{
       const storedUser = JSON.parse(localStorage.getItem("user-info"));
       const token = storedUser?.token;
       const result = await getUserUpdate(data,token);
       const { email, fullname, image, role, phoneNumber, companyName, address, websiteLink, dob, gender } = result.data.user;
       const isCompleted = result.data.isCompleted;
       const userInfo = { email, fullname, image, token, role, phoneNumber, companyName, address, websiteLink, dob, isCompleted, gender };
       localStorage.setItem("user-info", JSON.stringify(userInfo));
       setUser({ email, fullname, image, role, phoneNumber, companyName, address, websiteLink, dob, gender });
       setIsEditMode(false);
       setShowDialog(false);
    }catch(err){
      console.log(err);
    }
  };

  const bgRef = useRef(null);

  useEffect(() => {
    gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);
    setUser(userData);
    reset(userData);
  }, []);

  return (
    <div
      ref={bgRef}
      className="space-y-4 w-[100%] md:overflow-y-auto bg-opacity-50 bg-slate-800 p-6 text-white"
    >
      <div className="flex gap-3 mb-5 ">
        <h2 className="text-2xl font-bold mx-auto text-center"><i className="ri-user-3-fill mr-2"></i>Profile Details</h2>
        {!isEditMode && (
          <span
            onClick={() => setIsEditMode(!isEditMode)}
            className="text-gray-400 text-sm cursor-pointer scale-150 bg-white h-fit w-fit rounded-full px-1"
          >
            <i className="ri-edit-line text-red-500"></i>
          </span>
        )}
      </div>
      { !isEditMode && (<div className="flex flex-col md:justify-center md:flex-row gap-5 ">
        <div className="h-full w-[100%] md:w-[75%] flex flex-col gap-5"> 
          {[{ id:"fullname", name:"Full Name" }, { id:"phoneNumber", name:"Phone Number"}, { id:"dob", name:"Date of Birth" }, { id:"email", name:"Email" }, { id:"address", name:"Address" }, { id:"gender", name:"Gender" }, { id:"role", name:"Role"}, {id:"websiteLink", name:"Web Link"},{ id:"companyName", name:"Company Name" }].map((field) => (
            <div key={field.id} className="flex w-[100%] justify-between">
              <label className="block font-bold capitalize">
                {field.name.replace("_", " ")}
              </label>
              {(
                field.id==="websiteLink" ?
                  (<span><a href={user[field.id]} target="_blank" rel="noopener noreferrer" ><i className="ml-3 text-gray-400 cursor-pointer ri-link"></i></a></span>)
                : field.id==="dob" ? ( <span className="text-gray-400">{`${new Date(user[field.id]).getDate().toString().padStart(2, "0")}-${(new Date(user[field.id]).getMonth() + 1).toString().padStart(2, "0")}-${new Date(user[field.id]).getFullYear()}`}</span> ) 
                : (<p className="text-gray-400">{user[field.id]}</p>)
              )}
            </div>
          ))}
        </div>
      </div>)}

    {isEditMode && (
      <form className="w-[75%] text-black mx-auto" onSubmit={handleSubmit(confirmSave)}>
          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Full Name:</label>
            <input
              type="text"
              {...register("fullname")}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base "
              placeholder="Enter FullName"
              style={{ filter: "invert(1)" }}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-md text-white mb-1">Email:</label>
            <input
              type="text"
              {...register("email")}
              className=" w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base "
              placeholder="Email"
              style={{ filter: "invert(1)" }}
            />
          </div>

        <div className="mb-6">
          <label className="block font-semibold text-md text-white mb-1">Date of Birth:</label>
          <input
            type="date"
            {...register("dob")}
            className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#44082f] text-base"
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
          onClick={(e)=>{ e.preventDefault(); setShowDialog(true); }}
          className="w-full mb-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out text-xl md:text-2xl font-bold shadow-lg"
        >
          Submit
        </button>
        {showDialog && (
            <div className="sticky inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[100%] max-w-md relative">
                <p className="text-lg font-semibold text-gray-700 text-center">
                  Are you sure you want to save the changes?
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button
                    onClick={() => setShowDialog(false)}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
        )}
      </form>

      )}
    </div>
  );
};

export default UserEdit;
