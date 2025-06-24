import { RiArrowRightDoubleLine } from '@remixicon/react';
import React from 'react'
import Aboutimg from '../assets/WhatsApp Image 2025-04-17 at 11.31.02_4f0a260e.jpg'
const About = () => {
  return (
    <div className=' text-white max-w-screen-2xl 2xl:mx-auto md:flex overflow-hidden items-center md:flex-wrapmd:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12 ' id='About'>
      <div className="container">
        <h1 className='text-2xl md:text-4xl font-bold'>
       About
        </h1>
        <div className="flex flex-col lg:flex-row items-center">
          <img className='w-[400px] h-[320px] lg:w-[550px] lg:h-[500px] items-center p-3 px-16 rounded-[50%]' src={Aboutimg} alt="AboutImage" />
          <ul className=''>
          <div className='flex gap-3 py-4'>
              <RiArrowRightDoubleLine className='mt-1'/>
              <span className='w-auto'>
                <h1 className='text-xl lg:text-5xl md:text-2xl font-semibold'>Frontend Developer</h1>
                <p className='text-sm lg:text-xl md:text-md leading-tight'>
                Frontend Developer skilled in crafting responsive, user-centric web interfaces with HTML, CSS, and JavaScript. Committed to blending performance and design for seamless user experiences.</p>
              </span>
            </div>  
            <div className='flex gap-3 py-4'>
            <RiArrowRightDoubleLine className='mt-1'/>
              <span className='w-auto'>
                <h1 className='text-xl lg:text-5xl md:text-2xl font-semibold'>Backend developer</h1>
                <p className='text-sm lg:text-xl md:text-md leading-tight'>Aspiring Backend Developer focused on building efficient, scalable server-side applications. Currently expanding skills in databases, APIs, and server architecture to deliver robust solutions.</p>
              </span>
            </div>
              <div className='flex gap-3 py-4'>
              <RiArrowRightDoubleLine className='mt-1'/>
              <span className='w-auto'>
                <h1 className='text-xl lg:text-5xl md:text-2xl font-semibold'>Additional skills</h1>
                <p className='text-sm lg:text-xl md:text-md leading-tight'>Additional skills with basic knowledge in Python, Java, DBMS, DSA, and other foundational skills. Enthusiastic about enhancing technical abilities to build efficient, scalable applications.</p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;
