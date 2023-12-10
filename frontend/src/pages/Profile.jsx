import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";

const Profile = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2,setShowPassword2] = useState(false);

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">

      <div className="w-11/12 max-w-[450px] flex flex-col gap-y-12">

        <div className="">
              <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>
                Edit your profile Here...
              </h1>
              <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                      <span className='text-richblack-100'>
                        Are your sure you want to  
                      </span>
                      <span className='text-blue-500 italic'>
                        &nbsp;change your profile...
                      </span>
                  </p>

              <form className='flex flex-col w-full gap-y-4 mt-2'>

                  <label className="relative mt-1">
                    <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                      Edit Name
                    <span className='text-pink-200'> *</span>
                    </p>
                    <input type="text" name="name"
                    id="" required
                    placeholder='Edit your name'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />
                </label>

                <label htmlFor="" className='relative mt-2'>
                    <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                    Edit Email Address
                    <span className='text-pink-200'> *</span>
                    </p>
                    <input type="email" name="email"
                    id="" required
                    placeholder='Edit your email address'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />
                </label>

                <button className='bg-blue-700 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full'>
                  Edit your Proflie
                </button>

              </form>

        </div>

        <div className="">

              <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>
                Delete your All Notes...
              </h1>
              <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                  <span className='text-richblack-100'>
                    Are your sure you want to 
                  </span>
                  <span className='text-orange-500 italic'>
                   &nbsp;delete your all notes...
                  </span>
              </p>

              <form className='flex flex-col w-full gap-y-4 mt-2'>

              <button className='bg-orange-600 rounded-[8px] font-medium px-[12px] py-[8px] mt-4 w-full text-richblack-900'>
                Delete your all Notes
              </button>

              </form>

            </div>

      </div>

      <div className="w-11/12 max-w-[450px] flex flex-col gap-y-12">

            <div className="">
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

                <form className='flex flex-col w-full gap-y-4 mt-2'>

                <label htmlFor="" className='relative mt-1'>
                    <p
                    className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>Old Password <span
                    className='text-pink-200'>*</span></p>
                    <input type={showPassword ? "text" : "password"}
                    name="password"
                    id="" required
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

                <label htmlFor="" className='relative mt-1'>
                    <p
                    className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>New Password <span
                    className='text-pink-200'>*</span></p>
                    <input type={showPassword2 ? "text" : "password"}
                    name="password"
                    id="" required
                    placeholder='Enter your old Password'
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


                <button className=' bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full'>
                  Change Password
                </button>

              </form>
            </div>

            <div className="">

              <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>
                Delete your Account...
              </h1>
              <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                  <span className='text-richblack-100'>
                    Are your sure you want to 
                  </span>
                  <span className='text-red-600 italic'>
                   &nbsp;delete your account...
                  </span>
              </p>

              <form className='flex flex-col w-full gap-y-4 mt-2'>

              <button className='bg-red-600 rounded-[8px] font-medium px-[12px] py-[8px] mt-4 w-full text-richblack-900'>
                Delete your Account
              </button>

              </form>

              

            </div>
        </div>


    </div>
  )
}

export default Profile