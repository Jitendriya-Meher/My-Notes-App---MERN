import React from 'react'
import contactus from "../assets/aboutus3.webp";
import ContactTemplate from '../components/ContactTemplate';


const Contact = () => {
  return (
    <ContactTemplate
    title="Ask your queries here..."
    description1="Build skills for today, tomorrow, and beyond."
    description2="Education to future-proof your career."
    image={contactus}
    ></ContactTemplate>
  )
}

export default Contact
