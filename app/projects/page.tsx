import React from 'react'
import BottomNav from '../components/bottomnav'
import projectsData from '@/data/projects.json'

export default function page() {
  return (
    <div className='space-y-5 bg-gradient-to-br from-pink-50 via-white to-purple-50 h-full'>
      <div className='px-4 sm:px-8 lg:px-60 text-2xl sm:text-3xl font-bold gradient-text pt-6 animate-fade-in'>
        Projects
      </div>
      <div className='overflow-y-auto h-[calc(100%-8rem)] py-5 space-y-4 px-2 sm:px-4'>
        {projectsData.projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div 
              className='space-y-3 pb-8 p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-scale-in'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='px-4 sm:px-8 lg:px-64 text-lg font-bold text-violet-700 flex items-center gap-2'>
                <span className='w-2 h-2 bg-violet-600 rounded-full animate-pulse-slow'></span>
                {project.title}
              </div>
              <div className='px-4 sm:px-8 lg:px-64 indent-6 sm:indent-10 text-sm sm:text-base leading-relaxed text-gray-700'>
                <p>{project.description}</p>
              </div>
            </div>
            {index < projectsData.projects.length - 1 && (
              <div className='mx-4 sm:mx-8 lg:mx-16 text-gray-300'>
                <hr className='border-gray-300'/>
              </div>
            )}
          </React.Fragment>
        ))}
        <BottomNav />
      </div>
    </div>
  )
}
