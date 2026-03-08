import React from 'react'
import experienceData from '@/data/experience.json'

export default function Experience() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0'>
      <div className='px-4 sm:px-8 lg:px-64 text-lg font-semibold text-violet-600 animate-fade-in'>
        Work <br/>Experience
      </div>
      <div className='space-y-8 col-span-1 lg:col-span-2 px-4 sm:px-6'>
        {experienceData.experience.map((exp, index) => (
          <div 
            key={exp.id} 
            className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 text-sm p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 card-hover animate-slide-in-left'
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className='text-left sm:text-right text-gray-500 font-medium'>
              {exp.period}
            </div>
            <div className='space-y-2.5 col-span-1 sm:col-span-2 sm:pl-5 pr-4 sm:pr-10'>
              <div className='font-semibold text-sm text-gray-800'>
                {exp.position} | <br/> {exp.company}
              </div>
              <p className='text-sm text-gray-600 leading-relaxed'>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
