import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logInAuth } from '../store/slices/authSlice';

const LoginFromForm = (props) => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    const dispatch = useDispatch();

    function changeHandler(e){
        const {name,value} = e.target;
        setFormData( (prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    const [showPassword,setShowPassword] = useState(false);

    const {setIsLoggedIn} = props;

    const navigate = useNavigate();

    async function submitHandler(e){
        e.preventDefault();

        try{
            const res = await axios.post(`http://localhost:4000/api/auth/login`,formData);
            console.log("res",res.data);
            const result = res.data;

            if( result.success){
                setIsLoggedIn(true);
                toast.success(result.message);
                const payload = {
                    username:result.user.username,
                    email:result.user.email,
                    token:result.token
                };
                console.log("payload", payload);
                dispatch(logInAuth(payload));
                navigate("/dashborad");
            }
            else{
                toast.error(result.message);
            }
        }
        catch(err){
            toast.error("please try again");
        }
    }

  return (

    <form action="" onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-2 mt-6'>

        <label htmlFor="a">
            <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
            Email Address
             <span className='text-pink-200'> *</span>
             </p>
            <input type="email" name="email"
            value={formData.email}
            onChange={changeHandler}
            id="a" required
            placeholder='Enter email address'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
            />
        </label>

        <label htmlFor="b" className='relative mt-1'>
            <p
            className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>Password <span
            className='text-pink-200'>*</span></p>
            <input type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            id="b" required
            placeholder='Enter Password'
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

            <Link to="/contact">
                <p className='text-xs mt-1 text-blue-100 ml-auto absolute right-0'>Forget PassWord</p>
            </Link>
            
        </label>

        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'
        >Sign In</button>

    </form>
  )
}

export default LoginFromForm
