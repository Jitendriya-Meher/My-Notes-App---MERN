import React from 'react'
import NoteTemplate from '../components/Notes/NoteTemplate'
import signupImg from "../assets/signup.png";

const EditNotes = () => {
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