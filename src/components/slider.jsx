import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({
    lookingFor: "",
    description: "",
    communicationChannel: "",
  });

  const prev1 = useRef(null);
  const textAreaRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [fileId, setFileId] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFileChange = (event) => setFiles(event.target.files);

  const handleCardUpwardCurrent = () => {
    gsap.to(`.card-${index}`, {
      top: "-130%",
      scale: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const handleCardUpwardNext = (delay = 1) => {
    gsap.set(".card-0", { scale: 0.85, top: "100%" });
    gsap.to(".card-0", {
      delay,
      scale: 0.85,
      top: "0%",
      duration: 1,
      ease: "power2.inOut",
    });
  };

  const onSubmit = async (data) => {
    try {
      const jsonData = {
        fullname: data.fullName,
        companyName: data.companyName,
        websiteLink: data.companyWebsite,
        phoneNumber: data.phone,
        email: data.email,
        fileId: fileId || "",
        role: "Business",
      };

      await axios.post("http://localhost:8080/user/create", jsonData, {
        headers: { "Content-Type": "application/json" },
      });

      handleCardUpwardCurrent();
      handleCardUpwardNext(1.5);
      toast.success("✅ Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error(`❌ ${error.response?.data?.message || "Something went wrong."}`);
    }
  };

  const handleSelection1 = (event) => {
    setObj((prevObj) => ({ ...prevObj, lookingFor: event.target.value }));
  };

  const handleSelection = (e, prevRef) => {
    if (prevRef.current !== null) {
      prevRef.current.classList.remove("bg-white", "text-black");
      prevRef.current.classList.add("bg-transparent", "text-white");
    }

    prevRef.current = e.target;
    e.target.classList.remove("bg-transparent", "text-white");
    e.target.classList.add("bg-white", "text-black");
  };

  useGSAP(() => {
    if (index === 0) {
      handleCardUpwardNext(0.75);
    }
  }, []);

  const handleNext = () => {
    if (index === 1 && textAreaRef.current.value) {
      setObj((x) => ({ ...x, description: textAreaRef.current.value }));
    } else if (index === 1) {
      toast("✅ Don't Miss to write description");
      return;
    }

    if (index === 2 && files.length === 0) {
      toast("⚠️ No files selected");
      return;
    }

    if (index === 3 && prev1.current) {
      const text = prev1.current.textContent.trim();
      setObj((x) => ({ ...x, communicationChannel: text }));
    } else if (index === 3) {
      toast("✅ Select an option to move forward");
      return;
    }

    handleCardUpwardCurrent();
    setIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  return (
    <>
      <ToastContainer />
      <div className="text-white font-sans h-[80vh] flex flex-col">
        <div className="overflow-hidden relative min-h-[80vh] flex-grow">
          <div className="relative w-full flex justify-center">
            <div className={`card-${index} absolute`}>
              <h2>{index + 1}. {obj.lookingFor || "What are you looking for?"}</h2>
              {index === 0 && (
                <select value={obj.lookingFor} onChange={handleSelection1} className="bg-transparent shadow-xl outline-none w-[70%] text-white">
                  <option value="" disabled>What are you looking for?</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Marketing Services">Marketing Services</option>
                  <option value="HR Solutions">HR Solutions</option>
                  <option value="Other Services">Other Services</option>
                </select>
              )}
              {index === 1 && (
                <textarea
                  ref={textAreaRef}
                  style={{ resize: "none", minHeight: "100px", maxHeight: "300px" }}
                  className="text-white bg-transparent shadow-xl min-w-[80%] px-4 py-2 rounded-lg text-sm"
                  placeholder="E.g. We need a custom CRM system to manage sales."
                />
              )}
              {index === 2 && (
                <input type="file" multiple onChange={handleFileChange} className="bg-transparent shadow-xl text-gray-400 py-2 px-2 rounded-lg" />
              )}
              {index === 3 && (
                ["Email", "Phone Call", "Video Call", "WhatsApp", "Slack"].map((channel, idx) => (
                  <button key={idx} onClick={(e) => handleSelection(e, prev1)} className="cursor-pointer bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center w-full">
                    <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">{idx + 1}</span>
                    {channel}
                  </button>
                ))
              )}
              <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-xl mt-5">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
