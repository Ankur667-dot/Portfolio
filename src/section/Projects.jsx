import React from 'react'
import Project from '../components/Project'
import { myProjects } from '../constants'

export default function Projects() {
  return (
   <section className='relative c-space section-spacing' id="work">
    <h2 className='text-heading'>
      My Projects
    </h2>
    {/* <Project /> */}
    <div className='bg-gradient-to-r from-transparent via-neutral-700 mt-12 h-[1px] w-full'>
     {myProjects.map((project)=>(
      <Project key={project.id} {...project}/>
     ))}
    </div>
   </section>
  )
}
