import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { Tooltip } from '@mui/material';
import { TbEditOff } from "react-icons/tb";

const NoteCard = ({reference,index,item}) => {

    const colArr = ['bg-red-500','bg-green-500','bg-blue-500','bg-pink-600','bg-purple-600','bg-slate-600','bg-orange-600','bg-yellow-500','bg-indigo-600','bg-lime-600','bg-emerald-600','bg-teal-500','bg-violet-600'];
    const {title,description,_id} = item;

    const randomColor = colArr[index%colArr.length];

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className={`w-60 h-72 rounded-[50px] bg-richblack-800/90 text-white py-9 px-7 relative overflow-hidden flex-shrink-0 border-2 border-richblack-700`}>

      <p className=' text-md font-semibold leading-tight'>
        {
          title.length <= 30 ? (
            `${title}`
          ):(
            `${title.substring(0, 30)}...`
          )
        }
      </p>

      <p className=" text-sm mt-3 font-semibold leading-tight">
        {
          description.length <= 100 ? (
            `${description}`
          ):(
            `${description.substring(0, 100)}...`
          )
        }
      </p>

      <div className=" absolute bottom-0 w-full left-0">

        <div className={`w-full py-4 ${randomColor} flex justify-center items-center gap-x-2 text-2xl`}>
            <Link to={`/note/${_id}`}>
              <Tooltip title="show" arrow placement='top'>
                <button className="bg-blue-600 rounded-[8px] font-bold px-[12px] py-[8px] w-full text-richblack-900">
                    <FaFileAlt />
                </button>
              </Tooltip>
            </Link>
          <Link to={`/edit/${_id}`}>
              <Tooltip title="Edit" arrow placement='top'>
                <button className="bg-yellow-600 rounded-[8px] font-extrabold px-[12px] py-[8px] w-full text-richblack-900">
                    <FaEdit />
                </button>
              </Tooltip>
            </Link>
            <Link to={`/delete/${_id}`}>
              <Tooltip title="Delete" arrow placement='top'>
                <button className="bg-red-600 rounded-[8px] font-bold px-[12px] py-[8px] w-full text-richblack-900">
                    <TbEditOff />
                </button>
              </Tooltip>
            </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NoteCard