import Template from "../components/Auth/Template";
import signupImg from "../assets/signup.png";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function Signup() {

  const auth = useSelector(state=>state.auth);

  if( auth.loading){
    return <Loading></Loading>
  }

  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
