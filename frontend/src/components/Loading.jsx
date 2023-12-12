import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {

    const auth = useSelector(state=>state.auth);

  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl flex-col gap-12">
        <div className="">
            Loading ...
        </div> 
        <div className="">
            {auth.username}
        </div>
    </div>
  )
}

export default Loading