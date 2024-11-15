import { RiArrowRightDoubleLine } from '@remixicon/react';
import React from 'react'
import Aboutimg from '../assets/about.webp'
const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrapmd:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-xl p-12 ' id='About'>
      <div className="">
        <h1 className='text-2xl md:text-4xl font-bold'>
       About
        </h1>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className='md:h-80 p-3 px-16' src={Aboutimg} alt="AboutImage" />
          <ul>
          <div className='flex gap-3 py-4'>
              <RiArrowRightDoubleLine className='mt-1'/>
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold'>Frontend Developer</h1>
                <p className='text-sm md:text-md leading-tight'>
                Frontend Developer skilled in crafting responsive, user-centric web interfaces with HTML, CSS, and JavaScript. Committed to blending performance and design for seamless user experiences.</p>
              </span>
            </div>  
            <div className='flex gap-3 py-4'>
            <RiArrowRightDoubleLine className='mt-1'/>
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold'>Learning Backend</h1>
                <p className='text-sm md:text-md leading-tight'>Aspiring Backend Developer focused on building efficient, scalable server-side applications. Currently expanding skills in databases, APIs, and server architecture to deliver robust solutions.</p>
              </span>
            </div>
              <div className='flex gap-3 py-4'>
              <RiArrowRightDoubleLine className='mt-1'/>
              <span className='w-96'>
                <h1 className='text-xl md:text-2xl font-semibold'>Additional skills</h1>
                <p className='text-sm md:text-md leading-tight'>Additional skills with basic knowledge in Python, Java, DBMS, DSA, and other foundational skills. Enthusiastic about enhancing technical abilities to build efficient, scalable applications.</p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;
