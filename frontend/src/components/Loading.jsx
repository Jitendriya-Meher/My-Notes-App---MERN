import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {

    const auth = useSelector(state=>state.auth);

  return (
    <div className="flex flex-1 justify-center items-center text-white text-2xl md:text-3xl flex-col gap-2 md:gap-4">
        <div className=" text-center">
            Loading ...
        </div> 
        <div className=" text-center">
            {auth.username}
        </div>
    </div>
  )
}

export default Loading