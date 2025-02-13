const apiUrl = import.meta.env.VITE_API_URL;
import React, { useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({ lookingFor: "", description: "", communicationChannel: "" });

  const textAreaRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [fileId, setFileId] = useState(null);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const handleFileChange = (event) => setFiles(event.target.files);

  const handleCardUpwardCurrent = ()=>{
    gsap.to(`.card-${index}`, {
      top: "-130%",
      scale: 0,
      duration: 0.8,
      ease: "power2.inOut"
    });
  }

  const handleCardUpwardNext = (delay, top)=>{
    gsap.set(".card-0", { scale: 0.85, top: "100%" });
    gsap.to(".card-0", {
      delay,
      scale: 0.85,
      top,
      duration: 1,
      ease: "power2.inOut"
    });
  }

  const onSubmit = async (data) => {
    try {
      if (!data.fullName) {
        toast.error("❌ Your full name is required", { position: "top-center" });
        return;
      }
      if (!data.companyName) {
        toast.error("❌ Company/Business name is required", { position: "top-center" });
        return;
      }
      if (!data.role) {
        toast.error("❌ Your role is required", { position: "top-center" });
        return;
      }
      if (!data.email) {
        toast.error("❌ Your e-mail is required", { position: "top-center" });
        return;
      }
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
        toast.error("❌ Enter a valid email", { position: "top-center" });
        return;
      }
      if (!data.phone) {
        toast.error("❌ Your phone number is required", { position: "top-center" });
        return;
      }
      if (!/^[0-9]{10,15}$/.test(data.phone)) {
        toast.error("❌ Enter a valid phone number", { position: "top-center" });
        return;
      }
  
      const jsonData = {
        fullname: data.fullName,
        companyName: data.companyName,
        websiteLink: data.companyWebsite,
        phoneNumber: data.phone,
        email: data.email,
        fileId: fileId || null,
        role:data.role,
      };

      const response = await axios.post(`${apiUrl}/user/create`, jsonData, {
        headers: { "Content-Type": "application/json" },
      });

      handleCardUpwardCurrent();
      handleCardUpwardNext(5,"-6%")
      setIndex(0);
      toast.success("✅ Form submitted successfully!",{
        position: 'top-center', 
      });
      setObj({ lookingFor: "What are you looking for?", description: "", communicationChannel: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error(`❌ ${error.response?.data?.message || "Something went wrong."}`,{
        position: 'top-center', 
      });
    }
  };

  const handleSelection1 = useCallback((event) => {
    setObj((prevObj) => ({ ...prevObj, lookingFor: event.target.value }));
  }, []);

  const cards = [
    {
      title: 'What are you looking for *',
      description: 'Choose One',
      content: (
        <select
          value={obj.lookingFor}
          onChange={handleSelection1}
          className="shadow-xl outline-none w-[90%] text-white px-8 py-3 bg-gray-950 border rounded-full"
        >
          <option className='bg-[#010102]' value="" disabled>What are you looking for?</option>
          <option className='bg-[#010102]' value="Branding & Marketing">Branding & Marketing</option>
          <option className='bg-[#010102]' value="Business Strategy & Planning">Business Strategy & Planning</option>
          <option className='bg-[#010102]' value="Customer Experience">Customer Experience</option>
          <option className='bg-[#010102]' value="Customer Support">Customer Support</option>
          <option className='bg-[#010102]' value="Funding & Investment">Funding & Investment</option>
          <option className='bg-[#010102]' value="Innovation">Innovation</option>
          <option className='bg-[#010102]' value="Sustainability">Sustainability</option>
          <option className='bg-[#010102]' value="Legal & Compliance">Legal & Compliance</option>
          <option className='bg-[#010102]' value="Operations & Efficiency">Operations & Efficiency</option>
          <option className='bg-[#010102]' value="Product Development">Product Development</option>
          <option className='bg-[#010102]' value="Risk Management">Risk Management</option>
          <option className='bg-[#010102]' value="Sales">Sales</option>
          <option className='bg-[#010102]' value="Growth">Growth</option>
          <option className='bg-[#010102]' value="Talent Acquisition">Talent Acquisition</option>
          <option className='bg-[#010102]' value="Tech Integration">Tech Integration</option>
          <option className='bg-[#010102]' value="Something else..">Something else..</option>
        </select>
      ),
    },
    {
      title: 'Describe Your Requirement *',
      description: 'Briefly Explain What You Need.',
      content: (
        <textarea
          ref={textAreaRef}
          style={{ resize: 'none', minHeight: '200px', maxHeight: '400px'}}
          className="text-white bg-transparent shadow-xl min-w-[100%] px-5 py-3 rounded-3xl text-sm outline-none border overflow-y-scroll"
          placeholder="Hi, I want to."
        />
      ),
    },
    {
      title: 'Share supporting document',
      description: 'Upload Project Briefs, Designs, Or Other Relevant Documents.',
      content: <input onChange={handleFileChange} multiple type="file" className="bg-transparent shadow-xl text-gray-400 py-2 px-2 rounded-lg" />,
    },
    {
      title: "Let's get to know you and your business *",
      description: 'Fill it carefully!',
      content: (
        <form onSubmit={handleSubmit(onSubmit)} className="text-white z-[100000]">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full name"
            {...register("fullName")}
            className=" bg-gray-950 shadow-xl  text-white px-5 py-3 rounded-full border w-full"
          />
        </div>
        <div className="flex justify-between gap-10 w-full mb-4">
          <div className='w-full h-full'>
            <input
              type="text"
              placeholder="Company/ Business name"
              {...register("companyName")}
              className="bg-gray-950 shadow-xl text-white outline-none px-5 py-3 rounded-full border w-[120%] md:w-[110%]"
            />
          </div>
          <div className='w-[60%] h-full'>
            <input
              type="text"
              placeholder="role"
              {...register("role")}
              className="bg-gray-950 shadow-xl outline-none text-white px-5 py-3 rounded-full border w-[75%] md:w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            className="inline bg-gray-950 shadow-xl outline-none text-white px-5 py-3 rounded-full border w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Number to hear back from us"
            {...register("phone")}
            className="inline bg-gray-950 shadow-xl outline-none text-white px-5 py-3 rounded-full border w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Link to your Website (if available)"
            {...register("companyWebsite")}
            className="inline bg-gray-950 shadow-xl outline-none text-white px-5 py-3 rounded-full border w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-xl mt-0">
          Submit
        </button>
      </form>      
      ),
    }
  ];

  useGSAP(() => {
    if( index === 0 ){
      handleCardUpwardNext(0.75,"-6%");
    }
  },[]);

  const handlePrev = () => {
    if (index === 0) return;
    gsap.to(`.card-${index}`, { top: "-130%", scale: 0, duration: 0.8, ease: "power2.inOut" });
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      gsap.to(`.card-${newIndex}`, { top: "-6%", scale: 0.85, duration: 0.8, ease: "power2.inOut" });
      return newIndex;
    });
  };

  const handleNext = async () => {

    if (index === 1 && textAreaRef.current.value) {
      setObj((x) => ({ ...x, description: textAreaRef.current.value }));
    } else if (index === 1) {
      toast("✅ Don't Miss to write description",{
        position: 'top-center', 
      });
      return;
    }

    if (index === 2) {
      if(files.length !== 0)
        toast("✅ files selected",{
          position: 'top-center', 
        });

      const formData = new FormData();
      formData.append('lookingFor', obj.lookingFor);
      formData.append('description', obj.description);
      Array.from(files).forEach((file) => formData.append('file', file));

      axios.post(`${apiUrl}/file/create`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((response) => {
        toast("✅ Data uploaded successfully!",{
          position: 'top-center', 
        });
        setFileId(response.data.data._id||"");
      }).catch((err) => {
        console.log(err);
        toast("❌ Something went wrong",{
          position: 'top-center', 
        });
      });
    } 

    handleCardUpwardCurrent();

    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % cards.length;
      gsap.to(`.card-${newIndex}`, {
        top: "-6%",
        scale: 0.85,
        duration: 0.8,
        ease: "power2.inOut"
      });
      return newIndex;
    });
  };

  return (
    <>
      <ToastContainer style={{ zIndex: 100000000000 }} position="top-center" />
      <div className="text-white font-sans h-[100vh] flex flex-col">
        <div className="overflow-hidden -translate-y-5 relative min-h-[100vh] flex-grow font">
          {cards.map((card, cardIndex) => (
            <div key={cardIndex} className={`card-${cardIndex} ${cardIndex===0 ? "scale-[1]" : "scale-[0.85]"}  absolute top-[-130%] left-1/2 -translate-x-1/2 min-w-96 max-w-xl w-full h-full flex justify-center items-start`}>
              <div className={`${cardIndex===0 && "flex gap-3"} text-white ${cardIndex!==0 && "p-6 rounded-lg"} w-full max-w-2xl ${cardIndex!==0&&"bg-black"}`}>
                { cardIndex!==0 && cardIndex!==1 && <p className="text-sm font-semibold mb-5">{card.title}</p> }
                { cardIndex!==0 && cardIndex!==1 && cardIndex!==3 && <p className="text-sm text-gray-400 mb-5">{card.description}</p> }
                {card.content}
                {cardIndex !== 3 && (
              <div className="flex justify-between flex-wrap">
                {cardIndex !== 0 && (
                  <button
                    onClick={handlePrev}
                    className="rounded-full text-base mt-2 text-center w-10"
                  >
                    <img src="/arrow-left-s-line.svg" className='h-[100%] object-cover' style={{
                      filter:"invert(1)"
                    }} alt="arrow-left-s-line" />
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className={`bg-[#295AAD] text-white text-base px-1 py-2 ${cardIndex !==0 && "mt-2"} rounded-full hover:bg-[#295AAD] w-28 text-center`}
                >
                  {cardIndex === 0 ? "Get Started" : "Next"}
                </button>
              </div>
            )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slide;
