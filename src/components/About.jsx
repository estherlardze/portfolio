import React from 'react'
import ab from '../assets/ab.jpg'

const About = () => {
  return (
    <div className='w-[80%] mx-[10%] my-[50px] grid grid-cols-2 justify-center items-center gap-6'> 
     <img src={ab} alt="about me" className='col-span-2 sm:col-span-1 z-10 w-full h-[300px]'/>
     <div>
      <p className='col-span-2 sm:col-span-1'>
        I am a frontend engineer with two years of experience working
        with React.js, Next.js, TypeScript, and Tailwind CSS. I am
        passionate about creating sleek and interactive web experiences,
        and I enjoy combining creativity and functionality to offer
        seamless user interfaces. Let's work together to make your 
        digital ideas a reality!
        </p>
        <p className='bg-yellow-500 py-1 mt-3 px-4 rounded-lg w-fit text-black font-semibold'>Hire Me</p>
     </div>
    </div>
  )
}

export default About
