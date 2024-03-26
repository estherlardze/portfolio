import React from 'react'
import {gp, blog, you, geo, fit} from '../assets'
import { Link } from 'react-router-dom'

const projects = [
  {
    image: fit,
    name: 'Fitness hub',
    content: 'hhhhhhhhhhhhhhhhhhh',
    github:'https://github.com/estherlardze/fitness_hub',
    live:'https://fitness-hub-kuda.vercel.app/',
  },
  {
    image: blog,
    name: 'Careari',
    content: 'hhhhhhhhhhhhhhhhhhh',
    github:'https://github.com/estherlardze/job-search-portal',
    live:'https://job-search-portal-wfdh.vercel.app/'
  },
  {
    image: you,
    name:'Youtube',
    content: 'hhhhhhhhhhhhhhhhhhh',
    github:'https://github.com/estherlardze/youtube-clone',
    live:'https://youtube-clone-4ibp.vercel.app/'
  },
  {
    image: geo,
    name: 'Geo Fosu',
    content: 'hhhhhhhhhhhhhhhhhhh',
    github:'https://github.com/estherlardze/geo-fosu-limited',
    live:'https://geo-fosu-limited.vercel.app/'
  },
  {
    image: gp,
    name: 'Gp',
    content: 'hhhhhhhhhhhhhhhhhhh',
    github:'https://github.com/estherlardze/gp-landing-page',
    live:'https://gp-landing-page.vercel.app/'
  },
  {
    image: geo,
    name: 'Geo Fosu',
    content: 'hhhhhhhhhhhhhhhhhhh',
    github:'https://github.com/estherlardze/geo-fosu-limited',
    live:'https://geo-fosu-limited.vercel.app/'
  }
]

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
              <div className='p-2 '>
                <p className='font-semibold'>{project.name}</p>
                <p className='text-sm text-gray-400 my-2'>
                  Lorem ipsum dolor sit ame non unde eum sunt ab adipisci cumque obcaecati quidem vel cupiditate temporibus, aut a numquam vero veniam. Explicabo similique, dolor nesciunt aliquam vitae optio pariatur et!
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
