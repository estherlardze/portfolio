import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'



const Projects = () => {
  return (
    <div className='w-[80%] mx-[10%] my-[50px]'>
      <div className='mb-3'>
        <h1 className='font-bold  text-3xl'>Projects</h1>
        <div className='h-1 w-7 bg-yellow-500'></div>
       </div>

       <div className='grid grid-cols-3 gap-5'>
         {projects.map((project, index) => (
           <article key={index} className='col-span-1 bg-black/60 h-fit border border-yellow-500/30 shadow-lg'>
              <img src={project.image} alt={`project ${index}`} className='h-[150px]'/>
              <div className='p-2 h-[200px]'>
                <p className='font-semibold'>{project.name}</p>
                <p className='text-sm text-gray-400 my-2'>
                  {project.content}
                </p>
                <div className='flex gap-3 text-sm'>
                   <Link to={project.github} className='underline'>View Code</Link>
                   <Link to={project.live} className='underline'>Live App</Link>
                </div>
              </div>
           </article>
         ))}
       </div>
    </div>
  )
}

export default Projects
