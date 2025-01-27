import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const cards = [
    {
      title: '1. What are you looking for *',
      description: 'Choose As Many As You Like',
      content: (
        <ul className="space-y-3">
          <li className=" bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center">
            <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">1</span>
            IT Services (Web/App Development, Maintenance, etc.)
          </li>
          <li className="bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center">
            <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">2</span>
            Marketing Services (Content Creation, Ads, Social Media, etc.)
          </li>
          <li className="bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center">
            <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">3</span>
            HR Solutions (Hiring, Payroll, Compliance, etc.)
          </li>
          <li className="bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center">
            <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">4</span>
            Other Services
          </li>
        </ul>
      ),
    },
    {
      title: '2. Describe Your Requirement *',
      description: 'Briefly Explain What You Need.',
      content: (
        <input
          className="bg-transparent shadow-xl min-w-[80%] px-4 py-2 rounded-lg text-gray-400 text-sm"
          placeholder="E.g. We need a custom CRM system to manage sales."
        />
      ),
    },
    {
      title: '3. Share supporting document',
      description: 'Upload Project Briefs, Designs, Or Other Relevant Documents.',
      content: <input type="file" className="bg-transparent shadow-xl text-gray-400 py-2 px-2 rounded-lg" />,
    },
    {
      title: '4. Preferred Communication Channel *',
      description: 'Select',
      content: (
        <ul className="space-y-3">
          {['Email', 'Phone Call', 'Video Call', 'WhatsApp', 'Slack'].map((channel, idx) => (
            <li key={idx} className="bg-transparent shadow-xl px-4 py-2 rounded-lg flex items-center">
              <span className="mr-3 bg-[#295AAD] text-white rounded-full w-6 h-6 flex items-center justify-center">
                {idx + 1}
              </span>
              {channel}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: '5. Your Contact Details *',
      description: 'Fill it carefully!',
      content: (
        <div>
          {['Full Name', 'Email Address', 'Phone Number', 'Company Name', 'Company Website'].map((field, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-sm font-semibold mb-2">{`${idx + 1}. ${field} *`}</p>
              <input
                type={field.includes('Email') ? 'email' : field.includes('Phone') ? 'tel' : 'text'}
                placeholder={`Enter Your ${field}`}
                className="w-full bg-transparent shadow-xl text-white px-4 py-2 rounded-lg"
              />
            </div>
          ))}
        </div>
      ),
    },
  ];

  useGSAP(()=>{
    gsap.set(".card-0",{ scale:0.85, top:"100%" })
    gsap.to(".card-0",{
      delay:0.75,
      scale:.85,
      top:"0",
      duration:0.5
    })
  })

  const handleNext = () => {
    gsap.to(`.card-${index}`, {
      top: "-130%",
      scale: 0,
      duration: 0.5,
    });
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % cards.length;
      gsap.to(`.card-${newIndex}`, {
        top: "0",
        scale: 0.85,
        duration: 0.5,
      });
      return newIndex;
    });
  };

  return (
    <div className="text-white font-sans h-[80vh] flex flex-col">
      <div className="overflow-hidden -translate-y-5 relative min-h-[80vh] flex-grow">
        {cards.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className={`card-${cardIndex} scale-[0.85] absolute top-[-130%] left-1/2 -translate-x-1/2 min-w-96 max-w-xl w-full h-full flex justify-center items-start `}
          >
            <div className=" text-white p-6 rounded-lg w-full max-w-2xl bg-black">
              <p className="text-sm font-semibold mb-2">{card.title}</p>
              <p className="text-sm text-gray-400 mb-4">{card.description}</p>
              {card.content}
              <button
                onClick={handleNext}
                className="mt-6 bg-[#295AAD] text-white px-6 py-2 rounded-sm hover:bg-[#295AAD] mx-auto block"
              >
               { cardIndex === 4 ? "Submit" : "Next" }
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
