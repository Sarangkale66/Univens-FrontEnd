const apiUrl = import.meta.env.VITE_API_URL;
import React, { useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [obj, setObj] = useState({ lookingFor: "", description: "", communicationChannel: "" });

  const prev = useRef(null);
  const prev1 = useRef(null);
  const textAreaRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [fileId, setFileId] = useState("");
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

  const handleCardUpwardNext = (delay)=>{
    gsap.set(".card-0", { scale: 0.85, top: "100%" });
    gsap.to(".card-0", {
      delay,
      scale: 0.85,
      top: "0%",
      duration: 1,
      ease: "power2.inOut"
    });
  }

  const onSubmit = async (data) => {
    try {
      const jsonData = {
        fullname: data.fullName,
        companyName: data.companyName,
        websiteLink: data.companyWebsite,
        phoneNumber: data.phone,
        email: data.email,
        fileId: fileId || "",
        role:"Bussiness",
      };

      const response = await axios.post(`${apiUrl}/user/create`, jsonData, {
        headers: { "Content-Type": "application/json" },
      });

      handleCardUpwardCurrent();
      handleCardUpwardNext(5)
      toast.success("✅ Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error(`❌ ${error.response?.data?.message || "Something went wrong."}`);
    }
  };

  const handleSelection1 = useCallback((event) => {
    setObj((prevObj) => ({ ...prevObj, lookingFor: event.target.value }));
  }, []);


  const handleSelection = (e, prevRef) => {
    if (prevRef.current !== null) {
      prevRef.current.classList.remove('bg-white', 'text-black');
      prevRef.current.classList.add('bg-transparent', 'text-white');
    }

    prevRef.current = e.target;
    e.target.classList.remove('bg-transparent', 'text-white');
    e.target.classList.add('bg-white', 'text-black');
  };

  const cards = [
    {
      title: '1. What are you looking for *',
      description: 'Choose One',
      content: (
        <select
          value={obj.lookingFor}
          onChange={handleSelection1}
          className="bg-transparent shadow-xl outline-none w-[70%] text-white"
        >
          <option className='bg-[#010102]' value="" disabled>What are you looking for?</option>
          <option className='bg-[#010102]' value="IT Services">IT Services</option>
          <option className='bg-[#010102]' value="Marketing Services">Marketing Services</option>
          <option className='bg-[#010102]' value="HR Solutions">HR Solutions</option>
          <option className='bg-[#010102]' value="Other Services">Other Services</option>
        </select>
      ),
    },
    {
      title: '2. Describe Your Requirement *',
      description: 'Briefly Explain What You Need.',
      content: (
        <textarea
          ref={textAreaRef}
          style={{ resize: 'none', minHeight: '100px', maxHeight: '300px' }}
          className="text-white bg-transparent shadow-xl min-w-[80%] px-4 py-2 rounded-lg text-sm"
          placeholder="E.g. We need a custom CRM system to manage sales."
        />
      ),
    },
    {
      title: '3. Share supporting document',
      description: 'Upload Project Briefs, Designs, Or Other Relevant Documents.',
      content: <input onChange={handleFileChange} multiple type="file" className="bg-transparent shadow-xl text-gray-400 py-2 px-2 rounded-lg" />,
    },
    {
      title: '4. Preferred Communication Channel *',
      description: 'Select',
      content: ['Email', 'Phone Call', 'Video Call', 'WhatsApp', 'Slack'].map((channel, idx) => (
        <button onClick={(e) => handleSelection(e, prev1)} key={idx} className="cursor-pointer  bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center w-full">
          <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">{idx + 1}</span>
          {channel}
        </button>
      )),
    },
    {
      title: '5. Your Contact Details *',
      description: 'Fill it carefully!',
      content: (
      <form onSubmit={handleSubmit(onSubmit)} className="text-white">
        {[
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Phone Number", name: "phone", type: "tel" },
          { label: "Company Name", name: "companyName", type: "text" },
          { label: "Company Website", name: "companyWebsite", type: "text" },
        ].map((field, idx) => (
          <div key={idx} className="mb-4">
            <p className="text-sm font-semibold mb-2">{`${idx + 1}. ${field.label} *`}</p>
            <input
              type={field.type}
              placeholder={`Enter Your ${field.label}`}
              {...register(field.name, {
                required: `${field.label} is required`,
                pattern:
                  field.name === "email"
                    ? {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid email",
                      }
                    : field.name === "phone"
                    ? {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid phone number",
                      }
                    : null,
              })}
              className="w-full bg-transparent shadow-xl text-white px-4 py-2 rounded-lg"
            />
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name].message}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-xl mt-0"
        >
          Submit
        </button>
      </form>
      ),
    },
  ];

  useGSAP(() => {
    if( index === 0 ){
      handleCardUpwardNext(0.75);
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
      toast("✅ Don't Miss to write description");
      return;
    }

    if (index === 2 && files.length === 0) {
      toast("⚠️ No files selected");
      return;
    } else if (index === 2) {
      toast("✅ files selected");
    }

    if (index === 3 && prev1.current) {
      const text = String(prev1.current.textContent).split('(')[0].trim().slice(1);
      setObj((x) => {
        const newObj = { ...x, communicationChannel: text };
        const formData = new FormData();
        formData.append('lookingFor', newObj.lookingFor);
        formData.append('description', newObj.description);
        formData.append('communicationChannel', newObj.communicationChannel);
        Array.from(files).forEach((file) => formData.append('file', file));

        axios.post(`${apiUrl}/file/create`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
          .then((response) => {
            toast("✅ Data uploaded successfully!");
            console.log(response.data);
            setFileId(response.data.data._id);
          })
          .catch((err) => {
            console.log(err);
            toast("❌ Something went wrong");
          });
        return newObj;
      });
    } else if (index === 3) {
      toast("✅ select option to move forward");
      return;
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
      <ToastContainer />
      <div className="text-white font-sans h-[80vh] flex flex-col">
        <div className="overflow-hidden -translate-y-5 relative min-h-[80vh] flex-grow">
          {cards.map((card, cardIndex) => (
            <div key={cardIndex} className={`card-${cardIndex} scale-[0.85] absolute top-[-130%] left-1/2 -translate-x-1/2 min-w-96 max-w-xl w-full h-full flex justify-center items-start`}>
              <div className={`${cardIndex===0 && "flex gap-3"} text-white ${cardIndex===0 ? "px-6 py-3 rounded-full": "p-6 rounded-lg"} w-full max-w-2xl bg-black`}>
                { cardIndex!==0 && <p className="text-sm font-semibold mb-2">{card.title}</p> }
                { cardIndex!==0 && cardIndex!==4 && <p className="text-sm text-gray-400 mb-5">{card.description}</p> }
                {card.content}
                {cardIndex !== 4 && (
              <div className="flex gap-5 flex-wrap">
                <button
                  onClick={handleNext}
                  className={`bg-[#295AAD] text-white text-base px-1 py-2 ${cardIndex !==0 && "mt-2"} rounded-full hover:bg-[#295AAD] w-28 text-center`}
                >
                  {cardIndex === 0 ? "Get Started" : "Next"}
                </button>
                {cardIndex !== 0 && (
                  <button
                    onClick={handlePrev}
                    className="bg-[#295AAD] rounded-full text-white text-base mt-2 px-1 py-2 hover:bg-[#295AAD] w-28 text-center"
                  >
                    {cardIndex === 0 ? <s> Previous </s> : "Previous"}
                  </button>
                )}
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

export default Slider;
