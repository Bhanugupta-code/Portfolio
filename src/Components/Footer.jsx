import React from 'react'
import { FaEnvelope ,FaLinkedin , FaGithub ,  } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
const Footer = () => {
  return (
    <div id='Contact' className='sm:flex-row max-w-screen-2xl mx-auto sm:justify-around flex flex-col bg-[#465697] text-white p-10 md:p-6 sm:items-center '>
      <div className="">
        <h1 className='text-2xl md:text-6xl font-semibold'>Contact</h1>
        <h3 className=' text-sm md:text-xl px-3 font-normal'> Feel free to reach out.</h3>
        </div>
        <ul className='text-sm  md:text-xl '>
            <li className='flex gap-4 py-1 px-4 items-center'><FaEnvelope />guptabhanu720@gmail.com</li>
            <li className='flex gap-4 py-1 px-4 items-center'><FaLinkedin /> <a href='https://www.linkedin.com/in/bhanu-gupta-57236/'>www.linkedin.com/in/bhanu-gupta-57236</a>  </li>
            <li className='flex gap-4 py-1 px-4 items-center'><FaGithub /><a href=' https://github.com/Bhanugupta-code '> https://github.com/Bhanugupta-code </a> </li>
            <li className='flex gap-4 py-1 px-4 items-center'><IoMdContact /> +91 6378106753 </li>
        </ul>
    </div>
  )
}

export default Footer;
