import React from 'react'
import educationData from '@/data/education.json'

export default function Education() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-0'>
      <div className='px-4 sm:px-6 md:px-8 lg:px-64 text-base sm:text-lg font-semibold text-violet-600 animate-fade-in'>
        Education
      </div>
      <div className='space-y-6 sm:space-y-8 col-span-1 lg:col-span-2 text-sm px-4 sm:px-6'>
        {educationData.education.map((edu, index) => (
          <div 
            key={edu.id} 
            className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-10 p-3 sm:p-4 rounded-lg hover:bg-purple-50 transition-all duration-300 card-hover animate-fade-in'
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className='text-left sm:text-right text-gray-500 font-medium text-xs sm:text-sm'>
              {edu.period}
            </div>
            <div className='space-y-2 sm:space-y-2.5 col-span-1 sm:col-span-2 sm:pl-5 pr-2 sm:pr-4 md:pr-10'>
              <div className='font-semibold text-sm text-gray-800'>
                {edu.degree} | <br /> {edu.institution}
              </div>
              <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
