import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/slices/authSlice';
import { FaEdit } from "react-icons/fa";

const EditNoteForm = () => {

    const [title,setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getNote = async () => {
        try{
            const res = await axios.get(`https://my-note-app-backend.onrender.com/api/note/${id}`);

            const result = res.data;

            if(result.success){
                toast.success(result.message);
                setTitle(result.note.title);
                setDesc(result.note.description);
            }
            else{
                toast.error(result.message);
                navigate("/dashboard");
            }
        }
        catch(err){
            toast.error("error in fetching note");
            navigate("/dashboard");
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try{
            const res = await axios.patch(`https://my-note-app-backend.onrender.com/api/note/edit/${id}`,{title,description:desc});
            console.log("res",res);

            const result = res.data;

            if(result.success){
                toast.success(result.message);
                navigate("/dashborad");
            }
            else{
                toast.error(result.message);
            }
        }
        catch(err){
            toast.error("error in editing note");
        }
        dispatch(setLoading(false));
    }

    useEffect(()=>{
        getNote();
    },[]);

  return (
    <form action=""
    className='flex flex-col w-full gap-y-4 mt-6'
    onSubmit={handleEdit}
    >

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
                Edit Note
            </p>
            <FaEdit size={26}></FaEdit>
        </button>

    </form>
  )
}

export default EditNoteForm