import React from 'react'
import { RiTailwindCssFill } from '@remixicon/react';
import { FaCss3 , FaHtml5 , FaJs , FaReact ,FaBootstrap , FaGoogle , } from 'react-icons/fa';
const Skills = () => {
  return (
    <div id='Skills' className='p-10 md:p-10'>
        <h1 className='text-2xl text-white md:text-4xl font-bold'>Skills</h1>
        <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap md:w-2/3 gap-8 p-12 pt-10 pb-2">
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaHtml5 color=' #E44D26' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaCss3 color='#2965f1' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaJs color='#f0db4f' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaReact color='#61dbfb' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <FaBootstrap color='#563d7c' size={50} />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
            <RiTailwindCssFill color='#2563eb' size={50} />
        </span>
        </div>   
       
        </div>      
    </div>
  )
}

export default Skills;
