
import NoteCard from "../components/Notes/NoteCard";
import { useRef, useState } from "react";

function Dashboard() {

  const ref = useRef(null);
  const [query, setQuery] = useState("");

  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between flex-col">

      <form className=" flex gap-x-8 w-11/12 mx-auto justify-center items-center">
      <label htmlFor="" className=" w-full">
            <input type="search" name="text"
            id="" required
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder='Search your notes by title'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
            />
        </label>
        <button
        className='bg-blue-700 rounded-[8px] font-medium text-richblack-900 w-1/5 px-[12px] py-[12px]'
        >
          Search
        </button>
      </form>

            <div className="flex w-full items-center gap-x-2 mt-8 mb-2">
                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className='text-richblack-100 font-medium leading-[1.38rem]'>
                  Notes
                </p>
                <div className="h-[1px] bg-richblack-700 w-full"></div>
            </div>

      <div className="w-full p-10 pt-6 flex gap-8 flex-wrap" ref={ref}>
        {
          arr.map((item,index) =>(
            <NoteCard key={index} index={index} item={item} reference={ref}></NoteCard>
          ))
        }
      </div>
    </div>
  );
}

export default Dashboard;
