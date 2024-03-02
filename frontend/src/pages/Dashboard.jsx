import { useDispatch, useSelector } from "react-redux";
import NoteCard from "../components/Notes/NoteCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../components/Loading";
import { setLoading } from "../store/slices/authSlice";

function Dashboard() {

  const ref = useRef(null);
  const [query, setQuery] = useState("");
  const [notes,setNotes] = useState([]);
  const [queryNotes, setQueryNotes] = useState([]);
  const dispatch = useDispatch();

  const auth = useSelector(state=>state.auth);
  console.log("auth", auth);

  const getAllNotes = async () => {
    dispatch(setLoading(true));
    try{
      const res = await axios.get(`https://my-note-app-backend.onrender.com/api/note/all`,{
        headers:{
          Authorization: 'Bearer ' + auth.token
        }
      });

      setNotes(res.data.note);
      setQueryNotes(res.data.note);
    }
    catch(err){
      toast.error("please wait...");
    }
    dispatch(setLoading(false));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotes = notes.filter((note) => (note.title.includes(query)));
    setQueryNotes(newNotes);
  }

  useEffect(()=>{
    getAllNotes();
  },[]);

  if( auth.loading){
    return <Loading></Loading>
  }

  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between flex-col">

      <form className=" flex gap-x-8 w-11/12 mx-auto justify-center items-center flex-wrap"
      onSubmit={handleSubmit}>
      <label htmlFor="a" className=" w-full block relative">
            <input type="search" name="text"
            id="a" required
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              const newNotes = notes.filter((note) => (note.title.includes(e.target.value)));
              setQueryNotes(newNotes);
            }}
            placeholder='Search your notes by title'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
            />
        </label>
      </form>

            <div className="flex w-full items-center gap-x-2 mt-8 mb-2">
                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className='text-richblack-100 font-medium leading-[1.38rem]'>
                  Notes
                </p>
                <div className="h-[1px] bg-richblack-700 w-full"></div>
            </div>

      <div className="w-full p-10 pt-6 flex gap-8 flex-wrap items-center justify-center" ref={ref}>

          {
            (notes.length===0) ? (
              <p className=" text-gray-300 text-xl m-8 mx-auto text-center">
                Please Add Some Notes...
              </p>
            ):(
              (queryNotes.length===0) ? (
                <p className=" text-gray-300 text-xl m-8 mx-auto text-center">
                  No notes found for the query {query}
                </p>
              ):(
                  queryNotes.map((item,index) =>(
                    <NoteCard key={index} index={index} item={item} reference={ref}></NoteCard>
                  ))
              )
            )
          }
        
      </div>
    </div>
  );
}

export default Dashboard;
