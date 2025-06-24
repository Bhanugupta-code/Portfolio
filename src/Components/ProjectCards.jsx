import React from 'react'
import f1 from '../assets/react.svg'

const ProjectCards = ({ title , main ,demo ,img ,code }) => {
  return (
    <div className='p-3 w-full text-center pb-0 mx-auto mt-5 md:p-6 md:pb-0 flex flex-col bg-[#0c0b1c4d] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-3 mx-auto rounded-3xl w-60 h-48' src={img} alt="" />   
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
        </h3>   
        <p className='px-4 text-sm md:text-md leading-tight py-2 '>{main}</p>
        <div className="mt-2 p-2 md:p-2 justify-between flex gap-2 md:gap-3 ">
        <a href={demo} className='md:m-2 flex text-center text-white px-2 py-2 text-sm md:text-md md:py-1 md:px-4 hover:opacity-85 hover:scale-105 rounded-3xl font-semibold bg-[#465697]'><button >Demo</button></a> 
           <a href={code}><button className='md:m-2 flex text-center text-white text-sm md:text-md hover:border-[#465697] hover:bg-slate-200 hover:text-[#465697] hover:scale-105 rounded-3xl font-semibold p-2 transition duration-500 bg-[#465697]'>Source Code</button></a> 
        </div>
    </div>
  )
}

export default ProjectCards;
