import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({ lookingFor: "", description: "", communicationChannel: "" });
  const [files, setFiles] = useState([]);
  const sliderRef = useRef(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFileChange = (event) => setFiles(event.target.files);

  useEffect(() => {
    gsap.set(".card", { opacity: 0, y: 50 });
    gsap.to(".card", { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 });
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="text-white font-sans h-[80vh] flex flex-col bg-gray-900 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
        <div className="overflow-hidden relative min-h-[70vh] flex-grow" ref={sliderRef}>
          <div className="absolute top-0 left-0 w-full flex flex-col items-center space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center w-full card">
              <h2 className="text-lg font-semibold">Enhanced Slider UI</h2>
              <p className="text-gray-400">This UI now features smoother animations and improved structure.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
