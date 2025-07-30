import React from 'react'
import ProjectCard from '@/Components/ProjectCard'

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold'>Projects</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
            <ProjectCard
                title="Project One"
                techs={['React', 'Next.js', 'Tailwind CSS']}
                imageSrc="/Assets/kenithDev.svg"
                description="A brief description of Project One."
                githubUrl="https://github.com/user/project1"
                liveUrl="https://user.github.io/project1"
            />
        </div>
    </div>
  )
}

export default Projects