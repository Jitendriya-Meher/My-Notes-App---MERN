import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import { setLoading } from '../../store/slices/authSlice';

const ChnagePassword = () => {

    const auth = useSelector(state=>state.auth);

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);
    const [showPassword3,setShowPassword3] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const conf = window.confirm("Are you sure you want to change your password?");

      if( !conf){
        return;
      }
      if( !oldPassword || !newPassword || !confirmPassword){
        toast.error("Please enter all required fields");
        return;
      }

      if( newPassword !== confirmPassword){
        toast.error("new password and confirm password do not match");
        return;
      }

      dispatch(setLoading(true));
      try{
        const res = await axios.patch(`http://localhost:4000/api/auth/password`,{
          oldPassword,newPassword
        },{
          headers:{
            Authorization: 'Bearer ' + auth.token
          }
        });
        console.log("res",res);
        const result = res.data;

        if( result.success){
          toast.success(result.message);
        }
        else{
          toast.error(result.message);
        }
      }
      catch(err){
        toast.error("error while changing the passord");
      }
      dispatch(setLoading(false));
    }

  return (
    <div className="p-5 rounded-xl border-2 border-richblack-800 bg-gray-900/30">
                <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>
                  Change your Password...
                </h1>
                <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                    <span className='text-richblack-100'>
                      Are your sure you want to  
                    </span>
                    <span className='text-yellow-50 italic'>
                      &nbsp;change your password...
                    </span>
                </p>

                <form className='flex flex-col w-full gap-y-4 mt-2'
                onSubmit={handleSubmit}>

                <label htmlFor="a" className='relative mt-1'>
                    <p
                    className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>Old Password <span
                    className='text-pink-200'>*</span></p>
                    <input type={showPassword ? "text" : "password"}
                    name="password"
                    id="a" required
                    value={oldPassword}
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                    placeholder='Enter your old Password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />

                    <span onClick={
                        () => {
                            setShowPassword(!showPassword);
                        }
                    }
                    className='absolute right-3 top-[38px] cursor-pointer'
                    >
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#afb2bf'></AiOutlineEye>)}
                    </span>
                    
                </label>

                <div className="flex gap-x-4 justify-between w-full mt-2">
                  <label htmlFor="b" className='relative w-full'>
                    <p
                    className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>New Password <span
                    className='text-pink-200'>*</span></p>
                    <input type={showPassword2 ? "text" : "password"}
                    name="password"
                    id="b" required
                    placeholder='Enter Password'
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
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
                  <label htmlFor="c" className='relative w-full'>
                    <p
                    className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>Confirm New Password <span
                    className='text-pink-200'>*</span></p>
                    <input type={showPassword3 ? "text" : "password"}
                    name="password"
                    id="c" required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    placeholder='Confirm Password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />

                    <span onClick={
                        () => {
                            setShowPassword3(!showPassword3);
                        }
                    }
                    className='absolute right-3 top-[38px] cursor-pointer'
                    >
                        {showPassword3 ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#afb2bf'></AiOutlineEye>)}
                    </span>
                    
                </label>
                </div>

                <button className=' bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full'>
                  Change your Password
                </button>

              </form>
            </div>
  )
}

export default ChnagePassword