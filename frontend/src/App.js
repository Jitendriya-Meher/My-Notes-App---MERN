import "./App.css";
import NavBar from "./components/NavBar"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute"
import AddNotes from "./pages/AddNotes";
import Profile from "./pages/Profile";
import EditNotes from "./pages/EditNotes";
import Note from "./pages/Note";
import DeleteNote from "./pages/DeleteNote";
import { useSelector } from "react-redux";

function App() {

  const {isLoggedin} = useSelector(state=>state.auth);

  return <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">

    <NavBar></NavBar>

    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>

      <Route path="/dashborad" element={
        <PrivateRoute isLoggedin={isLoggedin}>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }></Route>

      <Route path="/add" element={
        <PrivateRoute isLoggedin={isLoggedin}>
          <AddNotes></AddNotes>
        </PrivateRoute>
      }></Route>

      <Route path="/edit/:id" element={
        <PrivateRoute isLoggedin={isLoggedin}>
          <EditNotes></EditNotes>
        </PrivateRoute>
      }></Route>

      <Route path="/profile" element={
        <PrivateRoute isLoggedin={isLoggedin}>
          <Profile></Profile>
        </PrivateRoute>
      }></Route>

      <Route path="/note/:id" element={
          <PrivateRoute isLoggedin={isLoggedin}>
            <Note></Note>
          </PrivateRoute>
      }></Route>

      <Route path="/delete/:id" element={         
          <DeleteNote></DeleteNote>
      }></Route>


    </Routes>

  </div>;
}

export default App;
