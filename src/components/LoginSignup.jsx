import React, { useState } from 'react';
import LogAni from './LogAni';
import { useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast, ToastContainer } from 'react-toastify';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    fullName:'',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const text = isLogin ? "Login" : "Signup";
  const textRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  useEffect(() => {
    if(textRef.current){
      const chars = textRef.current.querySelectorAll('.char');
      gsap.fromTo(
        chars,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    }
  }, [text]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const onSubmit = (data) =>{ 
    try {
        if (!isLogin && !data.fullName) {
          toast.error("❌ Your full name is required", { position: "top-center" });
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
        if (!data.password) {
          toast.error("❌ Your Password is required", { position: "top-center" });
          return;
        }
        if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)) {
          toast.error("❌ Password must be at least 8 characters long, contain at least one uppercase letter and one number", { position: "top-center" });
          return;
        }
        if(!isLogin){
          if(!data.confirmPassword){
            toast.error("❌ Confirm Password is required", { position: "top-center" });
            return;
          }
          if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.confirmPassword)) {
            toast.error("❌ Confirm Password must be at least 8 characters long, contain at least one uppercase letter and one number", { position: "top-center" });
            return;
          }
          if(data.confirmPassword !== data.password){
            toast.error("❌ Confirm Password And Password doesNot match", { position: "top-center" });
            return;
          }
        }
        console.log(data);
        
        toast.success("✅ Form submitted successfully!",{
          position: 'top-center',
        });
      } catch (error) {
        toast.error(`❌ ${error.response?.data?.message || "Something went wrong."}`,{
          position: 'top-center',
        });
      }
      
  }

  return (
    <div className='relative min-h-screen w-full'>
      <ToastContainer style={{ zIndex: 100000000000 }} position="top-center" />
      <LogAni/>
      <div className="rounded-lg shadow-lg w-[70%] md:w-[70%] lg:w-[40%] xl:w-[30%] px-6 flex justify-center items-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5 overflow-y-hidden">  
          <>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold text-center transition-opacity duration-300 ease-in-out">
            <span ref={textRef} className="text-2xl font-bold text-white drop-shadow-md">
                   {text.split('').map((char, index) => (
                      <span key={index} className="char inline-block">
                        {char}
                      </span>
            ))}
            </span>
            </h2>
            <div className="flex flex-col gap-4 w-full">
              <button
                type="button"
                onClick={() => signInWithGoogle()}
                className="flex items-center justify-center w-full py-2 px-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out  font-semibold shadow-lg text-sm md:text-base"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 md:w-6 md:h-6 mr-2  " />
                {isLogin ? 'Login with Google' : 'Sign up with Google'}
              </button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm md:text-base">
                  <span className="px-2 text-white bg-[#1a1a1a]">Or continue with</span>
                </div>
              </div>
            </div>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
              {!isLogin && (
                <div className="mb-3 transition-all duration-300 ease-in-out opacity-100 text-white">
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder='Enter your Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    className=" outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm font-bo bg-[#010E1A]"
                  />
                </div>
              )}
              <div className="mb-3 transition-all duration-300 ease-in-out text-white">
                <input
                  type="email"
                  {...register("email")}
                  placeholder='Enter valid email address'
                  value={formData.email}
                  onChange={handleChange}
                  className=" outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A]"
                />
              </div>
              <div className={`${isLogin ? "mb-6" : "mb-3"} transition-all duration-300 ease-in-out text-white relative`}>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
              </div>
              {!isLogin && (
                <div className={`${isLogin ? "mb-6" : "mb-3"} transition-all duration-300 ease-in-out text-white relative`}>
                <input
                  type={showPassword1 ? "text" : "password"}
                  {...register("confirmPassword")}
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="text-white outline-none w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-sm bg-[#010E1A] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword1(!showPassword1)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword1 ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
              )}
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out text-xl md:text-xl md:hover:text-2xl font-bold shadow-lg "
              >
                 {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="text-white text-lg md:text-xl text-center transition-all duration-300 ease-in-out ">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <span
                className="text-[#00ddff] cursor-pointer transition-colors duration-300 ease-in-out "
                onClick={() => {
                  setIsLogin(!isLogin);
                  setShowPassword(false);
                  setShowPassword1(false);
                }}
              >
                <span className="relative text-xl font-bold text-[#00ddff] before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-[#00ddff] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                  {!isLogin ? "Login" : "Signup"}
                </span>
              </span>
            </p>
          </>
      </div>
    </div>
  );
}

export default LoginSignup;
