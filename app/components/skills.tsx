import React from 'react'
import skillsData from '@/data/skills.json'

export default function Skills() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-0'>
      <div className='px-4 sm:px-8 md:px-32 lg:px-64 text-base md:text-lg font-semibold text-violet-600 animate-fade-in'>
        Skills
      </div>
      <div className='space-y-3 md:space-y-4 col-span-1 lg:col-span-2 text-xs sm:text-sm px-4 sm:px-6'>
        {skillsData.skills.map((skill, index) => (
          <div 
            key={skill.id} 
            className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 md:gap-10 p-3 md:p-4 rounded-lg hover:bg-violet-50 transition-all duration-300 card-hover animate-slide-in-right'
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className='text-left sm:text-right text-gray-500 font-medium'>
              {skill.category}
            </div>
            <div className='space-y-2.5 col-span-1 sm:col-span-2 sm:pl-5 pr-2 sm:pr-4 md:pr-10 break-words'>
              : {skill.items.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
