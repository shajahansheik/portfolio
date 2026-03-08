import React from 'react'
import BottomNav from '../components/bottomnav'
import projectsData from '@/data/projects.json'

export default function page() {
  return (
    <div className='space-y-5 bg-gradient-to-br from-pink-50 via-white to-purple-50 h-full'>
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl sm:text-2xl md:text-3xl font-bold gradient-text pt-6 animate-fade-in'>
        Projects
      </div>
      <div className='overflow-y-auto h-[calc(100%-8rem)] py-5 space-y-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20'>
        {projectsData.projects.map((project, index) => (
          <React.Fragment key={project.id}>
            <div 
              className='space-y-3 pb-4 sm:pb-6 p-4 sm:p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-scale-in'
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='px-2 sm:px-4 md:px-6 lg:px-8 text-base sm:text-lg md:text-xl font-bold text-violet-700 flex items-center gap-2'>
                <span className='w-2 h-2 bg-violet-600 rounded-full animate-pulse-slow'></span>
                {project.title}
              </div>
              <div className='px-2 sm:px-4 md:px-6 lg:px-8 indent-4 sm:indent-6 md:indent-10 text-sm sm:text-base leading-relaxed text-gray-700'>
                <p>{project.description}</p>
              </div>
            </div>
            {index < projectsData.projects.length - 1 && (
              <div className='mx-2 sm:mx-4 md:mx-6 lg:mx-8 text-gray-300'>
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
