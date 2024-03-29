import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/slices/authSlice';
import { MdOutlineEditOff } from "react-icons/md";

const DeleteAllNotes = () => {

  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const conf = window.confirm("Are you sure you want to delete your all notes?");
    if( !conf){
      return;
    }

    dispatch(setLoading(true));
    try{
      const res = await axios.delete(`https://my-note-app-backend.onrender.com/api/note/delete/all`,{
        headers:{
          Authorization: 'Bearer ' + auth.token
        }
      });
      const result = res.data;

      if( result.success){
        toast.success(result.message);
      }
      else{
        toast.error(result.message);
      }
    }
    catch(err){
      toast.error("error while deleting the notes");
    }
    dispatch(setLoading(false));
  }

  return (
    <div className="p-5 rounded-xl border-2 border-richblack-800 bg-gray-900/30">

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

              <form className='flex flex-col w-full gap-y-4 mt-1'
              onSubmit={handleSubmit}>

              <button
                className=' bg-orange-600  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] flex mt-8 items-center justify-center gap-x-4'
                >
                    <p className="text-[1.1rem]">
                        Delete your all Notes
                    </p>
                    <MdOutlineEditOff size={26}></MdOutlineEditOff>
                </button>

              </form>

        </div>
  )
}

export default DeleteAllNotes