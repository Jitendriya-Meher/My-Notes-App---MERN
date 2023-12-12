import React from 'react'
import NoteTemplate from '../components/Notes/NoteTemplate'
import signupImg from "../assets/signup.png";
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const EditNotes = () => {
  const auth = useSelector(state=>state.auth);

  if( auth.loading){
    return <Loading></Loading>
  }
  
  return (
    <NoteTemplate
      title="Edit Notes Here..."
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="edit"
      noteTitle="edit title"
      noteDesc="edit description"
      ></NoteTemplate>
  )
}

export default EditNotes