import React, { useState, useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextAPI/AppContext";
import AnimatedCounter from "./AnimatedCounter ";

const UserEdit = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const bgRef = useRef(null);

  useEffect(() => {
    gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
  }, []);

  return (
    <div
  ref={bgRef}
  className="w-full h-full p-6 text-white bg-slate-800 bg-opacity-50 md:overflow-y-auto"
>
  <div className="relative flex items-center justify-between mb-6">
    <h2 className="text-2xl font-bold text-center flex items-center mx-auto">
      <i className="ri-user-3-fill mr-2"></i> Profile Details
    </h2>

    {isEditMode && (
      <button
        className="absolute right-5 top-0 p-2 hover:bg-gray-700 rounded-full transition"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        <i className="ri-close-line text-2xl"></i>
      </button>
    )}

    {!isEditMode && (
      <span
        onClick={() => navigate("/User")}
        className="text-gray-400 text-sm cursor-pointer flex font-bold items-center gap-1 bg-white rounded-full px-2 py-1 shadow-sm transition hover:scale-110"
      >
        <i className="ri-edit-line text-red-500"></i> Edit
      </span>
    )}
  </div>

  {!isEditMode && (
    <div className="flex flex-col md:flex-row gap-1 md:justify-center md:gap-6">
      <div className=" h-full">
         <AnimatedCounter title={"Team Members"} value={user?.teamLen||0} className="mx-auto mb-2" />
         <AnimatedCounter title={" Requests "} value={user?.fileIdsLen||0} className="mx-auto mb-2"  />
      </div>
      { user && (
          <div className="w-full md:w-1/2 bg-slate-800 p-3 flex flex-col gap-2">
          {[
            { id: "fullname", name: "Full Name" },
            { id: "phoneNumber", name: "Phone Number" },
            { id: "dob", name: "Date of Birth" },
            { id: "email", name: "Email" },
            { id: "address", name: "Address" },
            { id: "gender", name: "Gender" },
            { id: "role", name: "Role" },
            { id: "websiteLink", name: "Web Link" },
            { id: "companyName", name: "Company Name" },
          ].map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-between border-b border-gray-800 pb-2"
            >
              <label className="font-bold text-white capitalize ">
                {field.name.replace("_", " ")}
              </label>
              {field.id === "websiteLink" ? (
                <a
                  href={user[field.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-semibold text-blue-400 transition"
                >
                  <i className="ri-link"></i>
                </a>
              ) : field.id === "dob" ? (
                <span className="text-gray-400">
                  {new Date(user[field.id]).toLocaleDateString()}
                </span>
              ) : (
                <p className="font-bold text-white whitespace-nowrap overflow-hidden overflow-ellipsis max-w-40">{user[field.id]}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )}
</div>
  );
};

export default UserEdit;
