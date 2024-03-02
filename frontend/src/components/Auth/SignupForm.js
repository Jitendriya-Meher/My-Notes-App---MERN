import React, { useState } from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/slices/authSlice';

const SignupForm = () => {

    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    async function submitHandler(e){
        e.preventDefault();
        
        if( password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        if( !password || !firstName || !lastName || !email){
            toast.error("please enter all required fields");
            return;
        }

        const user = {
            username: firstName+" "+lastName,
            email: email,
            password: password
        };

        dispatch(setLoading(true));
        try{
            const response = await axios.post(`https://my-note-app-backend.onrender.com/api/auth/signup`,user);
            console.log("response",response);
            const result = response.data;

            if( result.success){
                toast.success(result.message);
                navigate("/login");
            }
            else{
                toast.error(result.message);
            }
        }
        catch(err){
            toast.error("please try again");
            return;
        }  
        dispatch(setLoading(false));
    }

  return (
    <div className='w-full'>
      
      <form action="" onSubmit={submitHandler} className='w-full mt-5 flex flex-col gap-y-4'>

        <div className="gap-x-4 justify-between w-full md:flex">

            <label className="w-full" htmlFor='a'>
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >First Name <span className='text-pink-200'>*</span></p>
                <input type="text"
                required
                placeholder='Enter First Name'
                id='a'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1'
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                />
            </label>
            <label className="w-full" htmlFor='b'>
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >Last Name <span className='text-pink-200'>*</span></p>
                <input type="text"
                required
                id='b'
                placeholder='Enter Last Name'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1'
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                />
            </label>
        </div>

        <label htmlFor="c">
            <p
            className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem] mt-1'
            >Emial Address <span className='text-pink-200'>*</span></p>
            <input type="email"
            required
            id='c'
            placeholder='Enter Email Address'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-[1px] outline-1 mb-1'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            />
        </label>

        <div className="gap-x-4 justify-between w-full md:flex">
            <label className="relative w-full" htmlFor='d'>
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >Create Password <span className='text-pink-200'>*</span></p>
                <input type={showPassword1 ? "text" : "password"}
                required
                id='d'
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
            <label className="relative w-full block" htmlFor='e'>
                <p
                className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'
                >Confirm Password <span className='text-pink-200'> *</span></p>
                <input type={showPassword2 ? "text" : "password"}
                required
                id='e'
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

        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] flex mt-8 items-center justify-center gap-x-4'
        >
            <p className="text-[1.1rem]">
                Create Account
            </p>
            <FaUser size={26}></FaUser>
        </button>

      </form>

    </div>
  )
}

export default SignupForm
