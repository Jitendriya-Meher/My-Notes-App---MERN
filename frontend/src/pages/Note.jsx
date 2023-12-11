import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Note = () => {

    const [note,setNotes] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

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

    useEffect(()=>{
        getNote();
    },[]);

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">

        <div className=" w-11/12 mx-auto">
            <h1 className='text-richblack-5 font-semibold text-[2rem] leading-[2.3rem]'>
                {note.title}
            </h1>

            <p className='text-[0.9rem] leading-[1.2rem] mt-4 text-right'>
                <span className='text-richblack-100'>Created At </span>
                <span className='text-blue-500 italic'>
                    {note.createdAt}
                </span>
            </p>

            <p className='text-[1rem] leading-[1.2rem] mt-4 text-justify'>
                <span className='text-richblack-100'>
                    {note.description}
                </span>
            </p>

        </div>

    </div>
  )
}

export default Note