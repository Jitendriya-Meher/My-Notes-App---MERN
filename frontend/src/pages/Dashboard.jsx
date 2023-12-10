import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl ">
      Welcome to Studynotion!     😎😎^_^🥳🥳

      <div className="flex flex-col">

        <Link to={'/edit/fghjk'}>
          <button className="bg-yellow-600 rounded-[8px] font-medium px-[12px] py-[8px] mt-4 w-full text-richblack-900">
            Edit note
          </button>
        </Link>
        <Link to={'/note/fghjk'}>
          <button className="bg-blue-600 rounded-[8px] font-medium px-[12px] py-[8px] mt-4 w-full text-richblack-900">
            show notes
          </button>
        </Link>
        <Link to={'/delete/fghjk'}>
          <button className="bg-red-600 rounded-[8px] font-medium px-[12px] py-[8px] mt-4 w-full text-richblack-900">
            delete notes
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Dashboard;
