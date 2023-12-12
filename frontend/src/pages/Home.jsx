import { useSelector } from "react-redux";

function Home() {

  const auth = useSelector(state=>state.auth);

  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl flex-col gap-2">
      <div className="">
        Welcome {auth.username}
      </div>
      <div className=" text-blue-500">
        to StudyNotion
      </div>
      <p className=" text-lg mt-8">
        Create and Save your notes here...
        <br />
        Site Created By Jitendriya Meher
      </p>
    </div>
  );
}

export default Home;
