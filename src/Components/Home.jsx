import React from 'react'
import TextChange from './TextChange';
import Aboutimg from '../assets/about.webp'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-16'>
        <div className="md:w-2/4 md:pt-10">
        <h1 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'>
            <TextChange />
        </h1>
            <p className="text-sm p-2 md:text-xl tracking-tight ">Passionate Frontend Developer with a strong eye for design and a focus on creating engaging, responsive web experiences. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Dedicated to building clean, user-friendly interfaces that blend performance with aesthetics.</p>
            <button className='mt-5 md:mt-10 text-white py-0 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] '><a href='#Contact'>Contact Me</a></button>
        </div>
      <div className='flex justify-end md:w-2/5'><img className= "w-9/12 me-14" src={Aboutimg} alt='image'></img></div>
    </div>
  )
}

export default Home;
