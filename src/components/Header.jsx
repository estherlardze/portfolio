import React from 'react'
import { RiArrowDownDoubleFill } from "react-icons/ri";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Header = () => {
const [text] = useTypewriter({
  words: ['Frontend Develeper', 'Software Developer'],
  loop: {},
  typeSpeed: 120,
  delaySpeed:100
})

  return (
    <div className='bg-portfolio bg-fixed bg-cover bg-no-repeat bg-center h-[90vh] w-full'>
      <div className='w-full h-[90vh] bg-black/60 text-white flex items-center justify-center flex-col'>
         <h1 className='font-playfair font-bold text-6xl'>I'm Esther!</h1>
         <p className='my-3 text-lg text-gray-300'> 
           <span>{text}</span>
           <span className='text-green-500'><Cursor/></span>
          </p>
         <a 
           href="#" 
           className='hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:translate-y-1'>
           <RiArrowDownDoubleFill size={70}/>
         </a>
      </div>
    </div>
  )
}

export default Header
