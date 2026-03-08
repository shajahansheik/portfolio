import React from 'react'
import skillsData from '@/data/skills.json'

export default function Skills() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-0'>
      <div className='px-4 sm:px-6 md:px-8 lg:px-64 text-base sm:text-lg font-semibold text-violet-600 animate-fade-in'>
        Skills
      </div>
      <div className='space-y-3 sm:space-y-4 col-span-1 lg:col-span-2 px-4 sm:px-6'>
        {skillsData.skills.map((skill, index) => (
          <div 
            key={skill.id} 
            className='bg-white sm:bg-transparent border sm:border-0 border-violet-100 rounded-lg p-4 sm:p-4 hover:bg-violet-50 transition-all duration-300 card-hover animate-slide-in-right'
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className='flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 md:gap-10'>
              <div className='text-left sm:text-right text-violet-600 sm:text-gray-500 font-semibold sm:font-medium text-sm mb-2 sm:mb-0 pb-2 sm:pb-0 border-b sm:border-b-0 border-violet-100'>
                {skill.category}
              </div>
              <div className='col-span-1 sm:col-span-2 sm:pl-5 text-sm text-gray-700 leading-relaxed'>
                {/* Mobile view: Pills/Tags */}
                <div className='flex flex-wrap gap-2 sm:hidden'>
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className='inline-block bg-violet-50 px-3 py-1 rounded-full text-xs text-gray-700 border border-violet-100'
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {/* Tablet and Desktop view: Comma-separated */}
                <div className='hidden sm:block'>
                  : {skill.items.join(', ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
