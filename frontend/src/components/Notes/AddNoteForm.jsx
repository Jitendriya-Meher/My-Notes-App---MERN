import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../../store/slices/authSlice';
import { GiNotebook } from "react-icons/gi";

const AddNoteForm = ({noteTitle,noteDesc}) => {

    const [title,setTitle] = useState(noteTitle);
    const [desc, setDesc] = useState(noteDesc);
    const auth = useSelector(state=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authToken = `Bearer ${auth.token}`;

        dispatch(setLoading(true));
        try{
            const res = await axios.post(`https://my-note-app-backend.onrender.com/api/note/add`,
                {title, description:desc},{
                    headers:{
                        Authorization: authToken
                    }
                }
            );

            const result = res.data;

            if( result.success){
                toast.success(result.message);
                navigate("/dashborad");
            }
            else{
                toast.error(result.message);
            }
        }
        catch(err){
            toast.error("please try again");
            return;
        }
        dispatch(setLoading(false))
    }

  return (
    <form action=""
    className='flex flex-col w-full gap-y-4 mt-6'
    onSubmit={handleSubmit}>

        <label htmlFor="a">
            <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                Note Title
             <span className='text-pink-200'> *</span>
             </p>
            <input type="text" name="title"
            id="a" required
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
            }}
            placeholder='Enter Note Title'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
            />
        </label>

        <label htmlFor="b">
            <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
                Note Description
             <span className='text-pink-200'> *</span>
             </p>
            <textarea type="text" name="title"
            id="b" required
            rows={7}
            value={desc}
            onChange={(e) => {
                setDesc(e.target.value);
            }}
            placeholder='Enter Note Description'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1 pb-[20px]'
            ></textarea>
        </label>

        

        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] flex mt-8 items-center justify-center gap-x-4'
        >
            <p className="text-[1.1rem]">
                Create Note
            </p>
            <GiNotebook size={26}></GiNotebook>
        </button>

    </form>
  )
}

export default AddNoteForm