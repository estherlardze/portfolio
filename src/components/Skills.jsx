import React from 'react'


const skills = [
  {
    name: 'HTML/CSS',
    cent: 95
  },
  {
    name: 'JavaScript',
    cent: 85
  },

{
  name: 'Next js',
  cent: 80
},
{
  name: 'Tailwind CSS',
  cent: 90
},
{
  name: 'Redux',
  cent: 70
},
{
  name: 'Typescript',
  cent: 80
}
]
const Skills = () => {
  return (
    <section className='w-[80%] mx-[10%] my-[50px]'>
     <h1 className='text-lg mb-3'>Tech Stacks</h1>
       <div className='grid grid-cols-2 gap-6'>
         {skills.map((skill, index) =>(
           <article key={index} className='col-span-2 sm:col-span-1'>
            <div className='flex justify-between items-center'>
              <p>{skill.name}</p>
              <p>{skill.cent}%</p>
            </div>
             <div className="w-full bg-brown-900 rounded-full h-2.5 mb-4">
               <div
                 className={`bg-yellow-500 h-2.5 rounded-full `} 
                 style={{ width: `${skill.cent}%` }}
                 ></div>
               </div>
           </article>
         ))}
       </div>
    </section>
  )
}

export default Skills
