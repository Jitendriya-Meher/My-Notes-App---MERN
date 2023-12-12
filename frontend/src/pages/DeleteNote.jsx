import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const DeleteNote = () => {

    const [note,setNotes] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const auth = useSelector(state=>state.auth);

    const getNote = async () => {
        try{
            console.log("id",id);

            const res = await axios.get(`http://localhost:4000/api/note/${id}`);
            console.log("res",res.data);

            const result = res.data;

            if(result.success){
                toast.success(result.message);
                setNotes(result.note);
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

    const handleDelete = async () => {
        const del = window.confirm("Are you sure you want to delete this note?");
        if( !del){
            return;
        }
        try{
            const res = await axios.delete(`http://localhost:4000/api/note/delete/${id}`);
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
            toast.error("error in deleting note");
        }
    }

    useEffect(()=>{
        getNote();
    },[]);

    if( auth.loading){
        return <Loading></Loading>
    }

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">

        <div className=" w-11/12 max-w-[750px]">
            <h1 className='text-richblack-5 font-semibold text-[2rem] leading-[2.3rem]'>
                {note.title}
            </h1>
            <p className='text-[1rem] leading-[1.2rem] mt-4 text-justify'>
                <span className='text-richblack-100'>
                     {note.description}
                </span>
            </p>
        </div>

        <div className=" w-11/12 max-w-[350px] mt-8">
            <h1 className='text-richblack-5 font-semibold text-[2rem] leading-[2.3rem]'>
                Are you sure you want to delete this note ?
            </h1>
            <button
            className='bg-red-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8 w-full'
            onClick={handleDelete}
            >
                Delete Note
            </button>
        </div>

    </div>
  )
}

export default DeleteNote