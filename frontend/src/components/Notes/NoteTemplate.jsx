import React from 'react'
import AddNoteForm from './AddNoteForm';
import EditNoteForm from './EditNoteForm';
import Banner from "../../assets/banner.mp4"

const NoteTemplate = (props) => {

    const {title,description1,description2,formType,noteTitle,noteDesc} = props;

  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between'>

        <div className="w-11/12 max-w-[550px]">
            <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.3rem]'>{title}</h1>
            <p className='text-[0.9rem] leading-[1.2rem] mt-4'>
                <span className='text-richblack-100'>{description1}</span>
                <br />
                <span className='text-blue-500 italic'>
                    {description2}
                </span>
            </p>

            {
                formType==="add" ? <AddNoteForm noteTitle={noteTitle} noteDesc={noteDesc}></AddNoteForm> : <EditNoteForm noteTitle={noteTitle} noteDesc={noteDesc}></EditNoteForm>
            }

        </div>

        <div className="relative w-11/12 max-w-[550px] flex justify-center items-start mt-16">
            <div className="shadow-[10px_-5px_50px_-5px] shadow-blue-200 rounded-md">
                <video
                    className="shadow-[15px_15px_5px_rgba(200,200,200)] rounded-md"
                    muted
                    loop
                    autoPlay
                >
                    <source src={Banner} type="video/mp4" />
                </video>
            </div>
        </div>
      
    </div>
  )
}

export default NoteTemplate