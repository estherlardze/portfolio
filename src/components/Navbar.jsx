import React, {useState} from 'react'
import { IoMdMenu, IoMdClose} from "react-icons/io";

const Navbar = () => {
 const [menu, setMenu] = useState(false)

  return (
    <nav className='z-40'>
       <section className='flex justify-between items-center shadow-lg p-5'>
         <h1 className='text-2xl font-bold'>OE</h1>
         <div className='sm:flex space-x-5 hidden'>
            <p className='hover:text-yellow-500'>Tech Stack</p>
            <p>Projects</p>
            <p>Articles</p>
            <p>Download CV</p>
          </div>
         
         <div onClick={() => setMenu(!menu)} className='sm:hidden'>
           { menu ? 
              <IoMdClose size={22} className='sm:hidden'/> 
              :
              <IoMdMenu  size={22} className=''/>            
            }
         </div>
       </section>
       

        <div className=''>
        {menu && (
           <div className='sm:hidden bg-red-600 w-full h-screen z-50 flex text-lg gap-4 flex-col justify-center items-center'>
             <p className='hover:text-yellow-500'>Tech Stack</p>
             <p>Projects</p>
             <p>Articles</p>
            <p>Download CV</p>
           </div>
         )}
        </div>
    </nav>
  )
}

export default Navbar