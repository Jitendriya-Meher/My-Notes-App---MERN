import { useSelector } from "react-redux";
import Banner from "../assets/banner.mp4";

function Home() {

  const auth = useSelector(state=>state.auth);

  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl flex-col gap-2 w-11/12 max-w-[1160px] md:py-12 mx-auto">

      <div className=" text-center">
        Welcome {auth.username}
      </div>
      <div className=" text-blue-500 -mt-2 text-center">
        to StudyNotion
      </div>

      <div className="shadow-[10px_-5px_50px_-5px] shadow-blue-200 rounded-md md:w-1/2 mt-10 m-4">
                <video
                    className="shadow-[15px_15px_5px_rgba(200,200,200)] rounded-md"
                    muted
                    loop
                    autoPlay
                    color="blue"
                >
                    <source src={Banner} type="video/mp4" />
                </video>
            </div>
      
      <p className=" text-lg mt-12 text-center">
        Create and Save your notes here...
      </p>
      <p className=" text-sm -mt-2 text-blue-400 text-center">
        Created By Jitendriya Meher
      </p>
    </div>
  );
}

export default Home;