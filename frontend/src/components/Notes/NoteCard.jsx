import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { FaFileAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const NoteCard = ({reference,index,item}) => {

    const colArr = ['bg-red-500','bg-green-500','bg-blue-500','bg-pink-600','bg-purple-600','bg-slate-600','bg-orange-600','bg-yellow-500','bg-indigo-600','bg-lime-600','bg-emerald-600','bg-teal-500','bg-violet-600'];
    const {title,description,_id} = item;

    const randomColor = colArr[index%colArr.length];

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className={`w-60 h-72 rounded-[50px] bg-richblack-800/90 text-white py-9 px-7 relative overflow-hidden flex-shrink-0 border-2 border-richblack-700`}>

      <p className=' text-md font-semibold leading-tight'>
        {title}
      </p>

      <p className=" text-sm mt-5 font-semibold leading-tight">
        {description}
      </p>

      <div className=" absolute bottom-0 w-full left-0">

        <div className={`w-full py-4 ${randomColor} flex justify-center items-center gap-x-2 text-2xl`}>
            <Link to={`/note/${_id}`}>
                <button className="bg-blue-600 rounded-[8px] font-bold px-[12px] py-[8px] w-full text-richblack-900">
                    <FaFileAlt />
                </button>
            </Link>
          <Link to={`/edit/${_id}`}>
            <button className="bg-yellow-600 rounded-[8px] font-bold px-[12px] py-[8px] w-full text-richblack-900">
                <CiEdit />
            </button>
            </Link>
            <Link to={`/delete/${_id}`}>
            <button className="bg-red-600 rounded-[8px] font-bold px-[12px] py-[8px] w-full text-richblack-900">
                <MdDeleteForever />
            </button>
            </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NoteCard