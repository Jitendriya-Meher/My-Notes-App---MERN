import "./App.css";
import NavBar from "./components/NavBar"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute"
import AddNotes from "./pages/AddNotes";
import Profile from "./pages/Profile";

function App() {

  const [isLoggedin,setIsLoggedIn] = useState(false);

  return <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">

    <NavBar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}></NavBar>

    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>

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
      <Route path="/profile" element={
        <PrivateRoute isLoggedin={isLoggedin}>
          <Profile></Profile>
        </PrivateRoute>
      }></Route>

    </Routes>

  </div>;
}

export default App;
