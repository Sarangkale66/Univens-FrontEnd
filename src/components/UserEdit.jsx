import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const UserEdit = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [user, setUser] = useState({
    name: "omar",
    number: "+91 123-456-7890",
    dob: "2003-05-12",
    role: "Software Engineer",
    email: "omar@gmail.com",
    address: "nagpur",
    teamMembers: ["member1", "member3", "member3", "member4"],
    profilePhoto: "https://via.placeholder.com/150",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    setShowDialog(true);
  };

  const confirmSave = () => {
    setIsEditMode(false);
    setShowDialog(false);
  };

  const bgRef = useRef(null);

  useEffect(() => {
    gsap.from(bgRef.current, { x: 10, opacity: 0, duration: 0.5, delay: 0.2 });
  }, []);

  return (
    <div
      ref={bgRef}
      className="space-y-4 w-[100%] border-l border-gray-300 md:overflow-y-auto bg-[aliceblue] p-6"
    >
      <div className="flex gap-3">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">Profile Details</h2>
        {!isEditMode && (
          <span
            onClick={() => setIsEditMode(!isEditMode)}
            className="text-gray-400 text-sm cursor-pointer"
          >
            <i className="ri-edit-line text-red-500"></i>
          </span>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="h-full w-full flex flex-col gap-5">
          {["name", "number", "dob", "email", "address", "role"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 font-bold capitalize">
                {field.replace("_", " ")}
              </label>
              {isEditMode ? (
                <input
                  type={field === "dob" ? "date" : "text"}
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
      </div>

      {isEditMode && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setIsEditMode(false)}
            className="w-[130px] bg-white text-blue-500 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="w-[130px] bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Save Changes
          </button>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showDialog && (
        <div className="absolute top-[47.5%] left-0 transform -translate-y-1/2 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5  rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-700">
              Are you sure you want to save the changes?
            </p>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => setShowDialog(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={confirmSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEdit;
