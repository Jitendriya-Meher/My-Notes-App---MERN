import Template from "../components/Auth/Template";
import loginImg from "../assets/login.png";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function Login() {

  const auth = useSelector(state=>state.auth);

  if( auth.loading){
    return <Loading></Loading>
  }

  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
  );
}

export default Login;
