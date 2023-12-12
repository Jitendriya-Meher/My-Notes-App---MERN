import { useSelector } from "react-redux";

function Home() {

  const auth = useSelector(state=>state.auth);

  return (
    <div className="flex flex-1 justify-center items-center text-white text-3xl">
      Note App {auth.username}
    </div>
  );
}

export default Home;
