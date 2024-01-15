import React from 'react'
import { RiArrowDownDoubleFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className='bg-header bg-fixed bg-cover bg-no-repeat bg-center h-[80vh] w-full'>
      <div className='w-full h-[80vh] bg-black/60 text-white flex items-center justify-center flex-col'>
         <h1 className='font-playfair font-bold text-6xl'>Hi, I'm Esther!</h1>
         <p className='my-3'>I am a software developer, frontend developer</p>
         <a 
           href="#" 
           className='hover:text-red-600 transition-all duration-300 ease-in-out transform hover:translate-y-1'>
           <RiArrowDownDoubleFill size={70}/>
         </a>
      </div>
    </div>
  )
}

export default Header
