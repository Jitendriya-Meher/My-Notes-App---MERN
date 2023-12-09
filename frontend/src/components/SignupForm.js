import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");

    const navigate = useNavigate();
    
    async function submitHandler(e){
        e.preventDefault();
        if( password != confirmPassword){
            toast.error("Passwords do not match");
            return;
        }

        const user = {
            name: firstName+" "+lastName,
            email: email,
            password: password
        };
        console.log("user: " , user);

        toast.success("Sign up successfully");
        // navigate("/login");
    }

  return (
    <div className='w-full'>
      

      <form action="" onSubmit={submitHandler} className='w-full mt-5'>

        <div className="flex w-full justify-between gap-x-4">

            <label className="w-full">
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >First Name <span className='text-pink-200'>*</span></p>
                <input type="text"
                required
                placeholder='Enter First Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1'
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                />
            </label>
            <label className="w-full">
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >Last Name <span className='text-pink-200'>*</span></p>
                <input type="text"
                required
                placeholder='Enter Last Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1'
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                />
            </label>
        </div>

        <label htmlFor="">
            <p
            className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem] mt-1'
            >Emial Address <span className='text-pink-200'>*</span></p>
            <input type="email"
            required
            placeholder='Enter Email Address'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1 mb-1'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            />
        </label>

        <div className="flex gap-x-4 justify-between w-full">
            <label className="relative w-full">
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >Create Password <span className='text-pink-200'>*</span></p>
                <input type={showPassword1 ? "text" : "password"}
                required
                placeholder='Enter Password'
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1'
                />
                <span onClick={
                () => {
                        setShowPassword1(!showPassword1);
                    }
                }
                className='absolute right-3 top-[38px] cursor-pointer '
                >
                    {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#afb2bf'></AiOutlineEye>)}
                </span>
            </label>
            <label className="relative w-full">
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >Confirm Password <span className='text-pink-200'> *</span></p>
                <input type={showPassword2 ? "text" : "password"}
                required
                placeholder='Confirm Password'
                onChange={
                    (e)=>{
                        setConfirmPassword(e.target.value);
                    }
                }
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1'
                />
                <span onClick={
                    () => {
                        setShowPassword2(!showPassword2);
                    }
                }
                className='absolute right-3 top-[38px] cursor-pointer'
                >
                    {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#afb2bf'></AiOutlineEye>)}
                </span>
            </label>
        </div>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full'>Create Account</button>

      </form>

    </div>
  )
}

export default SignupForm
