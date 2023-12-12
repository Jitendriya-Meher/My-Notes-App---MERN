import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { editAuth, setLoading } from '../../store/slices/authSlice';
import Loading from '../Loading';

const ChangeProfile = () => {

    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();

    const [username, setUserName] = useState(auth.username);
    const [email, setEmail] = useState(auth.email);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const conf = window.confirm("Are you sure you want to change your profile?");
      if( !conf){
        return;
      }
      dispatch(setLoading(true));

      try{
        const res = await axios.patch(`http://localhost:4000/api/auth/edit/profile`,{
          email,username
        },{
          headers:{
            Authorization: 'Bearer ' + auth.token
          }
        });
        console.log("response: " , res.data);
        const result = res.data;

        if( result.success){
          const payload = {
            username: result.user.username,
            email: result.user.email
          };
          dispatch(editAuth(payload));
          toast.success(result.message);
        }
        else{
          toast.error(result.message);
        }
      }
      catch(err){
        toast.error("error while changing the profile");
      }
      dispatch(setLoading(false));
    }

  return (
    <div className="p-5 rounded-xl border-2 border-richblack-800 bg-gray-900/40">
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

              <form className='flex flex-col w-full gap-y-4 mt-2'
              onSubmit={handleSubmit}>

                  <label className="relative mt-1" htmlFor='a'>
                    <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                      Edit Name
                    <span className='text-pink-200'> *</span>
                    </p>
                    <input type="text" name="name"
                    required
                    id='a'
                    placeholder='Edit your name'
                    value={username}
                    onChange={(e)=>{
                      setUserName(e.target.value);
                    }}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />
                </label>

                <label htmlFor="b" className='relative mt-2'>
                    <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                    Edit Email Address
                    <span className='text-pink-200'> *</span>
                    </p>
                    <input type="email" name="email"
                    id="b" required
                    value={email}
                    onCanPlay={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder='Edit your email address'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
                    />
                </label>

                <button className='bg-blue-700 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full'>
                  Edit your Proflie
                </button>

              </form>

        </div>
  )
}

export default ChangeProfile