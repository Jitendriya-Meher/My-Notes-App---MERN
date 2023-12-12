import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";

const BackButton = () => {

    const navigate = useNavigate();

  return (
    
    <button className=' text-white text-5xl absolute top-20 left-16 p-1'
    onClick={() => {
        navigate(-1);
    }}>
        <IoArrowBackCircleSharp />
    </button>
  )
}

export default BackButton