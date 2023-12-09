import React from 'react';
import frameImage from "./frame.png";
import LoginFromForm from '../LoginFromForm';
import SignupForm from '../SignupForm';
import {FcGoogle} from "react-icons/fc"

const Template = (props) => {

    const {title,description1,description2,image,formType,setIsLoggedIn} = props;

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

        <div className="w-11/12 max-w-[450px]">
            <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>{title}</h1>
            <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                <span className='text-richblack-100'>{description1}</span>
                <br />
                <span className='text-blue-500 italic'>
                    {description2}
                </span>
            </p>

            {
                formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm> : <LoginFromForm  setIsLoggedIn={setIsLoggedIn}></LoginFromForm>
            }

            <div className="flex w-full items-center gap-x-2 my-4">
                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className='text-richblack-100 font-medium leading-[1.38rem]'>OR</p>
                <div className="h-[1px] bg-richblack-700 w-full"></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle></FcGoogle>
            <p>
                Sign Up With Google
            </p></button>

        </div>

        <div className="relative w-11/12 max-w-[450px]">
            <img src={frameImage} width={558} height={504} loading='lazy' alt=""
            className=''
             />
            <img src={image} width={558} height={504} loading='lazy' alt="" 
                className='absolute -top-4 right-4'
            />
        </div>
      
    </div>
  )
}

export default Template
