import React, { useState } from 'react'
import frameImage from "../assets/frame.png";
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';

const ContactTemplate = (props) => {

    const {title,description1,description2,image} = props;
    const auth = useSelector(state=>state.auth);

    const [email, setEmail] = useState(auth.email);
    const [message, setMessage] = useState('');

    const handleContact = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post(`http://localhost:4000/api/contact`,{
                email,message
            });
            const result = res.data;

            if( result.success){
                toast.success(result.message);
                setMessage('');
            }
            else{
                toast.error(result.message);
            }
        }
        catch(err){
            toast.error("please try again...");
        }
    }
    
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

        <div className="w-11/12 max-w-[570px]">
            <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>{title}</h1>
            <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                <span className='text-richblack-100'>{description1}</span>
                <br />
                <span className='text-blue-500 italic'>
                    {description2}
                </span>
            </p>

            <form action=""
            className='flex flex-col w-full gap-y-4 mt-6'
            onSubmit={handleContact}
            >

                <label htmlFor="a">
                    <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                        Email Address 
                    <span className='text-pink-200'> *</span>
                    </p>
                    <input type="email" name="email"
                    id="a" required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder='Enter your email address'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />
                </label>

                <label htmlFor="b">
                    <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                        Enter your message
                    <span className='text-pink-200'> *</span>
                    </p>
                    <textarea type="text" name="title"
                    id="b" required
                    rows={7}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    placeholder='Enter your message'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1 pb-[20px]'
                    ></textarea>
                </label>

                

                <button
                className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'
                
                >
                    Send message
                </button>

            </form>

        </div>

        <div className="relative w-11/12 max-w-[450px]">
            <img src={frameImage} width={558} height={504} loading='lazy' alt=""
            className=' relative -top-2'
             />
            <img src={image} width={558} height={504} loading='lazy' alt="" 
                className='absolute top-4 right-4'
            />
        </div>
      
    </div>
  )
}

export default ContactTemplate