import React from 'react'
import NoteTemplate from '../components/Notes/NoteTemplate'
import loginImg from "../assets/login.png";

const AddNotes = () => {
  return (
    <NoteTemplate
      title="Create Notes Here..."
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="add"
      noteTitle=""
      noteDesc=""
      ></NoteTemplate>
  )
}

export default AddNotes