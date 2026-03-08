import React from 'react'
import BottomNav from '../components/bottomnav'
import projectsData from '@/data/projects.json'

export default function page() {
  return (
    <div className='space-y-3 md:space-y-5 bg-gradient-to-br from-pink-50 via-white to-purple-50 h-full'>
      <div className='px-4 sm:px-8 md:px-32 lg:px-60 text-xl sm:text-2xl md:text-3xl font-bold gradient-text pt-4 md:pt-6 animate-fade-in'>
        Projects
      </div>
      <div className='overflow-y-auto h-[calc(100%-6rem)] md:h-[calc(100%-8rem)] py-3 md:py-5 space-y-3 md:space-y-4 px-2 sm:px-4'>
        {projectsData.projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div 
              className='space-y-2 md:space-y-3 pb-4 md:pb-8 p-4 md:p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-scale-in'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='px-2 sm:px-4 md:px-32 lg:px-64 text-base md:text-lg font-bold text-violet-700 flex items-center gap-2'>
                <span className='w-2 h-2 bg-violet-600 rounded-full animate-pulse-slow flex-shrink-0'></span>
                <span className='break-words'>{project.title}</span>
              </div>
              <div className='px-2 sm:px-4 md:px-32 lg:px-64 indent-4 sm:indent-6 md:indent-10 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700'>
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
